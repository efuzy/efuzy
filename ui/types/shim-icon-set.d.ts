declare module "efuzy/icon-set/*" {
  // We know "efuzy" will exists at runtime, we can safely ignore the TS error
  // @ts-ignore
  import { EfuzyIconSet } from "efuzy";
  const iconSet: EfuzyIconSet;
  export default iconSet;
}
