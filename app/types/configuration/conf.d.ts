import { EfuzyAnimations, EfuzyIconSets, EfuzyFonts } from "efuzy";
import { WebpackConfiguration } from "../ts-helpers";
import { EfuzyBootConfiguration } from "./boot";
import { EfuzyBuildConfiguration } from "./build";
import { EfuzyPwaConfiguration } from "./pwa-conf";
import { EfuzySsrConfiguration } from "./ssr-conf";
import { EfuzyCapacitorConfiguration } from "./capacitor-conf";
import { EfuzyElectronConfiguration } from "./electron-conf";
import { efuzyConfiguration } from "./framework-conf";
import { EfuzyCordovaConfiguration } from "./cordova-conf";

type EfuzyAnimationsConfiguration = "all" | EfuzyAnimations[];

interface EfuzyDevServerConfiguration
  extends Omit<WebpackConfiguration["devServer"], "open"> {
  /**
   * Behind the scenes, webpack devServer `open` property is always set to false
   *  and that feature is delegated to `open` library.
   * When a string is provided, it's used as if it was `open.Options.app` value
   *  to define which browser must be open.
   *
   * @link https://github.com/sindresorhus/open/blob/ed757758dd556ae561b58b80ec7dee5e7c6ffddc/test.js#L10-L21
   * @link https://github.com/sindresorhus/open/blob/ed757758dd556ae561b58b80ec7dee5e7c6ffddc/index.d.ts#L26-L33
   */
  open: boolean | string;
}

/**
 * Use this property to change the default names of some files of your website/app if you have to.
 * All paths must be relative to the root folder of your project.
 *
 * @default
 * ```typescript
 * {
 *  rootComponent: 'src/App.vue',
 *  router: 'src/router',
 *  store: 'src/store',
 *  indexHtmlTemplate: 'src/index.template.html',
 *  registerServiceWorker: 'src-pwa/register-service-worker.js',
 *  serviceWorker: 'src-pwa/custom-service-worker.js',
 *  electronMainDev: 'src-electron/main-process/electron-main.dev.js',
 *  electronMainProd: 'src-electron/main-process/electron-main.js'
 * }
 * ```
 */
type EfuzySourceFilesConfiguration = Partial<{
  rootComponent: string;
  router: string;
  store: string;
  indexHtmlTemplate: string;
  registerServiceWorker: string;
  serviceWorker: string;
  electronMainDev: string;
  electronMainProd: string;
}>;

interface BaseEfuzyConfiguration {
  /** Boot files to load. Order is important. */
  boot?: EfuzyBootConfiguration;
  /**
   * Global CSS/Stylus/SCSS/SASS/... files from `/src/css/`,
   * except for theme files, which are included by default.
   */
  css?: string[];
  /** Enable [PreFetch Feature](/efuzy-cli/cli-documentation/prefetch-feature). */
  preFetch?: boolean;
  /**
   * What to import from [@efuzy/extras](https://github.com/efuzy/efuzy/tree/dev/extras) package.
   * @example ['material-icons', 'roboto-font', 'ionicons-v4']
   */
  extras?: (EfuzyIconSets | EfuzyFonts)[];
  /** Add/remove files/3rd party libraries to/from vendor chunk. */
  vendor?: {
    add: string[];
    remove: string[];
  };
  /**
   * Add support for TypeScript.
   *
   * @default false
   */
  supportTS?: boolean | { tsLoaderConfig: object; tsCheckerConfig: object };
  /** Add variables that you can use in index.template.html. */
  htmlVariables?: { [index: string]: string };
  /**
   * What is the import strategy for Efuzy,
   * what Efuzy language pack to use, what Efuzy icon
   * set to use for Efuzy components.
   *
   * When not specified it's treated as `{ importStrategy: 'auto' }`
   * When equal to `all` it's treated as `{ importStrategy: 'all' }`
   */
  framework?: efuzyConfiguration;
  /**
   * What [CSS animations](/options/animations) to import.
   * Example: _['bounceInLeft', 'bounceOutRight']_
   * */
  animations?: EfuzyAnimationsConfiguration;
  /**
   * Webpack dev server [options](https://webpack.js.org/configuration/dev-server/).
   * Some properties are overwritten based on the Efuzy mode you're using in order
   * to ensure a correct config.
   * Note: if you're proxying the development server (i.e. using a cloud IDE),
   * set the `public` setting to your public application URL.
   */
  devServer?: EfuzyDevServerConfiguration;
  /** Build configuration options. */
  build?: EfuzyBuildConfiguration;
  /** Change the default name of parts of your app. */
  sourceFiles?: EfuzySourceFilesConfiguration;
}

export interface EfuzyHookParams {
  efuzyConf: EfuzyConf;
}

export type EfuzyConf = BaseEfuzyConfiguration & {
  /** PWA specific [config](/efuzy-cli/developing-pwa/configuring-pwa). */
  pwa?: EfuzyPwaConfiguration;
} & {
  /** SSR specific [config](/efuzy-cli/developing-ssr/configuring-ssr). */
  ssr?: EfuzySsrConfiguration;
} & {
  /** Capacitor specific [config](/efuzy-cli/developing-capacitor-apps/configuring-capacitor). */
  capacitor?: EfuzyCapacitorConfiguration;
} & {
  /** Cordova specific [config](/efuzy-cli/developing-cordova-apps/configuring-cordova). */
  cordova?: EfuzyCordovaConfiguration;
} & {
  /** Electron specific [config](/efuzy-cli/developing-electron-apps/configuring-electron). */
  electron?: EfuzyElectronConfiguration;
};
