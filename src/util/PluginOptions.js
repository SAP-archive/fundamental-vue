const makeDefaultOptions = () => ({
  log: {
    welcome: false,
    registerComponent: false
  },
  defaultPortalId: "fd-portal-container"
});

export const normalizedPluginOptions = (options = makeDefaultOptions()) => {
  const { log = {}, defaultPortalId = "fd-portal-container" } = options;
  const defaultLog = makeDefaultOptions().log;
  return {
    defaultPortalId,
    log: {
      ...defaultLog,
      ...log
    }
  };
};
