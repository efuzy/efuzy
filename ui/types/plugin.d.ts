import { EfuzyIconSet } from "./extras";
import { EfuzyLanguage } from "./lang";

// These interfaces are used as forward-references
//  filled at build-time via TS interface mergin capabilities
export interface EfuzyComponents {}
export interface EfuzyDirectives {}
export interface EfuzyPlugins {}

export interface EfuzyPluginOptions {
  lang: EfuzyLanguage;
  config: any;
  iconSet: EfuzyIconSet;
  components: EfuzyComponents;
  directives: EfuzyDirectives;
  plugins: EfuzyPlugins;
}
