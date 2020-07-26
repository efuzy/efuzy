/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 *
 * All content of this folder will be copied as is to the output folder. So only import:
 *  1. node_modules (and yarn/npm install dependencies -- NOT to devDependecies though)
 *  2. create files in this folder and import only those with the relative path
 *
 * Note: This file is used only for PRODUCTION. It is not picked up while in dev mode.
 *   If you are looking to add common DEV & PROD logic to the express app, then use
 *   "src-ssr/extension.js"
 */

const
  express = require('express'),
  compression = require('compression')

const
  ssr = require('efuzy-ssr'),
  extension = require('./extension'),
  app = express(),
  port = process.env.PORT || 3000

const serve = (path, cache) => express.static(ssr.resolveWWW(path), {
  maxAge: cache ? 1000 * 60 * 60 * 24 * 30 : 0
})

// gzip
app.use(compression({ threshold: 0 }))

// serve this with no cache, if built with PWA:
if (ssr.settings.pwa) {
  app.use('/service-worker.js', serve('service-worker.js'))
}

// serve "www" folder
app.use('/', serve('.', true))

// we extend the custom common dev & prod parts here
extension.extendApp({ app })

const redirects = [
  { from: '/efuzy-cli/supporting-ie', to: '/efuzy-cli/browser-compatibility' },
  { from: '/efuzy-cli/modern-build', to: '/efuzy-cli/browser-compatibility' },
  { from: '/layout/floating-action-button', to: '/vue-components/floating-action-button' },
  { from: '/efuzy-cli/app-icons', to: '/icongenie/introduction' },
  { from: '/efuzy-cli/cli-documentation/supporting-ie', to: '/efuzy-cli/supporting-ie' },
  { from: '/efuzy-cli/cli-documentation/supporting-ts', to: '/efuzy-cli/supporting-ts' },
  { from: '/efuzy-cli/cli-documentation/directory-structure', to: '/efuzy-cli/directory-structure' },
  { from: '/efuzy-cli/cli-documentation/commands-list', to: '/efuzy-cli/commands-list' },
  { from: '/efuzy-cli/cli-documentation/css-preprocessors', to: '/efuzy-cli/css-preprocessors' },
  { from: '/efuzy-cli/cli-documentation/routing', to: '/efuzy-cli/routing' },
  { from: '/efuzy-cli/cli-documentation/lazy-loading', to: '/efuzy-cli/lazy-loading' },
  { from: '/efuzy-cli/cli-documentation/handling-assets', to: '/efuzy-cli/handling-assets' },
  { from: '/efuzy-cli/cli-documentation/boot-files', to: '/efuzy-cli/boot-files' },
  { from: '/efuzy-cli/cli-documentation/prefetch-feature', to: '/efuzy-cli/prefetch-feature' },
  { from: '/efuzy-cli/cli-documentation/api-proxying', to: '/efuzy-cli/api-proxying' },
  { from: '/efuzy-cli/cli-documentation/boot-files', to: '/efuzy-cli/boot-files' },
  { from: '/efuzy-cli/cli-documentation/handling-webpack', to: '/efuzy-cli/handling-webpack' },
  { from: '/efuzy-cli/cli-documentation/handling-process-env', to: '/efuzy-cli/handling-process-env' },
  { from: '/efuzy-cli/cli-documentation/vuex-store', to: '/efuzy-cli/vuex-store' },
  { from: '/efuzy-cli/cli-documentation/linter', to: '/efuzy-cli/linter' }
]

redirects.forEach(entry => {
  app.get(entry.from, (_, res) => {
    res.redirect(entry.to)
  })
})

// this should be last get(), rendering with SSR
app.get('*', (req, res) => {
  res.setHeader('Content-Type', 'text/html')
  // https://developer.mozilla.org/en-us/docs/Web/HTTP/Headers/X-Frame-Options
  res.setHeader('X-frame-options', 'SAMEORIGIN')

  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection
  res.setHeader('X-XSS-Protection', 1)

  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  res.setHeader('X-Content-Type-Options', 'nosniff')

  ssr.renderToString({ req, res }, (err, html) => {
    if (err) {
      if (err.url) {
        res.redirect(err.url)
      }
      else if (err.code === 404) {
        // Should reach here only if no "catch-all" route
        // is defined in /src/routes
        res.status(404).send('404 | Page Not Found')
      }
      else {
        // Render Error Page or Redirect
        res.status(500).send('500 | Internal Server Error')
        if (ssr.settings.debug) {
          console.error(`500 on ${req.url}`)
          console.error(err)
          console.error(err.stack)
        }
      }
    }
    else {
      res.send(html)
    }
  })
})

app.listen(port, () => {
  console.log(`Server listening at port ${port}`)
})
