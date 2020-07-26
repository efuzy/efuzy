---
title: App Extension Index API
desc: The API for the index script of a Efuzy App Extension. Provides access to Efuzy context, registers new CLI commands, extends Webpack config and more.
---

This page refers to `src/index.js` file, which is executed on `efuzy dev` and `efuzy build`. This is the main process where you can modify the build to suit the needs of your App Extension. For instance, registering a boot file, modifying the webpack process, registering CSS, registering a UI component, registering a Efuzy CLI command, etc.

Example of basic structure of the file:

```js
module.exports = function (api) {
  // props & methods for "api" Object described below
}
```

## api.ctx
Same as the `ctx` from `/efuzy.conf.js`. Helps you make decisions based on the context in which `efuzy dev` or `efuzy build` runs.

Example: You might want to use one of the api methods if running for electron mode only.

```js
if (api.ctx.dev === true && api.ctx.mode === 'electron') {
  api.beforeDev((api) => {
    // do something when running efuzy dev and
    // with Electron mode
  })
}
```

## api.extId
Contains the `ext-id` (String) of this App Extension.

## api.prompts
Is an Object which has the answers to the prompts when this App Extension got installed. For more info on prompts, check out [Prompts API](/app-extensions/development-guide/prompts-api).

## api.resolve
Resolves paths within the app on which this App Extension is running. Eliminates the need to import `path` and resolve the paths yourself.

```js
// resolves to root of app
api.resolve.app('src/my-file.js')

// resolves to root/src of app
api.resolve.src('my-file.js')

// resolves to root/src-pwa of app
api.resolve.pwa('some-file.js')

// resolves to root/src-ssr of app
api.resolve.ssr('some-file.js')

// resolves to root/src-cordova of app
api.resolve.cordova('config.xml')

// resolves to root/src-electron of app
api.resolve.electron('some-file.js')
```

## api.appDir
Contains the full path (String) to the root of the app on which this App Extension is running.

## api.compatibleWith

Ensure the App Extension is compatible with a package installed in the host app through a semver condition.

If the semver condition is not met, then @efuzy/app errors out and halts execution.

Example of semver condition: `'1.x || >=2.5.0 || 5.0.0 - 7.2.3'`.

```js
/**
 * @param {string} packageName
 * @param {string} semverCondition
 */
api.compatibleWith('@efuzy/app', '1.x')
```

## api.hasPackage

Determine if some package is installed in the host app through a semver condition.

Example of semver condition: `'1.x || >=2.5.0 || 5.0.0 - 7.2.3'`.

```js
/**
 * @param {string} packageName
 * @param {string} (optional) semverCondition
 * @return {boolean} package is installed and meets optional semver condition
 */
if (api.hasPackage('vuelidate')) {
  // hey, this app has it (any version of it)
}
if (api.hasPackage('efuzy', '^1.0.0')) {
  // hey, this app has v1 installed
}
```

## api.hasExtension
Check if another app extension is npm installed and Efuzy CLI has invoked it.

```js
/**
 * Check if another app extension is installed
 *
 * @param {string} extId
 * @return {boolean} has the extension installed & invoked
 */
if (api.hasExtension(extId)) {
  // hey, we have it
}
```

## api.getPackageVersion

Get the version of a host app package.

```js
/**
 * @param {string} packageName
 * @return {string|undefined} version of app's package
 */
console.log( api.getPackageVersion(packageName) )
// output examples:
//   1.1.3
//   undefined (when package not found)
```

## api.extendEfuzyConf
Extends efuzy.conf.js

```js
/**
 * @param {function} fn
 *   (cfg: Object, ctx: Object) => undefined
 */
api.extendEfuzyConf ((conf, api) => {
  // do something with efuzy.conf.js:
  // add, change anything
})
```

### Registering boot and css files

```js
module.exports = function (api, ctx) {
  api.extendEfuzyConf((conf, api) => {
    // make sure my-ext boot file is registered
    conf.boot.push('~efuzy-app-extension-my-ext/src/boot/my-ext-bootfile.js')

    // make sure boot file transpiles
    conf.build.transpileDependencies.push(/efuzy-app-extension-my-ext[\\/]src[\\/]boot/)
    // if boot file imports anything, make sure that
    // the regex above matches those files too!

    // make sure my-ext css goes through webpack
    conf.css.push('~efuzy-app-extension-my-ext/src/component/my-ext.styl')
  })
}
```

::: tip
Notice the tidle (`~`) in front of the paths. This tells Efuzy CLI that the path is a dependency from node_modules instead of a relative path to App Extension index script file.
:::

## api.chainWebpack
Chain webpack config

```js
/**
 * @param {function} fn
 *   (cfg: ChainObject, invoke: Object {isClient, isServer}) => undefined
 */
api.chainWebpack((cfg, { isClient, isServer }, api) => {
  // add/remove/change cfg (Webpack chain Object)
})
```

