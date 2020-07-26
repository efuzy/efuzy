import {
  EfuzyIconSets,
  EfuzyLanguageCodes,
  DeepPartial,
  EfuzyPluginOptions,
} from "efuzy";
import Vue from "vue";

interface EfuzyMobileFrameworkInnerConfiguration {
  iosStatusBarPadding: boolean;
  backButtonExit: boolean | "*" | string[];
}

interface efuzyInnerConfiguration {
  brand: {
    primary: string;
    secondary: string;
    accent: string;
    dark: string;
    positive: string;
    negative: string;
    info: string;
    warning: string;
  };
  capacitor: EfuzyMobileFrameworkInnerConfiguration;
  cordova: EfuzyMobileFrameworkInnerConfiguration;
  dark: boolean | "auto";
  loading: {
    delay: number;
    message: false | string;
    spinnerSize: number;
    spinnerColor: string;
    messageColor: string;
    backgroundColor: string;
    spinner: Vue;
    customClass: string;
  };
  loadingBar: { color: string; size: string; position: string };
  notify: {
    position: string;
    timeout: number;
    textColor: string;
    actions: { icon: string; color: string }[];
  };
}

interface EfuzyBaseFrameworkObjectConfiguration {
  plugins?: (keyof EfuzyPluginOptions["plugins"])[];
  config?: DeepPartial<efuzyInnerConfiguration>;
  iconSet?: EfuzyIconSets;
  lang?: EfuzyLanguageCodes;
  cssAddon?: boolean;
}

interface EfuzyAutoFrameworkObjectConfiguration
  extends EfuzyBaseFrameworkObjectConfiguration {
  importStrategy: "auto";
  /** @default 'kebab' */
  autoImportComponentCase?: "kebab" | "pascal" | "combined";
  components?: (keyof EfuzyPluginOptions["components"])[];
  directives?: (keyof EfuzyPluginOptions["directives"])[];
}

interface EfuzyAllFrameworkObjectConfiguration
  extends EfuzyBaseFrameworkObjectConfiguration {
  importStrategy: "all";
}

export type efuzyConfiguration =
  | "all" // Equal to `{ importStrategy: 'all' }`
  | EfuzyAutoFrameworkObjectConfiguration
  | EfuzyAllFrameworkObjectConfiguration;
