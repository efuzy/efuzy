![Efuzy Framework logo](https://cdn.efuzy.dev/logo/svg/efuzy-logo-full-inline.svg)

## Efuzy Framework Extras Package

> Build high-performance VueJS user interfaces in record time: responsive Single Page Apps, SSR Apps, PWAs, Browser extensions, Hybrid Mobile Apps and Electron Apps. If you want, all using the same codebase!

<img src="https://img.shields.io/npm/v/%40efuzy/extras.svg?label=@efuzy/extras">

[![Join the chat at https://chat.efuzy.dev](https://img.shields.io/badge/chat-on%20discord-7289da.svg)](https://chat.efuzy.dev)
<a href="https://forum.efuzy.dev" target="_blank"><img src="https://img.shields.io/badge/community-forum-brightgreen.svg"></a>
[![https://good-labs.github.io/greater-good-affirmation/assets/images/badge.svg](https://good-labs.github.io/greater-good-affirmation/assets/images/badge.svg)](https://good-labs.github.io/greater-good-affirmation)

## Why?
Why this package? Because it strips down unnecessary package files (so faster download times), all in one place, tested and ready to use with Efuzy. One other reason is that the material icons npm package sometimes fails to be downloaded by NPM.

## Contents

Please make sure you have latest `@efuzy/extras` npm package version installed into your project folder in order for you to benefit from everything below.

### Webfonts

| Vendor | Version | efuzy.conf.js extras name | Description | Notes | License |
| --- | --- | --- | --- | --- | --- |
| Roboto Font | CDN v20 | `roboto-font` | Recommended font along Material theme | | [License](roboto-font/LICENSE) |
| Roboto Font Latin Extended | CDN v20 | `roboto-font-latin-ext` | Recommended font along Material theme | | [License](roboto-font-latin-ext/LICENSE) |
| [Material Icons](https://material.io/tools/icons/?style=baseline) (Google) | CDN v53 | `material-icons` | Material icons font | Requires: Efuzy 1.0.5+, @efuzy/extras 1.2.0+ | [License](material-icons/LICENSE) |
| [Material Icons Outlined](https://material.io/tools/icons/?style=outline) | CDN v22 | `material-icons-outlined` | Material icons outlined font | Requires: Efuzy 1.0.5+, @efuzy/extras 1.2.0+ | [License](material-icons-outlined/LICENSE) |
| [Material Icons Round](https://material.io/tools/icons/?style=round) | CDN v22 | `material-icons-round` | Material icons round font | Requires: Efuzy 1.0.5+, @efuzy/extras 1.2.0+ | [License](material-icons-round/LICENSE) |
| [Material Icons Sharp](https://material.io/tools/icons/?style=sharp) | CDN v23 | `material-icons-sharp` | Material icons sharp font | Requires: Efuzy 1.0.5+, @efuzy/extras 1.2.0+ | [License](material-icons-sharp/LICENSE) |
| [MDI v5](https://materialdesignicons.com/) (Material Design Icons) | 5.3.45 | `mdi-v5` | Extended Material Design icons font | The Efuzy Icon Set is available in Efuzy 1.9.9+ | [License](mdi-v5/license.md) |
| MDI v4 (Material Design Icons) | 4.9.95 | `mdi-v4` | Extended Material Design icons font | | [License](mdi-v4/license.md) |
| MDI v3 (Material Design Icons) | 3.6.95 | `mdi-v3` | Extended Material Design icons font | | [License](mdi-v3/LICENSE) |
| [Font Awesome](https://fontawesome.com/icons?d=gallery) | 5.13.1 | `fontawesome-v5` | Fontawesome icons font | | [License](fontawesome-v5/LICENSE.txt) |
| [Ionicons](https://ionicons.com/v4) | 4.6.3 | `ionicons-v4` | Ionicons font | | [License](ionicons-v4/LICENSE) |
| [Eva Icons](https://akveo.github.io/eva-icons) | 1.1.3 | `eva-icons` | Eva Icons font | | [License](eva-icons/LICENSE) |
| [Themify Icons](https://themify.me/themify-icons) | 1.0.1 | `themify` | Themify Icons font | | [License](themify/LICENSE) |
| [Line Awesome](https://icons8.com/line-awesome) | 1.3.0 | `line-awesome` | Line Awesome font | Requires: Efuzy 1.8+, @efuzy/extras 1.5+ | [License](line-awesome/LICENSE.md) |
| [Animate.css](https://animate.style/) | 4.1.0 | Use `animations` prop | Bundle of animations you can use in your website/app | | [License](animate/LICENSE) |

> Either install MDI v4 or MDI v3, but never both at the same time.

### SVG

> Efuzy v1.7+ required for svg Efuzy Icon Sets.

| Vendor | Version | Efuzy IconSet name | Import Icons from | Notes | License |
| --- | --- | --- | --- | --- | --- |
| [Material Icons](https://material.io/tools/icons/?style=baseline) (Google) | CDN v11 | `svg-material-icons` | `@efuzy/extras/material-icons` | | [License](material-icons/LICENSE) |
| [Material Icons Outlined](https://material.io/tools/icons/?style=outlined) (Google) | CDN v11 | `svg-material-icons-outlined` | `@efuzy/extras/material-icons-outlined` | Requires: @efuzy/extras 1.9+; The Efuzy Icon Set requires Efuzy v1.12.13+ | [License](material-icons-outlined/LICENSE) |
| [Material Icons Round](https://material.io/tools/icons/?style=round) (Google) | CDN v11 | `svg-material-icons-round` | `@efuzy/extras/material-icons-round` | Requires: @efuzy/extras 1.9+; The Efuzy Icon Set requires Efuzy v1.12.13+ | [License](material-icons-round/LICENSE) |
| [Material Icons Sharp](https://material.io/tools/icons/?style=sharp) (Google) | CDN v11 | `svg-material-icons-sharp` | `@efuzy/extras/material-icons-sharp` | Requires: @efuzy/extras 1.9+; The Efuzy Icon Set requires Efuzy v1.12.13+ | [License](material-icons-sharp/LICENSE) |
| [MDI v5](https://materialdesignicons.com/) (Material Design Icons) | 5.3.45 | `svg-mdi-v5` | `@efuzy/extras/mdi-v5` | The Efuzy Icon Set is requires Efuzy 1.9.9+ | [License](mdi-v5/license.md) |
| MDI v4 (Material Design Icons) | 4.9.95 | `svg-mdi-v4` | `@efuzy/extras/mdi-v4` | | [License](mdi-v4/license.md) |
| [Font Awesome](https://fontawesome.com/icons?d=gallery) | 5.13.1 | `svg-fontawesome-v5` | `@efuzy/extras/fontawesome-v5` | | [License](fontawesome-v5/LICENSE.txt) |
| [Ionicons v5](https://ionicons.com/) | 5.1.2 | `svg-ionicons-v5` | `@efuzy/extras/ionicons-v5` | Requires: @efuzy/extras 1.7+; The Efuzy Icon Set requires Efuzy v1.11+ | [Icon License](ionicons-v5/LICENSE) |
| [Ionicons v4](https://ionicons.com/v4/) | 4.6.3 | `svg-ionicons-v4` | `@efuzy/extras/ionicons-v4` | | [Icon License](ionicons-v4/LICENSE) |
| [Eva Icons](https://akveo.github.io/eva-icons) | 1.1.3 | `svg-eva-icons` | `@efuzy/extras/eva-icons` | | [License](eva-icons/LICENSE) |
| [Themify Icons](https://themify.me/themify-icons) | 1.0.1 | `svg-themify` | `@efuzy/extras/themify` | | [License](themify/LICENSE) |
| [Line Awesome](https://icons8.com/line-awesome) | 1.3.0 | `svg-line-awesome` | `@efuzy/extras/line-awesome` | Requires: Efuzy 1.8+, @efuzy/extras 1.5+ | [License](line-awesome/LICENSE.md) |

Example:

```vue
// some .vue file in devland
<template>
  <div>
    <q-icon :name="matMenu" />
    <q-btn :icon="mdiAbTesting" />
  </div>
</template>

<script>
import { matMenu } from '@efuzy/extras/material-icons'
import { mdiAbTesting } from '@efuzy/extras/mdi-v4'

export default {
  // ...
  created () {
    this.matMenu = matMenu
    this.mdiAbTesting = mdiAbTesting
  }
}
```

### QIcon cheatsheet

```html
<q-icon name="..." />
```

| Name | Prefix | Examples | Notes | License |
| --- | --- | --- | --- | --- |
| material-icons | *None* | thumb_up | Notice the underline character instead of dash or space | |
| material-icons-outlined | o_ | o_thumb_up | Notice the underline character instead of dash or space | |
| material-icons-round | r_ | r_thumb_up | Notice the underline character instead of dash or space | |
| material-icons-sharp | s_ | s_thumb_up | Notice the underline character instead of dash or space | |
| ionicons-v4 | ion-, ion-md-, ion-ios-, ion-logo- | ion-heart, ion-logo-npm, ion-md-airplane | Use QIcon instead of `<ion-icon>` component; Logo icons require 'ion-logo-' prefix | |
| fontawesome-v5 | fa[s,r,l,b,d] fa- | "fas fa-ambulance" | QIcon "name" property is same as "class" attribute value in Fontawesome docs examples (where they show `<i>` tags) | |
| mdi-v5 | mdi- | mdi-alert-circle-outline | Notice the use of dash characters | |
| eva-icons | eva- | eva-shield-outline, eva-activity-outline | Notice the use of dash characters | |
| themify | ti- | ti-hand-point-up | Notice the use of dash characters | |
| line-awesome | la[s,r,l,b,d] la- | "las la-atom" | QIcon "name" property is same as "class" attribute value in Line Awesome docs examples (where they show `<i>` tags) | |

### SVG name format
Svg icons will be defined as String with the following syntax:

```
Syntax: "<path>|<viewBox>" or "<path>" (with implicit viewBox of '0 0 24 24')
Examples:
  M9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z|0 0 24 24
  M9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z
```

## Supporting Efuzy
Efuzy Framework is an MIT-licensed open source project. Its ongoing development is made possible thanks to the support by these awesome [backers](https://github.com/efuzy/efuzy/blob/dev/backers.md).

**Please read our manifest on [Why donations are important](https://efuzy.dev/why-donate)**. If you'd like to become a donator, check out [Efuzy Framework's Donator campaign](https://donate.efuzy.dev).

## Documentation

Head on to the Efuzy Framework official website: [https://efuzy.dev](https://efuzy.dev)

## Stay in Touch

For latest releases and announcements, follow on Twitter: [@efuzy](https://twitter.efuzy.dev)

## Chat Support

Ask questions at the official community Discord server: [https://chat.efuzy.dev](https://chat.efuzy.dev)

## Community Forum

Head on to the official community forum: [https://forum.efuzy.dev](https://forum.efuzy.dev)

## Semver
Using [semver 2.0](http://semver.org/) notation for 'efuzy-extras' package.

## License

All assets included in this repository are exclusive property of their respective owners and licensed under their own respective licenses. Efuzy does not take any credit in packages included here.
