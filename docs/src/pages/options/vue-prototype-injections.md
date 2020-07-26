---
title: Vue Prototype Injections
desc: Injections into the Vue prototype supplied by Efuzy.
---
Efuzy injects Vue prototype with `$q` object:

| Injection | Type | Description |
| --- | --- | --- |
| `$q.version` | String | Efuzy version. |
| `$q.platform` | Object | Same object as [Platform](/options/platform-detection) import from Efuzy. |
| `$q.screen` | Object | Object supplied by [Screen Plugin](/options/screen-plugin). |
| `$q.lang` | Object | Efuzy Language pack management, containing labels etc (one of [lang files](https://github.com/efuzy/efuzy/tree/dev/ui/lang)). Designed for Efuzy components, but you can use it in your app components too. More info: [Efuzy Language Packs](/options/efuzy-language-packs). |
| `$q.iconSet` | Object | Efuzy icon set management (one of [icon set files](https://github.com/efuzy/efuzy/tree/dev/ui/icon-set)). Designed for Efuzy components, but you can use it in your app components too. More info: [Efuzy Icon Sets](/options/efuzy-icon-sets). |
| `$q.cordova` | Object | Reference to Cordova global object. Available only when running under a Cordova app. |
| `$q.capacitor` | Object | (@efuzy/app v1.2+) Reference to Capacitor global object. Available only when running under a Capacitor app. |
| `$q.electron` | Object | Reference to Electron global object. Available only when running under an Electron app and **if [Node Integration](/efuzy-cli/developing-electron-apps/node-integration) is NOT turned off**. |

## Example

You can use it globally inside a Vue context (component script or template) like this:

```vue
<!-- inside a Vue template -->
<template>
  <div>
    <div v-if="$q.platform.is.ios">
      Gets rendered only on iOS platform.
    </div>
  </div>
</template>

<script>
// not available here outside
// of the export

export default {
  // inside a Vue component script
  ...,

  // showing an example on a method, but
  // can be any part of Vue script
  methods: {
    show () {
      // prints out Efuzy version
      console.log(this.$q.version)
    }
  }
}
</script>
```
