---
title: Commands List
desc: The entire list of Efuzy CLI commands.
---

Familiarize yourself with the list of available commands inside a Efuzy project:

``` bash
$ efuzy

  ___
 / _ \ _   _  __ _ ___  __ _ _ __
| | | | | | |/ _` / __|/ _` | '__|
| |_| | |_| | (_| \__ \ (_| | |
 \__\_\\__,_|\__,_|___/\__,_|_|

  Example usage
    $ efuzy <command> <options>

  Help for a command
    $ efuzy <command> --help
    $ efuzy <command> -h

  Options
    --version, -v Print Efuzy App CLI version

  Commands
    dev, d        Start a dev server for your App
    build, b      Build your app for production
    clean, c      Clean all build artifacts
    new, n        Quickly scaffold page/layout/component/... vue file
    mode, m       Add/remove Efuzy Modes for your App
    inspect       Inspect generated Webpack config
    ext, e        Manage Efuzy App Extensions
    run, r        Run specific command provided by an installed
                    Efuzy App Extension
    describe      Describe a Efuzy API (component)
    test, t       Run @efuzy/testing App Extension command
                    - requires @efuzy/testing App Extension to be installed
                    - this is an alias command for convenience purposes
    info, i       Display info about your machine and your App
    help, h       Displays this message

  If the specified command is not found, then "efuzy run"
  will be executed with the provided arguments.

  Commands supplied by @efuzy/cli global installation:

    upgrade       Check (and optionally) upgrade Efuzy packages
                    from a Efuzy project folder
    serve         Create an ad-hoc server on App's distributables
```

See help for any command:
``` bash
$ efuzy [command name] --help
```

## Create

Creates an App folder with initial project boilerplate.

```bash
$ efuzy create <folder_name>
```

This command will use Efuzy App Starter Kit by default, but you can specify a different one via `--kit` option.

`efuzy create --kit ui` and `efuzy create --kit app-extension` will generate for you App Extension boilerplate: the former when the extension is meant to provide UI Components, the latter in all other cases.

You can use a starter kit stored on your machine by providing a **local path** to a folder (eg. `efuzy create --kit ./my-custom-starter-kit`).

You can use a starter kit stored into any publicly accessible Git repository by providing a reference which follows this schema:
- GitHub - `github:owner/name` or simply `owner/name`
- GitLab - `gitlab:owner/name`
- Bitbucket - `bitbucket:owner/name`

`master` branch will be checked out by default, but you can specify the one you prefer via `--branch <branch name>` (eg. `efuzy create --kit owner/name --branch my-branch`).

:::warning
The preferred way to build reusable code and UI Components into Efuzy ecosystem are App Extensions. Use a custom starter kit only if you really know what you're doing and be aware that it will make more difficult for the Efuzy team to provide you assistance.
:::

## Upgrade <q-badge align="top" label="@efuzy/cli v1.1+ specs" />

Check (and optionally) upgrade Efuzy packages from a Efuzy project folder:

```bash
# view all options:
$ efuzy upgrade -h

# checks for non-breaking change upgrades and displays them,
# but will not carry out the install
$ efuzy upgrade

# checks for pre-releases (alpha/beta):
$ efuzy upgrade -p

# checks for major new releases (includes breaking changes):
$ efuzy upgrade -m

# to perform the actual upgrade,
# combine any of the params above and add "-i" (or "--install"):
$ efuzy upgrade -i
```

::: warning Note for code editor terminals
If you're using a code editor terminal instead of the real one, you run `efuzy upgrade` and get an error *Command not found* or *@efuzy/cli* version appears to be *undefined*, you will need to go to the settings of your code editor terminal and untick the option (or its equivalent) *Add 'node_modules/.bin' from the project root to %PATH%* then restart your code editor.
:::

## Info
The Efuzy CLI is equipped with a stable combination of multiple NPM build packages (Webpack, Vue, etc) which gets updated frequently after heavy testing.

In order for you to see what versions of Node, NPM, Efuzy CLI, Efuzy, Vue, Webpack, Cordova, Babel and many more, issue this command in a Efuzy project folder:
``` bash
$ efuzy info
```

## Dev

