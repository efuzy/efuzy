---
title: Provide a UI component
desc: Tips and tricks on how to provide a Vue component to the host app of a Efuzy App Extension.
---

This guide is for when you want to create a new UI component and provide it through an App Extension, which will inject it into the hosting app.

::: tip
In order for creating an App Extension project folder, please first read the [Development Guide > Introduction](/app-extensions/development-guide/introduction).
:::

::: tip Full Example
To see an example of what we will build, head over to [MyComponent full example](https://github.com/efuzy/app-extension-examples/tree/master/my-component), which is a github repo with this App Extension.
:::

Create a folder structure to keep your code modularized and organized. For instance, for a UI component, create a structure that looks like this:

```bash
.
├── package.json
└── src
    ├── boot                         # folder to contain 'boot' code
    │   └── register-my-component.js # boot file for component
    ├── component                    # folder to contain component
    │   ├── MyComponent.vue          # component file (can be .vue or even .js)
    │   └── MyComponent.styl         # stylus file for component (or .sass/.scss/.css, or whatever you need)
    └── index.js                     # Described in Index API
```

Now, you need to handle registering your component. You do this with the `/index.js` file (described in the [Index API](/app-extensions/development-guide/index-api)) that was created when you set up your new App Extension.

Let's break it down.

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
  // a boot file which registers our new UI component;
  // "extendConf" will be defined below (keep reading the tutorial)
  api.extendEfuzyConf(extendConf)
}
```

The first group does a compatibility check with Efuzy (which is optional, but recommended). If your component is using features of Efuzy that were available after a certain version, you can make sure that the version of Efuzy installed is the correct one.

::: tip
Not only can you do a `api.compatibleWith()` to check against Efuzy packages, but with any other available packages (that you do not supply yourself through your App Extension) as well. Please read [Handling package dependencies](/app-extensions/development-guide/introduction#Handling-package-dependencies) section from the App Extension Development Guide > Introduction page for more information.
:::

The second group tells Efuzy to call our custom function when the `extendEfuzyConf` CLI life-cycle hook is called. It would look something like this:

```js
// file: /index.js
function extendConf (conf) {
  // make sure my-component boot file is registered
  conf.boot.push('~efuzy-app-extension-my-component/src/boot/register-my-component.js')

  // make sure boot & component files get transpiled
  conf.build.transpileDependencies.push(/efuzy-app-extension-my-component[\\/]src/)

  // make sure my-component css goes through webpack to avoid ssr issues
  conf.css.push('~efuzy-app-extension-my-component/src/component/MyComponent.styl')
}
```

Finally, let's see how the boot file would look like. Make sure that you read the [Boot files](/efuzy-cli/boot-files) documentation and understand what a Boot file is first.

```js
// file: /src/boot/register-my-component.js
import Vue from 'vue'
import MyComponent from '../component/MyComponent.vue'

// we globally register our component with Vue
Vue.component('my-component', MyComponent)
```
