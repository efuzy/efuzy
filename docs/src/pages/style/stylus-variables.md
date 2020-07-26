---
title: Stylus Variables
desc: How to use the Stylus variables defined by Efuzy.
components:
  - style/StylusVariables
related:
  - /efuzy-cli/css-preprocessors
  - /style/sass-scss-variables
---

There are Stylus variables built into Efuzy that you can change and/or use within devland should you wish to. This applies to apps built with Efuzy CLI or Vue CLI only. It does NOT apply to UMD.

## Usage
In your app's `*.vue` files or in the stylus files you can use any Efuzy Stylus variables (examples: `$primary`, `$red-1`), and any other Stylus variables that you declared in your `/src/css/efuzy.variables.styl` (when using Efuzy CLI) and `src/styles/efuzy.variables.styl` (when using Vue CLI).

```html
<!-- Notice lang="stylus" -->
<style lang="stylus">
div
  color $red-1
  background-color $grey-5
</style>
```

::: warning
**If using Vue CLI**, then you need to also add: `@import '~efuzy-variables'` before using any Stylus variables.
:::

::: tip
Starting with `@efuzy/app` v1.1+, you don't need to necessarily have the `src/css/efuzy.variables.styl` file if you want to access the Efuzy Stylus variables. Create it only if you want to customize the variables.
:::

::: danger
When creating or deleting any of the `src/css/efuzy.variables.*` files, you will need to restart your devserver in order for it to take effect. However, when you change the content of these files it won't be necessary to also restart.
:::

## Caveat

Efuzy CLI detects if the file contains at least one '$' character, and if so, it automatically imports the Efuzy stylus variables.

If, however, you have a nested importing statement and the file from which you are importing does not contain any '$' characters, this won't work. In this case, you need to add a simple comment (`// $`) so Efuzy can detect at least one '$' character:

```html
<style lang="stylus">
// $

@import 'some-file'
// now some-file.styl can benefit
// from Efuzy stylus variables too
// due to comment above
</style>
```

Same is required for stylus files that are included from efuzy.conf.js > css.

## Customizing
Depending on whether you are using Efuzy CLI or Vue CLI, you will notice that your project folder has `src/css/efuzy.variables.styl` (Efuzy CLI) or `src/styles/efuzy.variables.styl` (Vue CLI).

You can freely override any of Efuzy's variables (see next section) in those files. For convenience, if you picked Stylus when you created your Efuzy project folder, this file initially contains only the brand color-related variables.

::: tip
Efuzy is very easy to customize without the need of tampering with the Stylus variables, so make sure that you really need to do that. Not having this file will actually speed up your build while the default variables will still be supplied to .sass/.scss/.vue files.
:::

## Efuzy's CSS
Efuzy's own CSS is compiled using the variables file (if it exists), but you can also use [Sass/SCSS variables](/style/sass-scss-variables). So there has to be a priority list for Efuzy CLI:

* Does `src/css/efuzy.variables.styl` exists? Use that.
* If not, then does `src/css/efuzy.variables.scss` exists? Use that.
* If not, then does `src/css/efuzy.variables.sass` exists? Use that.
* If not, then use pre-compiled Efuzy CSS.

## Variables list

<stylus-variables />