```bash
$ efuzy dev -h

  Description
    Starts the app in development mode (hot-code reloading, error
    reporting, etc)

  Usage
    $ efuzy dev
    $ efuzy dev -p <port number>

    $ efuzy dev -m ssr

    # alias for "efuzy dev -m cordova -T ios"
    $ efuzy dev -m ios

    # alias for "efuzy dev -m cordova -T android"
    $ efuzy dev -m android

    # passing extra parameters and/or options to
    # underlying "cordova" or "electron" executables:
    $ efuzy dev -m ios -- some params --and options --here
    $ efuzy dev -m electron -- --no-sandbox --disable-setuid-sandbox

  Options
    --mode, -m       App mode [spa|ssr|pwa|bex|cordova|capacitor|electron] (default: spa)
    --port, -p       A port number on which to start the application
    --hostname, -H   A hostname to use for serving the application
    --help, -h       Displays this message

    Only for Cordova mode:
    --target, -T     (required) App target
                        [android|ios]
    --emulator, -e   (optional) Emulator name
                        Examples: iPhone-7, iPhone-X
                        iPhone-X,com.apple.CoreSimulator.SimRuntime.iOS-12-2
    --ide, -i        Open IDE (Android Studio / XCode) instead of letting Cordova
                        booting up the emulator, in which case the "--emulator"
                        param will have no effect

    --devtools, -d   Open remote Vue Devtools

    Only for Capacitor mode:
    --target, -T     (required) App target
                        [android|ios]
```

The Efuzy development server allows you to develop your App by compiling and maintaining code in-memory. A web server will serve your App while offering hot-reload out of the box. Running in-memory offers faster rebuilds when you change your code.

> Hot Reload is much more than just refreshing your browser when code changes. It skips the refresh and updates your code on the fly, while maintaining your App's state (like your Vue's model data). Please note that there are cases when this is impossible, so the dev webserver will simply refresh your browser. (Always ensure you are running only one instance of Efuzy CLI at a time, otherwise Hot-Reload and other stuff will break!)

Based on what you want to develop, you can start the development server by using "efuzy dev" command as follows:

``` bash
# Developing a SPA
$ efuzy dev
# ...or
$ efuzy dev -m spa

# Developing for SSR
$ efuzy dev -m ssr

# Developing a PWA
$ efuzy dev -m pwa

# Developing a BEX for production
$ efuzy dev -m bex

# Developing a Mobile App (through Cordova)
$ efuzy dev -m cordova -T [android|ios]
# or the short form:
$ efuzy dev -m [android|ios]

# Developing an Electron App
$ efuzy dev -m electron

# passing extra parameters and/or options to
# underlying "cordova" or "electron" executables:
$ efuzy dev -m ios -- some params --and options --here
$ efuzy dev -m electron -- --no-sandbox --disable-setuid-sandbox
```

If you wish to change the hostname or port serving your App you have 3 options:
* Edit '/efuzy.conf.js':
  ```js
  devServer: {
    host: '...',
    port: ...
  }
  ```
* Through '-H' (hostname) and '-p' (port) command options.
* If this is a one time thing, specify the hostname and/or port as an environment variable:
  ``` bash
  $ PORT=3000 efuzy dev
  $ HOSTNAME=1.1.1.14 efuzy dev
  ```

If there appears to be an issue with hot reload, you can try two fixes:
* Change the permissions for the project folder with

  ```bash
  sudo chown -R username: .
  ```
* or run the dev server with root privileges

  ```bash
  sudo efuzy dev
  ```

## Build

