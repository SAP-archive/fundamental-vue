import Notify from './notify.vue'
import isBrowser from './../../util/is/browser'
import FdNotificationContainer from './../notification-container/notification-container.vue'
import normalizeNotification from './normalize/normalize'

const CONTAINER_ID = 'fdv-notification-container'
const CONTAINER_SELECTOR = `#${CONTAINER_ID}`

class NotificationManager {
  constructor(vue) {
    this.vue = vue
    const Container = vue.extend(FdNotificationContainer)
    this.containerVM = new Container({ containerId: CONTAINER_ID }).$mount(CONTAINER_SELECTOR)
  }

  notify(notification) {
    const normalized = normalizeNotification(notification)
    this.containerVM.addNotification(normalized)
  }
}

const initContainerNode = () => {
  const node = document.createElement('DIV')
  node.id = CONTAINER_ID
  document.body.appendChild(node)
  return node
}

const install = (vue, options) => {
  if (isBrowser() === false) {
    return
  }
  initContainerNode()
  const manager = new NotificationManager(vue)
  vue.prototype.$fdNotify = notification => manager.notify(notification)
}

export default { install }
