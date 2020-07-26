// These imports force TS compiler to evaluate contained declarations
//  which by defaults would be ignored because inside node_modules
//  and not directly referenced by any file
// These types had to be moved from `efuzy` to `@efuzy/app` to avoid generating TS errors
//  in Vue CLI projects, given that these features are only available for Efuzy CLI projects
// TS doesn't allow re-exports into module augmentation, so we were forced to
//  manually declare every file as a `efuzy` augmentation
// "Missing `efuzy` module" has been intentionally ignored, as these types are meant to work
//  only when used together with `efuzy` module and throw otherwise

import "./shims";
import "./globals";
export * from "./ssr";
export * from "./store";
export * from "./prefetch";
export * from "./boot";
export * from "./configuration";
export * from "./route";
import "./wrappers";