```bash
$ efuzy build -h

  Description
    Builds distributables of your app.

  Usage
    $ efuzy build
    $ efuzy build -p <port number>

    $ efuzy build -m ssr

    # alias for "efuzy build -m cordova -T ios"
    $ efuzy build -m ios

    # alias for "efuzy build -m cordova -T android"
    $ efuzy build -m android

    # passing extra parameters and/or options to
    # underlying "cordova" executable:
    $ efuzy build -m ios -- some params --and options --here

  Options
    --mode, -m      App mode [spa|ssr|pwa|bex|cordova|capacitor|electron] (default: spa)
    --target, -T    App target
                      - Cordova (default: all installed)
                        [android|ios]
                      - Capacitor
                        [android|ios]
                      - Electron with default "electron-packager" bundler (default: yours)
                        [darwin|win32|linux|mas|all]
                      - Electron with "electron-builder" bundler (default: yours)
                        [darwin|mac|win32|win|linux|all]
    --publish, -P   Also trigger publishing hooks (if any are specified)
                      - Has special meaning when building with Electron mode and using
                        electron-builder as bundler
    --debug, -d     Build for debugging purposes
    --skip-pkg, -s  Build only UI (skips creating Cordova/Capacitor/Electron executables)
                      - Cordova (it only fills in /src/cordova/www folder with the UI code)
                      - Capacitor (it only fills in /src/capacitor/www folder with the UI code)
                      - Electron (it only creates the /dist/electron/UnPackaged folder)
    --help, -h      Displays this message

    ONLY for Cordova and Capacitor mode:
    --ide, -i       Open IDE (Android Studio / XCode) instead of finalizing with a
                    terminal/console-only build

    ONLY for Electron mode:
    --bundler, -b   Bundler (electron-packager or electron-builder)
                      [packager|builder]
    --arch, -A      App architecture (default: yours)
                      - with default "electron-packager" bundler:
                          [ia32|x64|armv7l|arm64|mips64el|all]
                      - with "electron-builder" bundler:
                          [ia32|x64|armv7l|arm64|all]

    ONLY for electron-builder (when using "publish" parameter):
    --publish, -P  Publish options [onTag|onTagOrDraft|always|never]
                     - see https://www.electron.build/configuration/publish
```

The Efuzy CLI can pack everything together and optimize your App for production. It minifies source code, extracts vendor components, leverages browser cache and much more.

``` bash
# Build a SPA for production
$ efuzy build
# ...or
$ efuzy build -m spa

# Build a SSR for production
$ efuzy build -m ssr

# Build a PWA for production
$ efuzy build -m pwa

# Build a BEX for production
$ efuzy build -m bex

# Build a Mobile App (through Cordova)
$ efuzy build -m cordova -T [android|ios]
# or the short form:
$ efuzy build -m [android|ios]

# Build an Electron App for production
$ efuzy build -m electron

# passing extra parameters and/or options to
# underlying "cordova" executable:
$ efuzy build -m ios -- some params --and options --here

# Create a production build with ability to debug it
# (has source-maps and code is NOT minified)
$ efuzy build -d [-m <mode>]
```

## Clean
Cleans up all the build assets:

``` bash
$ efuzy clean
```

## New
Generates Components, Pages, Layouts, Vuex Store.

::: tip
This command is simply a helper in order to quickly scaffold a page/layout/component/vuex store module. You are not required to use it, but can help you when you don't know how to start.
:::

```bash
$ efuzy new -h

  Description
    Quickly scaffold a page/layout/component/store module.

  Usage
    $ efuzy new <p|page> [-f <option>] <page_file_name>
    $ efuzy new <l|layout> [-f <option>] <layout_file_name>
    $ efuzy new <c|component> [-f <option>] <component_file_name>
    $ efuzy new <b|boot> [-f ts] <boot_name>
    $ efuzy new <s|store> [-f ts] <store_module_name>

    # Examples:

    # Create src/pages/MyNewPage.vue:
    $ efuzy new p MyNewPage

    # Create src/pages/MyNewPage.vue and src/pages/OtherPage.vue:
    $ efuzy new p MyNewPage OtherPage

    # Create src/layouts/shop/Checkout.vue
    $ efuzy new layout shop/Checkout.vue

    # Create src/layouts/shop/Checkout.vue with TypeScript options API
    $ efuzy new layout -f ts-options shop/Checkout.vue

    # Create a store with TypeScript support
    $ efuzy new store -f ts myStore

  Options
    --help, -h            Displays this message

    --format -f <option>  (optional) Use a supported format for the template
                          Option can be:
                             * ts-options - TS options API
                             * ts-composition - TS component API
                             * ts-class - TS class style syntax
                             * ts - use for TS boot file and store modules only
```

## Mode

```bash
$ efuzy mode -h

  Description
    Add/Remove support for PWA / BEX / Cordova / Capacitor / Electron modes.

  Usage
    $ efuzy mode [add|remove] [pwa|ssr|bex|cordova|capacitor|electron] [--yes]

    # determine what modes are currently installed:
    $ efuzy mode

  Options
    --yes, -y     Skips the "Are you sure?" question
                  when removing a Efuzy mode
    --help, -h    Displays this message
```