The configuration is a Webpack chain Object. The API for it is described on [webpack-chain](https://github.com/neutrinojs/webpack-chain) docs.

## api.extendWebpack
Extend webpack config

```js
/**
 * @param {function} fn
 *   (cfg: Object, invoke: Object {isClient, isServer}) => undefined
 */
api.extendWebpack((cfg, { isClient, isServer }, api) => {
  // add/remove/change cfg (Webpack configuration Object)
})
```

## api.chainWebpackMainElectronProcess
Chain webpack config of main electron process

```js
/**
 * @param {function} fn
 *   (cfg: ChainObject) => undefined
 */
api.chainWebpackMainElectronProcess((cfg, { isClient, isServer }, api) => {
  // add/remove/change cfg (Webpack chain Object)
})
```

## api.extendWebpackMainElectronProcess
Extend webpack config Object of main electron process

```js
/**
 * @param {function} fn
 *   (cfg: Object) => undefined
 */
api.extendWebpackMainElectronProcess((cfg, { isClient, isServer }, api) => {
  // add/remove/change cfg (Webpack configuration Object)
})
```

## api.chainWebpackWebserver <q-badge align="top" label="@efuzy/app v1.5+" />

Chain webpack config of SSR webserver (content of /src-ssr)

```js
/**
 * @param {function} fn
 *   (cfg: ChainObject) => undefined
 */
api.chainWebpackWebserver ((cfg, { isClient, isServer }, api) => {
  // add/remove/change cfg (Webpack chain Object)
})
```

## api.extendWebpackWebserver <q-badge align="top" label="@efuzy/app v1.5+" />

Extend webpack config Object of SSR webserver (content of /src-ssr)

```js
/**
 * @param {function} fn
 *   (cfg: Object) => undefined
 */
api.extendWebpackWebserver((cfg, { isClient, isServer }, api) => {
  // add/remove/change cfg (Webpack configuration Object)
})
```

## api.registerCommand
Register a command that will become available as `efuzy run <ext-id> <cmd> [args]` (or the short form: `efuzy <ext-id> <cmd> [args]`).

```js
/**
 * @param {string} commandName
 * @param {function} fn
 *   ({ args: [ string, ... ], params: {object} }) => ?Promise
 */
api.registerCommand('start', ({ args, params }) => {
  // do something here

  // this registers the "start" command
  // and this handler is executed when running
  // $ efuzy run <ext-id> start
})
```

## api.registerDescribeApi
Register an API file for `$ efuzy describe` command.

```js
/**
 * @param {string} name
 * @param {string} relativePath
 *   (relative path starting from the file where you have this call)
 */
api.registerDescribeApi(
  'MyComponent',
  './relative/path/to/my/component/file.json'
)
```

The above will then respond to `$ efuzy describe MyComponent`.

For syntax of such a JSON file, look into `/node_modules/efuzy/dist/api` (in your project folder). Be aware that your JSON must contain a `type` property ("component", "directive", "plugin"). For instance:

```json
{
  "type": "component",
  "props": {
  },
  ...
}
```

::: tip
Always test with the `efuzy describe` command to ensure you got the syntax right and there are no errors.
:::

## api.getPersistentConf

Get the internal persistent config of this extension. Returns empty object if it has none.

```js
/**
 * @return {object} cfg
 */
api.getPersistentConf()
```

## api.setPersistentConf

Set the internal persistent config of this extension. If it already exists, it is overwritten.

```js
/**
 * @param {object} cfg
 */
api.setPersistentConf({
  // ....
})
```

## api.mergePersistentConf

Deep merge into the internal persistent config of this extension. If extension does not have any config already set, this is essentially equivalent to setting it for the first time.

```js
/**
 * @param {object} cfg
 */
api.mergePersistentConf({
  // ....
})
```

## api.beforeDev

Prepare external services before `$ efuzy dev` command runs, like starting some backend or any other service that the app relies on.

Can use async/await or directly return a Promise.

```js
/**
 * @param {function} fn
 *   (api, { efuzyConf }) => ?Promise
 */
api.beforeDev((api, { efuzyConf }) => {
  // do something
})
```

## api.afterDev

Run hook after Efuzy dev server is started (`$ efuzy build`). At this point, the dev server has been started and is available should you wish to do something with it.

Can use async/await or directly return a Promise.

```js
/**
 * @param {function} fn
 *   (api, { efuzyConf }) => ?Promise
 */
api.afterDev((api, { efuzyConf }) => {
  // do something
})
```

## api.beforeBuild

Run hook before Efuzy builds app for production (`$ efuzy build`). At this point, the distributables folder hasn't been created yet.

Can use async/await or directly return a Promise.

```js
/**
 * @param {function} fn
 *   (api, { efuzyConf }) => ?Promise
 */
api.beforeBuild((api, { efuzyConf }) => {
  // do something
})
```

## api.afterBuild

Run hook after Efuzy built app for production (`$ efuzy build`). At this point, the distributables folder has been created and is available should you wish to do something with it.

Can use async/await or directly return a Promise.

```js
/**
 * @param {function} fn
 *   (api, { efuzyConf }) => ?Promise
 */
api.afterBuild((api, { efuzyConf }) => {
  // do something
})
```

## api.onPublish <q-badge align="top" label="@efuzy/app v1.0.0-rc.7+" />

Run hook if publishing was requested (`$ efuzy build -P`), after Efuzy built app for production and the afterBuild hook (if specified) was executed.

Can use async/await or directly return a Promise.

```js
/**
 * @param {function} fn
 *   () => ?Promise
 * @param {object} opts
 *   * arg - argument supplied to "--publish"/"-P" parameter
 *   * distDir - folder where distributables were built
 */
api.onPublish((api, opts) => {
  // do something
})
```
