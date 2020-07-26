const fs = require('fs')
const path = require('path')
const compileTemplate = require('lodash.template')

const { log } = require('./helpers/logger')
const appPaths = require('./app-paths')
const efuzyFolder = appPaths.resolve.app('.efuzy')

class Generator {
  constructor (efuzyConfig) {
    const { ctx } = efuzyConfig.getBuildConfig()

    this.alreadyGenerated = false
    this.efuzyConfig = efuzyConfig

    const paths = [
      'app.js',
      'client-entry.js',
      'client-prefetch.js',
      'import-efuzy.js'
    ]

    if (ctx.mode.ssr) {
      paths.push(
        'server-entry.js',
        'ssr-pwa.js'
      )
    }

    this.files = paths.map(file => {
      const content = fs.readFileSync(
        appPaths.resolve.cli(`templates/entry/${file}`),
        'utf-8'
      )

      const filename = path.basename(file)

      return {
        filename,
        dest: path.join(efuzyFolder, filename),
        template: compileTemplate(content)
      }
    })

    if (ctx.prod && ctx.mode.ssr) {
      const ssrFile = path.join(__dirname, 'ssr/template.prod-webserver.js')

      this.files.push({
        filename: 'ssr.js',
        dest: path.join(efuzyFolder, 'ssr-config.js'),
        template: compileTemplate(fs.readFileSync(ssrFile, 'utf-8')),
        dataFn: efuzyConfig => ({
          opts: efuzyConfig.ssr.__templateOpts,
          flags: efuzyConfig.ssr.__templateFlags
        })
      })
    }
  }

  build () {
    log(`Generating Webpack entry point`)
    const data = this.efuzyConfig.getBuildConfig()

    // ensure .efuzy folder
    if (!fs.existsSync(efuzyFolder)) {
      fs.mkdirSync(efuzyFolder)
    }
    else if (!fs.lstatSync(efuzyFolder).isDirectory()) {
      const { removeSync } = require('fs-extra')
      removeSync(efuzyFolder)
      fs.mkdirSync(efuzyFolder)
    }

    this.files.forEach(file => {
      const templateData = file.dataFn !== void 0
        ? file.dataFn(data)
        : data

      fs.writeFileSync(file.dest, file.template(templateData), 'utf-8')
    })

    if (!this.alreadyGenerated) {
      const then = Date.now() / 1000 - 120

      this.files.forEach(file => {
        fs.utimes(file.dest, then, then, function (err) { if (err) throw err })
      })

      this.alreadyGenerated = true
    }
  }
}

module.exports = Generator
