type LogOptions = {
  registerComponent: boolean;
  welcome: boolean;
};
type RawLogOptions = Partial<LogOptions>;

export type PluginOptions<Log = LogOptions> = {
  log: Log;
} & object;
export type RawPluginOptions = Partial<PluginOptions<RawLogOptions>>;

const makeDefaultOptions = (): PluginOptions => ({
  log: { welcome: false, registerComponent: false },
});
export const normalizedPluginOptions = (options: RawPluginOptions = makeDefaultOptions()): PluginOptions => {
  const { log = {} } = options;
  const defaultLog = makeDefaultOptions().log;
  return {
    log: {
      ...log,
      ...defaultLog,
    },
  };
};
