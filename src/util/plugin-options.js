import noop from './noop'

const DEFAULT_PORTAL_ID = 'fd-portal-container'

const makeDefaultOptions = () => ({
  defaultPortalId: DEFAULT_PORTAL_ID,
  register: noop,
  log: {
    welcome: false,
    registerComponent: false
  }
})

export default (options = makeDefaultOptions()) => {
  const { log = {}, defaultPortalId = DEFAULT_PORTAL_ID, register = noop } = options
  const defaultLog = makeDefaultOptions().log
  return {
    defaultPortalId,
    register,
    log: {
      ...defaultLog,
      ...log
    }
  }
}
