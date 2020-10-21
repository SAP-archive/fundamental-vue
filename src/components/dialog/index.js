import DialogBar from './bar.vue'
import DialogBody from './body.vue'
import DialogContent from './content.vue'
import DialogElement from './element.vue'
import DialogFooter from './footer.vue'
import DialogHeader from './header.vue'
import Dialog from './dialog.vue'
import DialogTitle from './title.vue'
import DialogButton from './button.vue'

import ModalManager from './modal-manager'

import pluginify from './../../util/pluginify'

pluginify(
  Dialog,
  DialogBar,
  DialogBody,
  DialogContent,
  DialogElement,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogButton
)

// Monkey-patch Modal.install because we want to add our modal manager there
const originalInstall = Dialog.install
Dialog.install = (vue, options) => {
  originalInstall(vue, options)
  vue.prototype.$fdDialog = new ModalManager()
}

export default Dialog

export {
  Dialog,
  DialogBar,
  DialogBody,
  DialogContent,
  DialogElement,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogButton
}
