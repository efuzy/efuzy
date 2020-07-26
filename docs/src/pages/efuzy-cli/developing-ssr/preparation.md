---
title: Preparation for SSR
desc: How to add SSR mode with Efuzy CLI.
related:
  - /efuzy-cli/efuzy-conf-js
---

We’ll be using Efuzy CLI to develop and build a SSR website. The difference between building a SPA, Mobile App, Electron App, PWA or SSR is simply determined by the “mode” parameter in “efuzy dev” and “efuzy build” commands.

In order to develop or build a SSR website, we first need to add the SSR mode to our Efuzy project:
```bash
$ efuzy mode add ssr
```

If you want to jump right in and start developing, you can skip the "efuzy mode" command and issue:
```bash
$ efuzy dev -m ssr
```

This will add SSR mode automatically, if it is missing.

A new folder will appear in your project folder (which is explained in detail on the [Configuring SSR](/efuzy-cli/developing-ssr/configuring-ssr) page):

```bash
.
└── src-ssr/
    ├── index.js      # Production Node webserver serving the app
    └── extension.js  # Common code for production & development server
```

