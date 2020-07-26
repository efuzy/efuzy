---
title: RTL Support
desc: Right to left support in a Efuzy app.
related:
  - /options/efuzy-language-packs
  - /options/app-internationalization
---
RTL is referring to "right to left" UI for languages that need it.

## Enabling RTL support
To enable it, you need to edit `/efuzy.conf.js`:
```js
build: {
  rtl: true
}
```

## How it works
RTL is tightly coupled to [Efuzy Language Packs](/options/efuzy-language-packs). **When Efuzy is set to use an RTL language** (language pack has "rtl" prop set to "true") and **RTL support is enabled** (check step above for efuzy.conf.js), then the UI will dynamically transform Efuzy & your website/app code for RTL.

Let's discuss about each of these two requirements:

1. *Efuzy needs to be set to use an RTL language*.
  See [Efuzy Language Packs](/options/efuzy-language-packs) on how you can set a language. You can set a language as default or dynamically set one.

2. *RTL support needs to be enabled*.
  You need to set "rtl" to "true" under efuzy.conf.js > "build". What this does is it compiles CSS for both your website/app code and for Efuzy components and add corresponding RTL CSS rules automatically. Your CSS bundle will slightly increase in size due to the addition of these CSS rules.

## Things to keep in mind
* Both RTL and non-RTL Efuzy language packs will work together and dynamically switch to/from RTL. So only choosing an RTL Efuzy language pack will trigger the RTL UI for you. You don't need separate builds of your app (one for non-RTL and one for RTL-only). The RTL is dynamically changed for you automatically.
* You can dynamically detect if you are on RTL mode by taking a look at Boolean `this.$q.lang.rtl`. More info on [Vue Prototype Injections](/options/vue-prototype-injections).
* You need to be careful when writing your own CSS. Like mentioned above, Efuzy will automatically add RTL rules based on your CSS code. So writing:

```css
.my-class {
  margin-left: 10px;
  right: 5px;
}
```

  ...will add this rule for RTL:

```css
[dir=rtl] .my-class {
  margin-right: 10px;
  left: 5px;
}
```

  Any CSS rule that refers to "left" or "right" is automatically triggering an equivalent RTL CSS rule to be added.

### Marking CSS rules as exceptions
If you need an exception so your CSS code will not add a corresponding RTL rule, then add this comment:

```css
.my-class {
  margin-left: 10px /* rtl:ignore */;
}
```

...or, if you are using Stylus:

```css
.my-class
  margin-left 10px /* rtl:ignore */
```

...or SCSS with indented form:

```css
.my-class
  margin-left: 10px #{"/* rtl:ignore */"}
```

...or default SCSS:

```css
.my-class {
  margin-left: 10px #{"/* rtl:ignore */"};
}
```

Now both RTL and non-RTL UI mode will have `margin-left` prop.

Sometimes you'll need to make exceptions for whole DOM elements / components. In this case, add `dir="ltr"` or `dir="rtl"` HTML attribute to the outermost DOM element / component template:

```html
<div dir="rtl">
  <!--
    this DIV and all its content will use RTL mode
    regardless of Efuzy language pack RTL settings
  -->
</div>
```

Or, if you need your RTL UI to use left-to-right (ltr) mode for a DOM element / component:
```html
<div dir="ltr">
  <!--
    this DIV and all its content will use non-RTL mode
    regardless of Efuzy language pack RTL settings
  -->
</div>
```

## Handling Efuzy UMD
To enable RTL UIs in UMD you need to include the RTL equivalent CSS tag for your Efuzy version and also pack in a Efuzy RTL language pack (like Hebrew or Farsi). Example:

```html
<html>
  <head>
    ...
    <!-- Replace "1.0.0" (below) with your Efuzy version. -->
    <link href="https://cdn.jsdelivr.net/npm/efuzy@^1.0.0/dist/efuzy.rtl.min.css" rel="stylesheet" type="text/css">
  </head>

  <body>
    ...

    <!--
      We also need an RTL Efuzy language pack; let's take Hebrew as an example;
      include this after Efuzy JS tag;
      Replace "1.0.0" (below) with your Efuzy version.
    -->
    <script src="https://cdn.jsdelivr.net/npm/efuzy@^1.0.0/dist/lang/he.umd.min.js"></script>
    <script>
      Efuzy.lang.set(Efuzy.lang.he)
    </script>
  </body>
</html>
```

Check what tags you need to include in your HTML files by generating a sample with `$ efuzy create <folder> --kit umd` and answering with "Yes" to the RTL question and specifying an RTL language for Efuzy Language Pack.
Also notice the `<html dir="rtl">` tag at the beginning of the generated html file -- you'll need that too.

::: warning CAVEAT
Efuzy CLI automatically adds equivalent RTL CSS rules for your website/app code, but this is not the case for UMD where Efuzy CLI is not being used. You'll have to manage writing the RTL equivalent of your website/app CSS code by yourself. It's only Efuzy components that will have this handled automatically.
:::
