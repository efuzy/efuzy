---
title: DOM Hooks
desc: How to communicate to the underlying web page using dom hooks in Efuzy Browser Extension mode.
---

`src-bex/js/dom-hooks.js` is a javascript file that is injected into the underlying web page automatically by Efuzy but as with all the other hook files has access to the bridge via:

```js
export default function attachDomHooks (bridge) {
}
```

If you ever find yourself needing to inject a JS file into your underlying web page, you can use dom hooks instead as it means you can maintain that chain of communication in the BEX.

For example, lets say you wanted to write a BEX that detects whether or not a Efuzy app is running on a page, the only way to do this is by running some javascript in the context of the web page.

```js
// detect-efuzy.js:

function initEfuzy (bridge, efuzyInstance) {
  bridge.send('efuzy.detect', {
    version: efuzyInstance.version,
    dark: {
      isActive: efuzyInstance.dark ? efuzyInstance.dark.isActive : void 0
    },
    umd: efuzyInstance.umd,
    iconSet: {
      name: efuzyInstance.iconSet.name,
      __installed: efuzyInstance.iconSet.__installed
    },
    lang: {
      rtl: efuzyInstance.lang.rtl
    }
  })
  window.__EFUZY_DEVTOOLS__ = {
    Efuzy: efuzyInstance
  }
}

export default function detectEfuzy (bridge) {
  if (window.Efuzy) { // UMD
    initEfuzy(bridge, {
      version: window.Efuzy.version,
      dark: window.Efuzy.Dark,
      ...window.Efuzy,
      umd: true
    })
  }
  else { // CLI
    setTimeout(() => {
      const all = document.querySelectorAll('*')
      let el
      for (let i = 0; i < all.length; i++) {
        if (all[i].__vue__) {
          el = all[i]
          break
        }
      }

      if (el) {
        let Vue = Object.getPrototypeOf(el.__vue__).constructor
        while (Vue.super) {
          Vue = Vue.super
        }
        if (Vue.prototype.$q) {
          initEfuzy(bridge, Vue.prototype.$q)
        }
      }
    }, 100)
  }
}
```

```js
// dom-hooks.js:

import detectEfuzy from './dom/detect-efuzy'
export default function attachDomHooks (bridge) {
  detectEfuzy(bridge)
}
```

The bridge above will notify all listeners in the BEX that Efuzy has been found and along with that send the instance information.
