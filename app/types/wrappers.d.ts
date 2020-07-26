// These wrappers are into `app`, instead of `ui`, because they are only relevant to people
//  using a Efuzy CLI project: TS devs using `efuzy` package via Vue CLI plugin doesn't have
//  boot files or `efuzy.conf.js` where to use them.
// They are placed in a standalone file into `ui` because they must be reachable as `efuzy/wrappers`.
// Not being exposed from `efuzy`, they won't trigger the package side-effects when required into
//  a file evaluated by Node (in `efuzy.conf.js`, `configure` would be imported as
//  `const { configure } = require('efuzy')`).
// This is a precautional measure to avoid future hard-to-backtrack bugs.

declare module "efuzy/wrappers" {
  import { BootCallback } from "@efuzy/app";
  import { ConfigureCallback } from "@efuzy/app";
  import { PrefetchCallback } from "@efuzy/app";
  import { RouteCallback } from "@efuzy/app";
  import { StoreCallback } from "@efuzy/app";
  function boot<TStore = any>(
    callback: BootCallback<TStore>
  ): BootCallback<TStore>;

  function configure(callback: ConfigureCallback): ConfigureCallback;

  function preFetch<TStore = any>(
    callback: PrefetchCallback<TStore>
  ): PrefetchCallback<TStore>;

  function route<TStore = any>(
    callback: RouteCallback<TStore>
  ): RouteCallback<TStore>;

  function store(callback: StoreCallback): StoreCallback;
}
