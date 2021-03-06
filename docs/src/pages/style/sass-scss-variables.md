---
title: Sass/SCSS Variables
desc: How to use the Sass/SCSS variables defined by Efuzy.
components:
  - style/SassVariables
related:
  - /efuzy-cli/css-preprocessors
  - /style/stylus-variables
---

There are Sass/SCSS variables built into Efuzy that you can change and/or use within devland should you wish to.

::: warning
* This applies to Efuzy CLI managed apps only.
* **The minimum required version of `@efuzy/app` is v1.1. You will also need `efuzy` v1.1.1+.**
:::

## Usage
In your app's `*.vue` files or in the .sass/.scss files you can use any Efuzy Sass/SCSS variables (examples: `$primary`, `$red-1`), and any other Sass/SCSS variables that you declared in your `/src/css/efuzy.variables.sass` or the perfectly equivalent `/src/css/efuzy.variables.scss` (depending on your favorite Sass flavour) when using Efuzy CLI.

```html
<!-- Notice lang="sass" -->
<style lang="sass">
div
  color: $red-1
  background-color: $grey-5
</style>

<!-- Notice lang="scss" -->
<style lang="scss">
div {
  color: $red-1;
  background-color: $grey-5;
}
</style>
```

::: tip
You don't need to necessarily have the `src/css/efuzy.variables.sass` or `src/css/efuzy.variables.scss` files if you want to access the Efuzy Sass/SCSS variables. Create one of them only if you want to customize the variables.
:::

::: danger
When creating or deleting any of the `src/css/efuzy.variables.*` files, you will need to restart your devserver in order for it to take effect. However, when you change the content of these files it won't be necessary to also restart.
:::

## Caveat

Efuzy CLI detects if the file contains at least one '$' character, and if so, it automatically imports the Efuzy Sass/SCSS variables.

If, however, you have a nested importing statement and the file from which you are importing does not contain any '$' characters, this won't work. In this case, you need to add a simple comment (`// $`) so Efuzy can detect at least one '$' character:

```html
<style lang="sass">
// $

@import 'some-file.sass'
// now some-file.sass can benefit
// from Efuzy Sass variables too
// due to comment above
</style>
```

Same is required for .sass/.scss files that are included from efuzy.conf.js > css.

## Customizing
If you want to customize the variables (or add your own) and your project does not yet have a `src/css/efuzy.variables.sass` (or `src/css/efuzy.variables.scss`) file, create one of them yourself. It doesn't matter if you pick .sass or .scss as the extension for this file. **Having one of them will provide the variables to ALL your .sass AND .scss project files (including inside of .vue files).**

You can freely override any of Efuzy's variables (see next section) in those files. For convenience, if you picked Sass or SCSS when you created your Efuzy project folder, these files initially contain only the brand color-related variables.

::: tip
Efuzy is very easy to customize without the need of tampering with the Sass/SCSS variables, so make sure that you really need to do that. Not having one of the two files will actually speed up your build while the default variables will still be supplied to .sass/.scss/.vue files.
:::

## Efuzy's CSS
Efuzy's own CSS is compiled using the variables file (if it exists), but you can also use [Stylus variables](/style/stylus-variables). So there has to be a priority list for Efuzy CLI:

* Does `src/css/efuzy.variables.styl` exists? Use that.
* If not, then does `src/css/efuzy.variables.scss` exists? Use that.
* If not, then does `src/css/efuzy.variables.sass` exists? Use that.
* If not, then use pre-compiled Efuzy CSS.

## Variables list

<sass-variables />
