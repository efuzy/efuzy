---
title: Efuzy CLI
desc: How to use the Efuzy CLI, the premium developer experience for free.
---

Efuzy CLI is the pride of Efuzy Framework. You can seamlessly build:
* a SPA (Single Page Application/Website),
* a SSR (Server-side Rendered App/Website),
* a PWA (Progressive Web App),
* a BEX (Browser Extensions),
* a Mobile App (through Cordova),
* an Electron App

...within the same project folder, ensuring you are **following the best Efuzy practices while everything will simply work out of the box**.

<q-btn push no-caps color="primary" icon-right="launch" label="Install Efuzy CLI" to="/efuzy-cli/installation" class="q-mt-md" />

## What's Included

While developing with Dev Server (`$ efuzy dev`):
* Babel, so you can write ES6 code
* Webpack + vue-loader for Vue SFC (single file components)
* State preserving hot-reload
* State preserving compilation error overlay
* Lint-on-save with ESLint
* Source maps
* Develop right on a device emulator (or a real phone connected to your machine) if you target a Mobile App
* Develop right on an Electron window with Developer Tools included if you target an Electron App
* ...many more

Developing for production (`$ efuzy build`):
* Javascript minified with [UglifyJS](https://github.com/mishoo/UglifyJS2)
* HTML minified with [html-minifier](https://github.com/kangax/html-minifier)
* CSS across all components extracted (and auto-prefixed) into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano)
* All static assets are compiled with version hashes for efficient long-term caching, and a production index.html is auto-generated with proper URLs to these generated assets.
* ...many more

Take note of the `/efuzy.conf.js` file in the root of your project folder. This file helps you quickly configure the way your website/App works. We'll go over it in the [Configuration](/efuzy-cli/efuzy-conf-js) section.