When you initialize a project with the CLI, you can build SPA (Single Page Website/Application), SSR (Server-side Render Website/Application with optional PWA client takeover), PWA (Progressive Web App), Mobile App (through Cordova), and/or Electron Apps. When you develop for SSR, PWA, Cordova or Electron, you need these modes installed. If you issue "efuzy dev" or "efuzy build" they will automatically be installed.

These modes will add a "src-*" folder into your project with very specific code for it:

| Folder | Mode | Description |
| --- | --- | --- |
| src-ssr | ssr | Contains the production Node server files. |
| src-pwa | pwa | Contains the Service Worker file that you can tweak. |
| src-cordova | cordova | Is a Cordova project folder that will be using your 'src' as content. Tweak Cordova config, add/remove platforms, splash screens, Cordova plugins and so on from this folder. Do NOT touch "src-cordova/www" folder though as it will get overwritten at every build. |
| src-electron | electron | Has code for the main Electron thread. The renderer thread will be your app in 'src'. |
| src-bex | bex | Contains the specific files for Browser Extensions mode. |

If for some reason you decide you don't need a mode, you can remove it. **This will permanently delete** the respective "src-*" folder.

```bash
$ efuzy mode remove pwa
```

## Describe
This command is useful to describe the API of any Efuzy components/directives/plugins that your project is using. **It is specific to your Efuzy version installed in your project folder.**

Examples: `$ efuzy describe QIcon`, `$ efuzy describe TouchPan`, `$ efuzy describe Cookies`.

```bash
$ efuzy describe -h

  Description
    Describes a component API for project's Efuzy version being used

  Usage
    $ efuzy describe <component/directive/Efuzy plugin>

    # display everything:
    $ efuzy describe QIcon

    # displaying only props:
    $ efuzy describe QIcon -p
    # displaying props and methods only:
    $ efuzy describe QIcon -p -m
    # filtering by "si":
    $ efuzy describe QIcon -f si
    # filtering only props by "co":
    $ efuzy describe QIcon -p -f co

    # Open docs URL:
    $ efuzy describe QIcon -d

  Options
    --filter, -f <filter> Filters the API
    --props, -p           Displays the API props
    --slots, -s           Displays the API slots
    --methods, -m         Displays the API methods
    --events, -e          Displays the API events
    --value, -v           Displays the API value
    --arg, -a             Displays the API arg
    --modifiers, -M       Displays the API modifiers
    --injection, -i       Displays the API injection
    --efuzy, -q          Displays the API efuzy conf options
    --help, -h            Displays this message
```

```bash
$ efuzy describe QIcon

 Describing QIcon component API
 Description is based on your project's Efuzy version

 Properties

   name (String)
     Description: Name of the icon, following Efuzy convention
     Examples:
       map
       ion-add

   color (String)
     Description: Color name for component from the Efuzy Color Palette
     Examples:
       primary
       teal-10

   size (String)
     Description: Size in CSS units, including unit name
     Examples:
       16px
       2rem

   left (Boolean)
     Description: Apply a standard margin on the left side. Useful if icon is on the right side of something.

   right (Boolean)
     Description: Apply a standard margin on the right side. Useful if icon is on the left side of something.

 Slots

   default
     Suggestions: QTooltip or QMenu

 Scoped Slots

   *No scoped slots*

 Events

   *No events*

 Methods

   *No methods*
```

## Inspect
This command can be used to inspect the Webpack config generated by Efuzy CLI.

```bash
$ efuzy inspect -h

  Description
    Inspect Efuzy generated Webpack config

  Usage
    $ efuzy inspect
    $ efuzy inspect -c build
    $ efuzy inspect -m electron -p 'module.rules'

  Options
    --cmd, -c        Efuzy command [dev|build] (default: dev)
    --mode, -m       App mode [spa|ssr|pwa|bex|cordova|electron] (default: spa)
    --depth, -d      Number of levels deep (default: 5)
    --path, -p       Path of config in dot notation
                        Examples:
                          -p module.rules
                          -p plugins
    --help, -h       Displays this message
```

## Ext
This command is used to manage [App Extensions](/app-extensions/introduction).

