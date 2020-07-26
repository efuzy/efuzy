---
title: Injecting Efuzy Plugin
desc: Tips and tricks on how to use a Efuzy App Extension to configure the host app to use a Efuzy Plugin.
---

This guide is for when you want to ensure that a [Efuzy Plugin](/efuzy-plugins) will be injected into the hosting app, because you depend on it for your own App Extension to work.

::: tip
In order for creating an App Extension project folder, please first read the [Development Guide > Introduction](/app-extensions/development-guide/introduction).
:::

::: tip Full Example
To see an example of what we will build, head over to [full example](https://github.com/efuzy/app-extension-examples/tree/master/inject-efuzy-plugin), which is a github repo with this App Extension.
:::

We will only need the /index.js script for this, because we can use the [Index API](/app-extensions/development-guide/index-api) to configure efuzy.conf.js from the host app to include our required Efuzy Plugin.

```bash
.
├── package.json
└── src
    └── index.js              # Described in Index API
```

And /index.js would look like this:

```js
// file: /index.js
module.exports = function (api) {
  // (Optional!)
  // Efuzy compatibility check; you may need
  // hard dependencies, as in a minimum version of the "efuzy"
  // package or a minimum version of "@efuzy/app" CLI
  api.compatibleWith('efuzy', '^1.0.0')
  api.compatibleWith('@efuzy/app', '^1.0.0')

  // Here we extend /efuzy.conf.js, so we can add
  // a boot file which registers our new Vue directive;
  // "extendConf" will be defined below (keep reading the tutorial)
  api.extendEfuzyConf(extendConf)
}
```

Our "extendConf" method, in the same file as above:

```js
// file: /index.js
function extendConf (conf) {
  // we push to /efuzy.conf.js > framework > plugins:
  conf.framework.plugins.push('AppVisibility')
}
```

