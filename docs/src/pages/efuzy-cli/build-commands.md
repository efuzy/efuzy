---
title: Build Commands
desc: Efuzy CLI list of commands for developing and building a Efuzy app.
---
We will be covering Development and Production build commands.

::: tip
Full list of Efuzy CLI commands: [Commands List](/efuzy-cli/commands-list).
:::

### Development
> Starts a Node.js local development server.

``` bash
# run development server (with default theme)
$ efuzy dev

# on specific port
$ efuzy dev -p 9090

# SSR
$ efuzy dev -m ssr

# PWA
$ efuzy dev -m pwa

# Mobile App
$ efuzy dev -m cordova -T [android|ios]
# or the shorter form:
$ efuzy dev -m [android|ios]

# Electron App
$ efuzy dev -m electron

# passing extra parameters and/or options to
# underlying "cordova" or "electron" executables:
$ efuzy dev -m ios -- some params --and options --here
$ efuzy dev -m electron -- --no-sandbox --disable-setuid-sandbox
```

### Production
> Build assets for production.

``` bash
# build for production
$ efuzy build

# SSR
$ efuzy build -m ssr

# PWA
$ efuzy build -m pwa

# Mobile App
$ efuzy build -m cordova -T [android|ios]
# or the short form:
$ efuzy build -m [android|ios]

# passing extra parameters and/or options to
# underlying "cordova" executable:
$ efuzy build -m ios -- some params --and options --here

# Electron App
$ efuzy build -m electron
```
