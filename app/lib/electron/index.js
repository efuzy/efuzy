const webpack = require('webpack')
const chokidar = require('chokidar')
const fs = require('fs')
const debounce = require('lodash.debounce')

const { log, warn, fatal } = require('../helpers/logger')
const { spawn } = require('../helpers/spawn')
const appPaths = require('../app-paths')
const nodePackager = require('../helpers/node-packager')
const getPackageJson = require('../helpers/get-package-json')
const getPackage = require('../helpers/get-package')

class ElectronRunner {
  constructor () {
    this.pid = 0
    this.watcher = null
  }

  init () {}

  async run (efuzyConfig, argv) {
    const url = efuzyConfig.getBuildConfig().build.APP_URL

    if (this.pid) {
      if (this.url !== url) {
        await this.stop()
      }
      else {
        return
      }
    }

    this.url = url

    const compiler = webpack(efuzyConfig.getWebpackConfig().main)

    return new Promise(resolve => {
      log(`Building main Electron process...`)

      this.watcher = compiler.watch({}, async (err, stats) => {
        if (err) {
          console.log(err)
          return
        }

        log(`Webpack built Electron main process`)
        log()
        process.stdout.write(stats.toString({
          colors: true,
          modules: false,
          children: false,
          chunks: false,
          chunkModules: false
        }) + '\n')
        log()

        if (stats.hasErrors()) {
          warn(`Electron main build failed with errors`)
          return
        }

        await this.__stopElectron()
        this.__startElectron(argv._)

        resolve()
      })

      const preloadFile = appPaths.resolve.electron('main-process/electron-preload.js')

      if (fs.existsSync(preloadFile)) {
        // Start watching for electron-preload.js changes
        this.preloadWatcher = chokidar
          .watch(preloadFile, { watchers: { chokidar: { ignoreInitial: true } } })

        this.preloadWatcher.on('change', debounce(async () => {
          console.log()
          log(`electron-preload.js changed`)

          await this.__stopElectron()
          this.__startElectron(argv._)

          resolve()
        }, 1000))
      }
    })
  }

  build (efuzyConfig) {
    const cfg = efuzyConfig.getBuildConfig()

    return new Promise(resolve => {
      spawn(
        nodePackager,
        [ 'install', '--production' ].concat(cfg.electron.unPackagedInstallParams),
        { cwd: cfg.build.distDir },
        code => {
          if (code) {
            fatal(`[FAIL] ${nodePackager} failed installing dependencies`)
          }
          resolve()
        }
      )
    }).then(() => {
      return new Promise(async resolve => {
        if (typeof cfg.electron.beforePackaging === 'function') {
          log('Running beforePackaging()')
          log()

          const result = cfg.electron.beforePackaging({
            appPaths,
            unpackagedDir: cfg.build.distDir
          })

          if (result && result.then) {
            await result
          }

          log()
          log('[SUCCESS] Done running beforePackaging()')
        }
        resolve()
      })
    }).then(() => {
      const bundlerName = cfg.electron.bundler
      const bundlerConfig = cfg.electron[bundlerName]
      const bundler = require('./bundler').getBundler(bundlerName)
      const pkgName = `electron-${bundlerName}`

      return new Promise((resolve, reject) => {
        log(`Bundling app with electron-${bundlerName}...`)
        log()

        const bundlePromise = bundlerName === 'packager'
          ? bundler({
            ...bundlerConfig,
            electronVersion: getPackageJson('electron').version
          })
          : bundler.build(bundlerConfig)

        bundlePromise
          .then(() => {
            log()
            log(`[SUCCESS] ${pkgName} built the app`)
            log()
            resolve()
          })
          .catch(err => {
            log()
            warn(`[FAIL] ${pkgName} could not build`)
            log()
            console.error(err + '\n')
            reject()
          })
      })
    })
  }

  stop () {
    return new Promise(resolve => {
      let counter = 0
      const maxCounter = (this.watcher ? 1 : 0) + (this.preloadWatcher ? 1 : 0)

      const finalize = () => {
        counter++
        if (maxCounter <= counter) {
          this.__stopElectron().then(resolve)
        }
      }

      if (this.watcher) {
        this.watcher.close(finalize)
        this.watcher = null
      }

      if (this.preloadWatcher) {
        this.preloadWatcher.close().then(finalize)
        this.preloadWatcher = null
      }

      if (maxCounter === 0) {
        finalize()
      }
    })
  }

  __startElectron (extraParams) {
    log(`Booting up Electron process...`)
    this.pid = spawn(
      getPackage('electron'),
      [
        '--inspect=5858',
        appPaths.resolve.app('.efuzy/electron/electron-main.js')
      ].concat(extraParams),
      { cwd: appPaths.appDir },
      code => {
        if (this.killPromise) {
          this.killPromise()
          this.killPromise = null
        }
        else if (code) {
          warn()
          fatal(`Electron process ended with error code: ${code}\n`)
        }
        else { // else it wasn't killed by us
          warn()
          fatal('Electron process was killed. Exiting...\n')
        }
      }
    )
  }

  __stopElectron () {
    const pid = this.pid

    if (!pid) {
      return Promise.resolve()
    }

    log('Shutting down Electron process...')
    this.pid = 0
    return new Promise(resolve => {
      this.killPromise = resolve
      process.kill(pid)
    })
  }
}

module.exports = new ElectronRunner()
