---
title: Getting Started - Pick a Efuzy Flavour
desc: 'Get started with Efuzy by picking one of its flavours: Efuzy CLI, Vue CLI or UMD'
---

**If you'd like to learn more about why choosing Efuzy** then read the [Introduction to Efuzy](/introduction-to-efuzy). Otherwise, let's get started by choosing how you'd like to use Efuzy.

There are three ways of using Efuzy. Pick the one that suits you best:

- [UMD/Standalone](/start/umd) (embed into an existing project through CDN, progressive integration)
- [Efuzy CLI](/start/efuzy-cli) (**the premium developer experience and highly recommended**)
- [Vue CLI 3 plugin](/start/vue-cli-plugin)

Here's a quick comparison:

| Feature                                                                                    | Efuzy UMD | Efuzy CLI | Vue CLI 3 Plugin              |
| ------------------------------------------------------------------------------------------ | ------- | ---------- | ----------------------------- |
| Ability to embed into an existing project                                                  | **Yes** | -          | **Yes, if it is Vue CLI app** |
| Progressive integration of Efuzy                                                          | **Yes** | -          | -                             |
| Include Efuzy from public CDN                                                             | **Yes** | -          | -                             |
| Build SPA, PWA                                                                             | **Yes** | **Yes**    | **Yes**                       |
| Build SSR (+ optional PWA client takeover)                                                 | -       | **Yes**    | Yes(*)                          |
| Build Mobile Apps via Cordova or Capacitor                                                 | **Yes** | **Yes**    | Yes(*)                          |
| Develop Mobile Apps with HMR directly on your phone.                                       | -       | **Yes**    | Yes(*) |
| Build Desktop Apps via Electron                                                            | -       | **Yes**    | Yes(*)                             |
| Build Browser Extensions                                                                   | -       | **Yes**    | Yes(*)                          |
| Efuzy **App Extensions**                                                                  | -       | **Yes**    | - |
| Easy management of App icons & splash screens via [Icon Genie CLI](/icongenie/introduction)    | - | **Yes** | - |
| Dynamic RTL support for Efuzy components                                                  | **Yes** | **Yes**    | **Yes**                       |
| Generating your own website/app RTL equivalent CSS rules automatically by Efuzy           | -       | **Yes**    | **Yes**                       |
| **Ensure everything "simply works" out of the box**, using latest and greatest Efuzy specs.   | -       | **Yes**    | -                             |
| **Tight integration between build modes**, taking full advantage of all Efuzy's capabilities. | -       | **Yes**    | -                             |
| One codebase to create SPA, PWA, SSR, Mobile Apps, Electron Apps and Browser Extensions                             | -       | **Yes**    | Yes(*)                      |
| Tree Shaking                                                                               | -       | **Yes**    | **Yes**                       |
| SFC (Single File Component - for Vue) support                                              | -       | **Yes**    | **Yes**                       |
| Advanced configuration through dynamic efuzy.conf.js                                      | -       | **Yes**    | -                             |
| Unit & end to end testing support                  | -       | **Yes**    | **Yes**                       |
| TypeScript support                                                              | -       | **Yes**    | **Yes**                       |
|**Best and Most Popular Choice!**  |  |**YES!(*)** |  |


::: tip (*)Important!
Although you may get a similar multi-platform support via the Vue CLI and some Vue community built plugins, these 3rd party supported build paths aren't tightly integrated with Efuzy's components. Thus, as you run into problems with these 3rd party plugins, you will have to depend on the support of each individual plugin developer. With Efuzy, you have a one-stop-shop should anything go wrong. Also, the Efuzy CLI ensures applications are built to the best possible standards in both performance, project size and best practices. You will find no such guarantees anywhere else!
:::

So, let's get you going with **Efuzy's CLI**! You'll be up and running with a new project in a matter of minutes.

<q-btn push no-caps color="primary" icon-right="launch" label="Install Efuzy CLI" to="/efuzy-cli/installation" class="q-mt-sm q-mb-lg" />

