---
title: Efuzy UMD - CDN install
desc: How to use the Unified Module Definition form of Efuzy.
components:
  - umd/UmdTags
---

If you want to embed Efuzy into your existing website project, integrating it in a progressive manner, then go for the UMD/Standalone (Unified Module Definition) version.

## Installation
UMD is all about adding Efuzy style and javascript tags. Please select what you will be using and check out the output below it.

<umd-tags />

::: warning
* Please notice the `<!DOCTYPE html>` at the beginning of the document. Do not forget to add it, or else some browsers (notably Safari) will use some compatibility mode that breaks flex.
* If you are using an RTL Efuzy language pack (eg. Hebrew) then toggle the "RTL CSS support" above too!
* Do NOT use self-closing tags, like `<q-icon ... />`. Instead, go with `<q-icon ...></q-icon>`.
:::

::: tip
All components, directives and Efuzy plugins are ready to be used out of the box. There is no need for additional code to install them. Just make sure that you will NOT be using self-closing tags.
:::

## JsFiddle / Codepen
You can fork and use these links for reporting issues on GitHub too:

| Supplier | URL |
| --- | --- |
| jsFiddle | [https://jsfiddle.efuzy.dev](https://jsfiddle.efuzy.dev) |
| Codepen | [https://codepen.efuzy.dev](https://codepen.efuzy.dev) |

These links (obviously) use the Efuzy UMD version.

## Efuzy Global Object
When you embed Efuzy UMD into a webpage you'll get a `Efuzy` global Object injected:

```js
Efuzy = {
  version, // Efuzy version

  plugins, // Efuzy plugins
  utils, // Efuzy utils

  // if you want to extend Efuzy's components or directives
  components,
  directives,

  // if you want to change current icon set or Efuzy Language pack
  // (must include CDN links so they are available first!)
  lang,
  iconSet
}
```

## Init Configuration
There are some configuration options for Efuzy & Efuzy plugins. For the Efuzy UMD version you can define the following before including the Efuzy script tag:

```html
<script>
  // optional
  window.efuzyConfig = {
    brand: { // this will NOT work on IE 11
      primary: '#e46262',
      // ... or all other brand colors
    },
    notify: {...}, // default set of options for Notify Efuzy plugin
    loading: {...}, // default set of options for Loading Efuzy plugin
    loadingBar: { ... }, // settings for LoadingBar Efuzy plugin
    // ..and many more
  }
</script>
```

## Usage
So, after you figured out the CDN links that you need to embed into your webpages (hopefully you've inspected the project folder created by UMD demo kit), now it's time to use Efuzy.

::: tip
You'll notice that all the Efuzy Components, Efuzy Directives and Efuzy Plugins have an installation section at the top of their pages.
:::

By using the UMD version, you'll have all of the components, directives and Efuzy plugins already installed for you. You just need to start using them.

**Do not use self-closing tags with the UMD version:**
You will notice that you won't be able to use the self-closing tag form of any of the components. You must close all components tags.

```html
<!-- In docs, but for Efuzy CLI usage -->
<q-btn label="My Button" />
<!-- ^^^ can't use it like this on UMD -->

<!-- Instead, include a self-closing tag too: -->
<q-btn label="My Button"></q-btn>
```

### Efuzy Components
An example. No need to install any component in UMD version.

```html
<q-btn label="My Button"></q-btn>
```

### Efuzy Directives
An example. No need to install any directives in UMD version.
```html
<div v-ripple>...</div>
```

### Efuzy Plugins
An example. No need to install any plugins in UMD version.

```js
Efuzy.plugins.bottomSheet.create({...})
```

### Efuzy Utils
An example.

```js
Efuzy.utils.openURL('https://efuzy.dev')
```

### Changing Efuzy Icon Set
Assuming you have already included the CDN link to your favorite Efuzy Icon Set (unless you're using Material Icons which is used by default), you can then tell Efuzy to use it:

```js
Efuzy.iconSet.set(Efuzy.iconSet.fontawesomeV5)
```

The list of available [Efuzy Icon Sets](/options/efuzy-icon-sets) can be found on [GitHub](https://github.com/efuzy/efuzy/tree/dev/ui/icon-set).

### Changing Efuzy Language Pack
Assuming you have already included the CDN link to your desired Efuzy I18n Language (unless you want "en-us" language pack which is used by default), you can then tell Efuzy to use it:

```js
// example setting German language,
// using ISO 2 letter code:
Efuzy.lang.set(Efuzy.lang.de)

// example setting Portuguese (Brazil) language:
Efuzy.lang.set(Efuzy.lang.ptBr)
```

The list of available languages can be found on [GitHub](https://github.com/efuzy/efuzy/tree/dev/ui/lang). **If your desired language pack is not available yet, you can help by providing a PR.** We welcome any languages!
