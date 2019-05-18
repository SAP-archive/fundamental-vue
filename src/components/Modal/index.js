import Modal from "./Modal.vue";
import ModalManager from "./ModalManager";

import { pluginify } from "./../../util";

pluginify(Modal);

// Monkey-patch Modal.install because we want to add our modal manager there
const originalInstall = Modal.install;
Modal.install = (vue, options) => {
  originalInstall(vue, options);
  vue.prototype.$fdModal = new ModalManager();
};

export default Modal;

export { Modal };
