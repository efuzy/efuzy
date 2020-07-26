import { Configuration as ElectronBuilderConfiguration } from "electron-builder";
import "../shims";
import { EfuzyCapacitorTargets } from "./capacitor-conf";
import {
  EfuzyElectronBundlers,
  ElectronBuilderTargets,
  ElectronBuilderArchs,
  ElectronPackagerTargets,
  ElectronPackagerArchs
} from "./electron-conf";
import { EfuzyCordovaTargets } from "./cordova-conf";

type EfuzyModes = "spa" | "ssr" | "pwa" | "cordova" | "capacitor" | "electron";

interface BaseEfuzyContext {
  /** True if we are in development mode */
  dev: boolean;
  /** True if we are in production mode */
  prod: boolean;
  /** App mode */
  mode: { [index in EfuzyModes]?: true };
  modeName: EfuzyModes;
  /** True if debugging is enabled */
  debug: boolean;
}

interface CapacitorEfuzyContext extends BaseEfuzyContext {
  mode: { capacitor: true };
  modeName: "capacitor";
  /**
   * App target.
   *
   * @default 'none'
   */
  target: {
    [index in EfuzyCapacitorTargets]?: true;
  };
  /** App target name. */
  targetName: EfuzyCapacitorTargets;
}

interface CordovaEfuzyContext extends BaseEfuzyContext {
  mode: { cordova: true };
  modeName: "cordova";
  /**
   * App target.
   *
   * @default 'all installed'
   */
  target: {
    [index in EfuzyCordovaTargets]?: true;
  };
  /** App target name. */
  targetName: EfuzyCordovaTargets;
  /**
   * Emulator name, may be present only for Cordova mode.
   *
   * @example
   * 'iPhone-7', 'iPhone-X', 'iPhone-X', 'com.apple.CoreSimulator.SimRuntime.iOS-12-2'
   */
  emulator: string;
}

interface BaseElectronEfuzyContext extends BaseEfuzyContext {
  mode: { electron: true };
  modeName: "electron";
  bundler: { [index in EfuzyElectronBundlers]?: true };
  bundlerName: EfuzyElectronBundlers;
}

interface ElectronBuilderEfuzyContext extends BaseElectronEfuzyContext {
  bundler: { builder: true };
  bundlerName: "builder";
  /**
   * App target.
   *
   * @default 'current system'
   */
  target: {
    [index in ElectronBuilderTargets]?: true;
  };
  /** App target name. */
  targetName: ElectronBuilderTargets;
  arch: {
    [index in ElectronBuilderArchs]?: true;
  };
  archName: ElectronBuilderArchs;
  /**
   * Publish options.
   *
   * If not set, its default value is deduced by the environment.
   * See https://www.electron.build/configuration/publish#how-to-publish
   */
  publish?: "onTag" | "onTagOrDraft" | "always" | "never";
  /**
   * Electron-builder configuration for publishing.
   * See https://www.electron.build/configuration/configuration
   */
  builder: ElectronBuilderConfiguration;
}

interface ElectronPackagerEfuzyContext extends BaseElectronEfuzyContext {
  bundler: { packager: true };
  bundlerName: "packager";
  /**
   * App target.
   *
   * @default 'current system'
   */
  target: {
    [index in ElectronPackagerTargets]?: true;
  };
  /** App target name. */
  targetName: ElectronPackagerTargets;
  arch: {
    [index in ElectronPackagerArchs]?: true;
  };
  archName: ElectronPackagerArchs;
}

type ElectronEfuzyContext =
  | ElectronBuilderEfuzyContext
  | ElectronPackagerEfuzyContext;

interface SpaEfuzyContext extends BaseEfuzyContext {
  mode: { spa: true };
  modeName: "spa";
}

interface PwaEfuzyContext extends BaseEfuzyContext {
  mode: { pwa: true };
  modeName: "pwa";
}

interface SsrEfuzyContext extends BaseEfuzyContext {
  mode: { ssr: true };
  modeName: "ssr";
}

export type EfuzyContext =
  | SpaEfuzyContext
  | PwaEfuzyContext
  | SsrEfuzyContext
  | CapacitorEfuzyContext
  | CordovaEfuzyContext
  | ElectronEfuzyContext;
