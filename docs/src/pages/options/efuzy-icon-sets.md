---
title: Efuzy Icon Sets
desc: How to configure icon sets for Efuzy components.
related:
  - /options/installing-icon-libraries
  - /vue-components/icon
---

Efuzy components have their own icons. Rather than forcing you into using one icon library in particular (so that they can display correctly), Efuzy lets you choose **which icons it should use for its components**. This is called a `Efuzy Icon Set`.

You can install multiple icon libraries, but you must choose only one to use on Efuzy's components.

Efuzy currently supports: [Material Icons](https://material.io/icons/), [Font Awesome](http://fontawesome.io/icons/), [Line Awesome](https://icons8.com/line-awesome), [Ionicons](https://ionicons.com/), [MDI](https://materialdesignicons.com/), [Eva Icons](https://akveo.github.io/eva-icons), and [Themify Icons](https://themify.me/themify-icons).

It is also possible to use your own icons (as custom svgs or as images in any format) with any Efuzy component, see the [QIcon](/vue-components/icon#Image-icons) page for more info on this.

::: tip
Related pages: [Installing Icon Libraries](/options/installing-icon-libraries) and [QIcon component](/vue-components/icon).
:::

## Configuring the default Icon Set
**There are two types of Efuzy Icon Sets: webfont-based and svg-based.**

Unless configured otherwise, Efuzy uses Material Icons webfont as the icon set for its components. You can however tell Efuzy to use some other Icon Set, but if it's a webfont-based one then be sure to include its icon library in your website/app (see [Installing Icon Libraries](/options/installing-icon-libraries)).

### Hardcoded
If the default Efuzy Icon Set is not dynamically determined (does not depends on cookies for example), then you can:

#### Efuzy CLI Way
We edit `/efuzy.conf.js` again:

```js
framework: {
  // webfont-based example
  iconSet: 'mdi-v5'
}
```

```js
framework: {
  // svg-based example
  iconSet: 'svg-mdi-v5'
}
```

For all available options, visit the [GitHub](https://github.com/efuzy/efuzy/tree/dev/ui/icon-set) repository.

Full example of including MDI & Fontawesome and telling Efuzy to use Fontawesome for its components.

```js
extras: [
  'mdi-v5',
  'fontawesome-v5'
],
framework: {
  iconSet: 'fontawesome-v5'
}
```

This will enable you to use both Ionicons & Fontawesome webfonts in your app, and all Efuzy components will display Fontawesome icons.

#### UMD Way
Include the Efuzy Icon Set tag for your Efuzy version and also tell Efuzy to use it. Example:

```html
<!-- include this after Efuzy JS tag -->
<script src="https://cdn.jsdelivr.net/npm/efuzy@v1.0.0/dist/icon-set/fontawesome-v5.umd.min.js"></script>
<script>
  Efuzy.iconSet.set(Efuzy.iconSet.fontawesomeV5)
</script>
```

Check what tags you need to include in your HTML files on [UMD / Standalone](/start/umd) page.


#### Vue CLI Way
We edit your `main.js`:

```js
import iconSet from 'efuzy/icon-set/fontawesome-v5'
// ...
import { Efuzy } from 'efuzy'
// ...
Vue.use(Efuzy, {
  // ...,
  iconSet: iconSet
})
```

### Dynamical (non-SSR)
Efuzy CLI: If your desired Efuzy Icon Set must be dynamically selected (example: depends on a cookie), then you need to create a boot file: `$ efuzy new boot efuzy-icon-set`. This will create `/src/boot/efuzy-icon-set.js` file. Edit it to:

```js
// for when you don't specify efuzy.conf.js > framework: 'all'
import { Efuzy } from 'efuzy'
// OTHERWISE:
import Efuzy from 'efuzy'

export default async () => {
  const iconSetName = 'mdi-v5' // ... some logic to determine it (use Cookies Plugin?)

  try {
    await import(
      /* webpackInclude: /(mdi-v5|fontawesome-v5)\.js$/ */
      'efuzy/icon-set/' + iconSetName
      )
      .then(setDefinition => {
        Efuzy.iconSet.set(setDefinition.default)
      })
  }
  catch (err) {
    // Requested Efuzy Icon Set does not exist,
    // let's not break the app, so catching error
  }
}
```

Then register this boot file into `/efuzy.conf.js`:

```js
boot: [
  'efuzy-icon-set'
]
```

::: warning Always constrain a dynamic import
Notice the use of the [Webpack magic comment](https://webpack.js.org/api/module-methods/#magic-comments) - `webpackInclude`. Otherwise all the available icon set files will be bundled, resulting in an increase in the compilation time and the bundle size. See [Caveat for dynamic imports](https://efuzy.dev/efuzy-cli/lazy-loading#Caveat-for-dynamic-imports)
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
  const iconSetName = 'mdi-v5' // ... some logic to determine it (use Cookies Plugin?)

  try {
    await import(
      /* webpackInclude: /(mdi-v5|fontawesome-v5)\.js$/ */
      'efuzy/icon-set/' + iconSetName
      )
      .then(setDefinition => {
        // ! NOTICE ssrContext param:
        Efuzy.iconSet.set(setDefinition.default, ssrContext)
      })
  }
  catch (err) {
    // Requested Efuzy Icon Set does not exist,
    // let's not break the app, so catching error
  }
}
```

## Change Efuzy Icon Set at Runtime

#### Changing Icon Set Dynamically
Efuzy Icon Set is reactive, so all components will update properly if you change the $q.iconSet object. Here is an example:

```js
import mdiIconSet from 'efuzy/icon-set/mdi-v5.js'

methods: {
  changeIconSetToMdiIconSet () {
    this.$q.iconSet.set(mdiIconSet)
  }
}
```

#### Changing a Specific Icon Dynamically
If you want to change a specific icon to another, you can. Here is an example:

```js
methods: {
  changeQEditorHeaderIcon () {
    this.$q.iconSet.editor.header1 = 'fas fa-font'
  }
}
```

