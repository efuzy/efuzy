---
title: SEO with Efuzy
desc: Managing the search engine optimizations in a Efuzy app.
---

The term SEO refers to Search Engine Optimization. And Efuzy covers this aspect too through the [Efuzy Meta Plugin](/efuzy-plugins/meta).

## Efuzy Meta Plugin

The [Efuzy Meta Plugin](/efuzy-plugins/meta) can dynamically change page title, manage `<meta>` tags, manage `<html>` and `<body>` DOM element attributes, add/remove/change `<style>` and `<script>` tags in the head of your document (useful for CDN stylesheets or for json-ld markup, for example), or manage `<noscript>` tags.

Take full advantage of this feature by using it with **Efuzy CLI**, especially **for the SSR (Server-Side Rendering) builds**. It doesn't quite make sense to use it for SPA (Single Page Applications) since the meta information in this case will be added at run-time and not supplied directly by the webserver (as on SSR builds).

::: tip
This Efuzy plugin has the most tight integration with Efuzy and so it has the best performance against any other similar solution.
:::
