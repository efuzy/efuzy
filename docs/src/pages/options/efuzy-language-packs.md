---
title: Efuzy Language Packs
desc: How to configure the Efuzy language packs in a Efuzy app.
related:
  - /options/rtl-support
  - /options/app-internationalization
---
A Efuzy Language Pack refers to the internationalization of Efuzy's own components, some of which have labels.

::: warning
It should be noted that what is described below is the internationalization of Efuzy components only. If you need to internationalize your own components, read [App Internationalization](/options/app-internationalization) documentation page.
:::

As mentioned above, some Efuzy components have their own labels. When it comes to internationalization, one option is to configure labels through the label properties on each instance of Efuzy components (like QTable). This is how you can customize the text to match the selected language. This however, takes time and adds unnecessary complexity to your website/app. **Instead**, you can use the Efuzy Language Packs which have a number of standard label definitions translated for you, like "Cancel", "Clear", "Select", "Update", etc. No need to translate these again! And it comes out of the box.

::: tip
For a complete list of available Efuzy Languages, check [Efuzy Languages on GitHub](https://github.com/efuzy/efuzy/tree/dev/ui/lang).
<br><br>**If your desired language is not on that list**, then feel free to submit a PR to add it. It takes from 5 to 10 minutes at most. We kindly welcome any language!
:::

## Configuring the default Language Pack

Unless configured otherwise (see below), Efuzy uses the `en-us` Language Pack by default.

### Hardcoded
If the default Efuzy Language Pack is not dynamically determined (does not depends on cookies for example), then you can:

#### Efuzy CLI
Edit `/efuzy.conf.js`:

```js
framework: {
  lang: 'de'
}
```

#### Vue CLI
Edit your `main.js`:

```js
import langDe from 'efuzy/lang/de'
// ...

// when not selecting to import all Efuzy components:
import { Efuzy } from 'efuzy'
// OTHERWISE:
import Efuzy from 'efuzy'

// ...
Vue.use(Efuzy, {
  // ...,
  lang: langDe
})
```

#### Efuzy UMD
Include the language pack JS tag for your Efuzy version and also tell Efuzy to use it. Example:

```html
<!-- include this after Efuzy JS tag -->
<script src="https://cdn.jsdelivr.net/npm/efuzy@v1.0.0/dist/lang/de.umd.min.js"></script>
<script>
  Efuzy.lang.set(Efuzy.lang.de)
</script>
```

Check what tags you need to include in your HTML files on [UMD / Standalone](/start/umd) page.

### Dynamical (non-SSR)
Efuzy CLI: If your desired Efuzy Language Pack must be dynamically selected (example: depends on a cookie), then you need to create a boot file: `$ efuzy new boot efuzy-lang-pack`. This will create `/src/boot/efuzy-lang-pack.js` file. Edit it to:

```js
// for when you don't specify efuzy.conf.js > framework: 'all'
import { Efuzy } from 'efuzy'
// OTHERWISE:
import Efuzy from 'efuzy'

export default async () => {
  const langIso = 'de' // ... some logic to determine it (use Cookies Plugin?)

  try {
    await import(
      /* webpackInclude: /(de|en-us)\.js$/ */
      'efuzy/lang/' + langIso
      )
      .then(lang => {
        Efuzy.lang.set(lang.default)
      })
  }
  catch (err) {
    // Requested Efuzy Language Pack does not exist,
    // let's not break the app, so catching error
  }
}
```

Then register this boot file into `/efuzy.conf.js`:

```js
boot: [
  'efuzy-lang-pack'
]
```

::: warning Always constrain a dynamic import
Notice the use of the [Webpack magic comment](https://webpack.js.org/api/module-methods/#magic-comments) - `webpackInclude`. Otherwise all the available language packs will be bundled, resulting in an increase in the compilation time and the bundle size. See [Caveat for dynamic imports](https://efuzy.dev/efuzy-cli/lazy-loading#Caveat-for-dynamic-imports)
:::

### Dynamical (SSR) <q-badge align="top" label="v1.11+" />
When dealing with SSR, we can't use singleton objects because that would pollute sessions. As a result, as opposed to the dynamical example above (read it first!), you must also specify the `ssrContext` from your boot file:

```js
// for when you don't specify efuzy.conf.js > framework: 'all'
import { Efuzy } from 'efuzy'
// OTHERWISE:
import Efuzy from 'efuzy'

// ! NOTICE ssrContext param:
export default async ({ ssrContext }) => {
  const langIso = 'de' // ... some logic to determine it (use Cookies Plugin?)

  try {
    await import(
      /* webpackInclude: /(de|en-us)\.js$/ */
      'efuzy/lang/' + langIso
      )
      .then(lang => {
        // ! NOTICE ssrContext param:
        Efuzy.lang.set(lang.default, ssrContext)
      })
  }
  catch (err) {
    // Requested Efuzy Language Pack does not exist,
    // let's not break the app, so catching error
  }
}
```

## Change Efuzy Language Pack at Runtime
Example with a QSelect to dynamically change the Efuzy components language:

```html
<template>
  <q-select
    v-model="lang"
    :options="langOptions"
    label="Efuzy Language"
    dense
    borderless
    emit-value
    map-options
    options-dense
    style="min-width: 150px"
  />
</template>

<script>
import languages from 'efuzy/lang/index.json'
const appLanguages = languages.filter(lang =>
  [ 'de', 'en-us' ].includes(lang.isoName)
)

export default {
  data () {
    return {
      lang: this.$q.lang.isoName
    }
  },

  watch: {
    lang (lang) {
      // dynamic import, so loading on demand only
      import(
        /* webpackInclude: /(de|en-us)\.js$/ */
        'efuzy/lang/' + lang
        ).then(lang => {
        this.$q.lang.set(lang.default)
      })
    }
  },

  created () {
    this.langOptions = appLanguages.map(lang => ({
      label: lang.nativeName, value: lang.isoName
    }))
  }
}
</script>
```

## Using Efuzy Language Pack in App Space
Although the Efuzy Language Packs **are designed only for Efuzy components internal usage**, you can still use their labels for your own website/app components too.

```html
"Close" label in current Efuzy Language Pack is:
{{ $q.lang.label.close }}
```

Check a Efuzy Language Pack on [GitHub](https://github.com/efuzy/efuzy/tree/dev/ui/lang) to see the structure of `$q.lang`.

## Detecting Locale
There's also a method to determine user locale which is supplied by Efuzy out of the box:
```js
// outside of a Vue file

// for when you don't specify efuzy.conf.js > framework: 'all'
import { Efuzy } from 'efuzy'
// OTHERWISE:
import Efuzy from 'efuzy'

Efuzy.lang.getLocale() // returns a string

// inside of a Vue file
this.$q.lang.getLocale() // returns a string
```
