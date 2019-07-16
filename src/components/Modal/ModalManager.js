// @ts-check

import getModalsContainer from "./lib/get-modals-container";
import createModalPortal from "./lib/create-modal-portal";
import createFocusTrap from "focus-trap";
import { noop } from "./../../util";

class ModalWrapper {
  constructor(vm) {
    this.vm = vm;
    this.onDeactivate = noop;
  }

  trapDidDeactivate() {
    // @ts-ignore
    this.onDeactivate(this);
  }

  orderToBackground() {
    return this;
  }

  orderOut() {
    this.vm.$_close();
    return this;
  }

  orderFront() {
    this.vm.$_open();
    return this;
  }

  createTrap() {
    const modalEl = this.vm.modalEl();
    this.trap = createFocusTrap(modalEl, {
      initialFocus: modalEl,
      escapeDeactivates: !this.vm.handleEscManually,
      onDeactivate: this.trapDidDeactivate.bind(this),
      returnFocusOnDeactivate: false
    });
    return this;
  }

  deactivateTrap() {
    this.trap.deactivate();
    return this;
  }

  focus() {
    // We first check if the modal is visible. If yes, focus it,
    if (this.vm.visible) {
      this.trap.activate();
      return this;
    }

    // If not, we expect "visible" to switch to true "soon".
    // Thus we watch (once) and then activate the trap.
    // If we are not doing this – the focusTrap will not work.
    const unwatch = this.vm.$watch("visible", visible => {
      unwatch();
      if (visible) {
        this.trap.activate();
        return;
      }
    });

    return this;
  }
}

export default class ModalManager {
  constructor() {
    /** @type { {[modalName: string]: ModalWrapper} } */
    this.modalsByName = {};
    /** @type {ModalWrapper[]} */
    this.openModals = [];
  }

  registerModalVM(vm) {
    const portalEl = createModalPortal(vm.name);
    const container = getModalsContainer();
    container.appendChild(portalEl);
    const wrapper = new ModalWrapper(vm);
    wrapper.onDeactivate = this.handleDeactivate.bind(this);
    this.modalsByName[vm.name] = wrapper;
  }

  unregisterModalVM({ name }) {
    const modal = this.modalsByName[name];
    modal.onDeactivate = noop;
    delete this.modalsByName[name];
  }

  get topModal() {
    const { openModals } = this;
    return openModals.length === 0 ? undefined : openModals[openModals.length - 1];
  }

  // This is our 'public' method. We expose only one method for
  // opening modals to keep it simple. To make this work, open(…)
  // can be given just the name of a modal or a modal instance.
  // Usually app developers should open modals only by name.
  open(modalOrModalName) {
    if (typeof modalOrModalName === "string") {
      this._openModalByName(modalOrModalName);
    } else {
      this._openModalByName(modalOrModalName.name);
    }
  }

  _openModalByName(modalName) {
    const wrapper = this.modalsByName[modalName];
    this.__openModal(wrapper);
  }

  handleDeactivate(wrapper) {
    if (this.topModal !== wrapper) {
      return;
    }
    wrapper.orderOut();
    this.openModals.pop();
    const { topModal } = this;
    if (topModal != null) {
      topModal.orderFront().focus();
    }
  }

  _closeTheOnlyOpenModal(wrapper) {
    wrapper.deactivateTrap();
  }

  _closeTopModal(wrapper) {
    wrapper.deactivateTrap();
  }

  __openModal(wrapper) {
    this.openModals.push(wrapper);
    wrapper
      .orderFront()
      .createTrap()
      .focus();
  }

  close(modalOrModalName) {
    if (typeof modalOrModalName === "string") {
      this._closeModalByName(modalOrModalName);
    } else {
      const wrapper = this.modalsByName[modalOrModalName.name];
      this.__closeModal(wrapper);
    }
  }

  _closeModalByName(modalName) {
    const wrapper = this.modalsByName[modalName];
    this.__closeModal(wrapper);
  }

  __closeModal(wrapper) {
    const index = this.openModals.indexOf(wrapper);
    if (index < 0) {
      return;
    }

    if (this.openModals.length === 1) {
      this._closeTheOnlyOpenModal(wrapper);
      return;
    }

    this._closeTopModal(this.topModal);
  }
}
