import { EfuzyIconSet } from "./extras/icon-set";
import { HasCapacitor, HasCordova, HasElectron, HasSsr, HasBex } from './feature-flag'
import { EfuzyLanguage } from "./lang";

// We cannot reference directly Capacitor/Cordova/Electron types
//  or they would generate TS errors for Vue CLI users
// We also cannot move feature-flags system into `@efuzy/app`
//  because `QVueGlobals` augmentations won't be transferred to
//  the `vue/types/vue` augmentation for unknown reason (probably TS limitations)
//  and the system will just stop working
// To workaround these problems we define an empty holder interface
//  and augment it into `@efuzy/app` with current typings
export interface GlobalsTypesHolder {
  [index: string]: any;
}

export interface GlobalEfuzyLanguage extends EfuzyLanguage {
  set(lang: EfuzyLanguage): void;
  /** Returns undefined when in SSR mode or when it cannot determine current language. */
  getLocale(): string | undefined;
}

export interface GlobalEfuzyIconSet extends EfuzyIconSet {
  set(iconSet: EfuzyIconSet): void;
}

type GlobalEfuzyIconMapFn = (
  iconName: string
) => { icon: string } | { cls: string; content?: string } | void;

export interface QVueGlobals
  extends HasCapacitor<{ capacitor: any }>,
    HasBex<{ bex: GlobalsTypesHolder["bex"] }>,
    HasCordova<{ cordova: GlobalsTypesHolder["cordova"] }>,
    HasElectron<{ electron: GlobalsTypesHolder["electron"] }>,
    HasSsr<
      { iconMapFn?: GlobalEfuzyIconMapFn },
      { iconMapFn: GlobalEfuzyIconMapFn }
    > {
  version: string;
  lang: GlobalEfuzyLanguage;
  iconSet: GlobalEfuzyIconSet;
}
