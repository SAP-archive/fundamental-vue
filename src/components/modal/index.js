import Modal from './modal.vue'
import ModalManager from './modal-manager'

import pluginify from './../../util/pluginify'

pluginify(Modal)

// Monkey-patch Modal.install because we want to add our modal manager there
const originalInstall = Modal.install
Modal.install = (vue, options) => {
  originalInstall(vue, options)
  vue.prototype.$fdModal = new ModalManager()
}

export default Modal

export { Modal }
