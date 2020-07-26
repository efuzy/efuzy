---
title: Preparation for PWA
desc: How to add PWA mode with Efuzy CLI.
related:
  - /efuzy-cli/efuzy-conf-js
---
We'll be using Efuzy CLI to develop and build a PWA. The difference between building a SPA, Mobile App, Electron App, PWA or SSR is simply determined by the "mode" parameter in "efuzy dev" and "efuzy build" commands.

In order to build a PWA, we first need to add the PWA mode to our Efuzy project:

```bash
$ efuzy mode add pwa
```

If you want to jump right in and start developing, you can skip the "efuzy mode" command and issue:

```bash
$ efuzy dev -m pwa
```

This will add PWA mode automatically, if it is missing.

A new folder will appear in your project folder (which is explained in detail on the [Configuring PWA](/efuzy-cli/developing-pwa/configuring-pwa) page):

```bash
.
└── src-pwa/
    ├── register-service-worker.js  # App-code *managing* service worker
    └── custom-service-worker.js    # Optional custom service worker
                                    # file (InjectManifest mode oNLY)
```
