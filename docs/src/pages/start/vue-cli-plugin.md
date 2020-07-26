---
title: Vue CLI Efuzy Plugin
desc: How to embed Efuzy into a Vue CLI app.
---

::: warning
Cross-platform support with Vue CLI is handled by a number of community plugins. This means, putting together what Efuzy offers out-of-the-box will take you extra time and effort, will not guarantee you the best experience and you won't have access to a number of features which only Efuzy CLI has. Efuzy was also not specifically tested with these plugins and thus you could possibly run into issues. This, however, will be valid for any component library, unless they specifically mention having tested their components with third-party plugins.

So, before you begin on this path of development with Efuzy, we'd like you to understand the following. To guarantee you the best developer experience with Efuzy, we highly recommend using Efuzy's CLI and building your project with it, because you won't miss any feature that Vue CLI has. You'll get the full range of features offered by Efuzy, like full cross-platform build support (but this is just the tip of the iceberg) and you can still do practically everything you'd like to do with Vue too, i.e. use Vue plugins via Efuzy's [Boot Files](/efuzy-cli/boot-files#Anatomy-of-an-boot-file).
:::

To work with Efuzy via its Vue CLI plugin, you will need to make sure you have @vue/cli installed globally. To make sure you have the right version, use this command:

```bash
$ vue --version
```

Should you have Vue CLI 2.x.x. installed, you'll need to uninstall it with:

```bash
$ npm uninstall -g vue-cli
# or (depending with which you've installed it)
$ yarn global remove vue-cli
```

Install Vue CLI (v4+) as follows:

```bash
$ npm install -g @vue/cli
```

If you don't yet have a project created with @vue/cli, then do so with the command below. **Make sure that you checkmark on Babel from the Vue CLI feature list prompt that will appear on screen**.

```bash
$ vue create my-app
```

## Add Vue CLI Efuzy Plugin
Navigate to the newly created project folder and add the cli plugin. Before installing it, make sure to commit your current changes should you wish to revert them later.

::: warning
Cross-platform support with Vue CLI is handled by community plugins. These are not tightly integrated with Efuzy as with Efuzy CLI and may have issues.
:::

```bash
$ cd my-app
$ vue add efuzy
```

The CLI will ask you if you want the plugin to replace some existing files. It is recommended that you do this, if you wish to have an example, so you can quickly develop your app.

Your Vue config (in package.json or vue.config.js file, depending on what you chose when you created your vue app) will also contain a `efuzy` object with some basic Efuzy configuration.
