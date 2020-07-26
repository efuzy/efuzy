import * as Cordova from "cordova";
import * as Electron from "electron";
import { GlobalEfuzyBex } from "./bex";
import "efuzy/dist/types/globals";

declare module "efuzy/dist/types/globals" {
  interface GlobalsTypesHolder {
    cordova: typeof Cordova;
    electron: typeof Electron;
    bex: GlobalEfuzyBex;
  }
}
