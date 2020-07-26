interface BootConfigurationItem {
  path: string;
  server?: false;
  client?: false;
}

export type EfuzyBootConfiguration = (string | BootConfigurationItem)[];
