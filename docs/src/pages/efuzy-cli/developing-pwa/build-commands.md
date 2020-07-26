---
title: PWA Build Commands
desc: The Efuzy CLI list of commands when developing or building a Progressive Web App.
---
[Efuzy CLI](/start/efuzy-cli) makes it incredibly simple to develop or build the final distributables from your source code.

## Developing

```bash
$ efuzy dev -m pwa

# ..or the longer form:
$ efuzy dev --mode pwa
```

::: warning
Do not miss the [HMR for PWA](/efuzy-cli/developing-pwa/hmr-for-dev) (Hot Module Reload) page.
:::

::: danger
Do not run [Lighthouse](https://developers.google.com/web/tools/lighthouse/) on your development build because at this stage the code is intentionally not optimized and contains embedded source maps (among many other things).
:::

## Building for Production

```bash
$ efuzy build -m pwa

# ..or the longer form:
$ efuzy build --mode pwa
```
