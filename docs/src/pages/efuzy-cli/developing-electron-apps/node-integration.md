---
title: Electron Node Integration
desc: How to handle Electron Node Integration with Efuzy CLI.
---

Electron node integration refers to the ability of accessing Node.js resources from within the "renderer" thread (the UI). It is enabled by default in Efuzy CLI, although Electron is encouraging developers to turn it off as a security precaution.

As of "@efuzy/app" v1.3+, you can turn off the node integration.

## What won't work when turning it off
If you turn off the node integration, then in the renderer thread you won't be able to:

* Import Node.js packages (like "fs", "path", "electron"). Using "require" will trigger an error.
* Use `__statics` ([more info](/efuzy-cli/developing-electron-apps/electron-static-assets)).
* Use `this.$q.electron` (as an alias to `electron` Object) in your .vue files.

Example of what you WON'T be able to do:

```js
export default {
  methods: {
    minimize () {
      this.$q.electron.remote.BrowserWindow.getFocusedWindow().minimize()

      // equivalent to:
      const { remote } = require('electron')
      remote.BrowserWindow.getFocusedWindow().minimize()
    }
  }
}
```

However, if you will be using an [Electron preload script](/efuzy-cli/developing-electron-apps/electron-preload-script), you can access Node from there, regardless if Node integration is turned on or off. So basically you can inject stuff into "window" global from there.

## How to turn it off
Should you want to disable the node integration then you must edit /efuzy.conf.js:

```js
// file: /efuzy.conf.js
electron: {
  nodeIntegration: false
}
```

::: tip
Starting with "@efuzy/app" v2.0+ you can edit your main thread file to set `nodeIntegration: process.env.EFUZY_NODE_INTEGRATION`. The `EFUZY_NODE_INTEGRATION` env variable is injected by Efuzy so that you'll have only one place to edit your Node Integration state: efuzy.conf.js.
:::

### Legacy warnings

**If your version of "@efuzy/app" is greater than v1.7 and lower than v2.0**, then you also need to use `EFUZY_NODE_INTEGRATION` in your main thread file (/src-electron/main-process/main.js):

```js
// file: /src-electron/main-process/main.js

mainWindow = new BrowserWindow({
  // ..

  webPreferences: {
    nodeIntegration: EFUZY_NODE_INTEGRATION
  }
})
```

**If your version of "@efuzy/app" is lower than v1.7**, then you also need to edit your main thread file (/src-electron/main-process/main.js):

```js
// file: /src-electron/main-process/main.js

mainWindow = new BrowserWindow({
  // ..

  webPreferences: {
    nodeIntegration: false
  }
})
```

Make sure that you keep the two configuration places in sync!