```bash
$ efuzy ext -h

  Description
    Manage Efuzy App Extensions

  Usage
    # display list of installed extensions
    $ efuzy ext

    # Add Efuzy App Extension
    $ efuzy ext add <ext-id>

    # Remove Efuzy App Extension
    $ efuzy ext remove <ext-id>

    # Add Efuzy App Extension, but
    # skip installing the npm package
    # (assumes it's already installed)
    $ efuzy ext invoke <ext-id>

    # Remove Efuzy App Extension, but
    # skip uninstalling the npm package
    $ efuzy ext uninvoke <ext-id>

  Options
    --help, -h       Displays this message
```

## Run
This command is used to run commands supplied by the [App Extensions](/app-extensions/introduction) that you've installed into your project folder.

```bash
$ efuzy run -h

  Description
    Run app extension provided commands

  Usage
    $ efuzy run <extension-id> <cmd> [args, params]
    $ efuzy <extension-id> <cmd> [args, params]

    $ efuzy run iconify create pic -s --mark some_file
    $ efuzy iconify create pic -s --mark some_file
        # Note: "iconify" is an example and not a real extension.
        # Looks for installed extension called "iconify"
        # (efuzy-app-extension-iconify extension package)
        # and runs its custom defined "create" command
        # with "pic" argument and "-s --mark some_file" params

  Options
    --help, -h       Displays this message
```

## Serve
This command can be used in production too and it is being supplied by the global installation of `@efuzy/cli` package.

```bash
$ efuzy serve -h

  Description
    Start a HTTP(S) server on a folder.

  Usage
    $ efuzy serve [path]
    $ efuzy serve . # serve current folder

    If you serve a SSR folder built with the CLI then
    control is yielded to /index.js and params have no effect.

  Options
    --port, -p              Port to use (default: 4000)
    --hostname, -H          Address to use (default: 0.0.0.0)
    --gzip, -g              Compress content (default: true)
    --silent, -s            Suppress log message
    --colors                Log messages with colors (default: true)
    --open, -o              Open browser window after starting
    --cache, -c <number>    Cache time (max-age) in seconds;
                            Does not apply to /service-worker.js
                            (default: 86400 - 24 hours)
    --micro, -m <seconds>   Use micro-cache (default: 1 second)

    --history               Use history api fallback;
                              All requests fallback to /index.html,
                              unless using "--index" parameter
    --index, -i <file>      History mode (only!) index url path
                              (default: index.html)

    --https                 Enable HTTPS
    --cert, -C [path]       Path to SSL cert file (Optional)
    --key, -K [path]        Path to SSL key file (Optional)
    --proxy <file.js>       Proxy specific requests defined in file;
                            File must export Array ({ path, rule })
                            See example below. "rule" is defined at:
                            https://github.com/chimurai/http-proxy-middleware
    --cors                  Enable CORS for all requests
    --help, -h              Displays this message

  Proxy file example
    module.exports = [
      {
        path: '/api',
        rule: { target: 'http://www.example.org' }
      }
    ]
    --> will be transformed into app.use(path, httpProxyMiddleware(rule))
```

### Custom Node server
When building a SPA or PWA, the distributable folder can be served by any static webserver. To test it out (assuming you don't have a specific publicPath or not using Vue Router "history" mode), you can use the "http-server" npm package.

Or you can build your own server. Here are some examples:

```js
// when using default Vue Router "hash" mode
const
  express = require('express'),
  serveStatic = require('serve-static'),
  port = process.env.PORT || 5000

const app = express()

app.use(serveStatic(...path-to-dist...))
app.listen(port)
```

```js
// when using Vue Router "history" mode
const
  express = require('express'),
  serveStatic = require('serve-static'),
  history = require('connect-history-api-fallback'),
  port = process.env.PORT || 5000

const app = express()

app.use(history())
app.use(serveStatic(...path-to-dist...))
app.listen(port)
```

If you need URL rewrites of API, or simply put you want to proxy your API requests, then you can use "http-proxy-middleware" package:

```js
// add this to one of the two previous examples:
const { createProxyMiddleware } = require('http-proxy-middleware')

// ...
app.use('/api', createProxyMiddleware({
    target: `http://my-api.com:5050`,
    pathRewrite: {"^/api" : ""}
  }))

// then app.listen(...)
```

Finally, run one of these files:

```bash
$ node my-server.js
```
