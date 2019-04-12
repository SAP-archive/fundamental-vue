const makeDefaultOptions = () => ({
  log: { welcome: false, registerComponent: false }
});
export const normalizedPluginOptions = (options = makeDefaultOptions()) => {
  const { log = {} } = options;
  const defaultLog = makeDefaultOptions().log;
  return {
    log: {
      ...log,
      ...defaultLog
    }
  };
};
