export type Config = {
  readonly port: number;
  readonly hostname: string;
  readonly welcomingNoContent: boolean;
};

const defaultConfig: Config = {
  port: 4280,
  hostname: '0.0.0.0',
  welcomingNoContent: true,
};

export const computeConfig = (config?: Partial<Config>): Config => ({
  ...defaultConfig,
  ...config,
});
