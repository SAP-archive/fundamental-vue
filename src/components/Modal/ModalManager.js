import getModalsContainer from "./lib/get-modals-container";
import createModalPortal from "./lib/create-modal-portal";
import createFocusTrap from "focus-trap";
import { noop } from "./../../util";

class Modal {
  constructor(vm) {
    this.vm = vm;
    this.onDeactivate = noop;
  }

  trapDidDeactivate() {
    this.onDeactivate(this);
  }

  orderToBackground() {
    this.vm.overlayVisible = true;
    return this;
  }

  orderOut() {
    this.vm.visible = false;
    this.vm.overlayVisible = false;
    return this;
  }

  orderFront() {
    this.vm.visible = true;
    this.vm.overlayVisible = true;
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
    this.trap.activate();
    return this;
  }
}

export default class ModalManager {
  constructor() {
    this.modalsByName = {};
    this.openModals = [];
  }

  registerModalVM(vm) {
    const portalEl = createModalPortal(vm.name);
    const container = getModalsContainer();
    container.appendChild(portalEl);
    const wrapper = new Modal(vm);
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
    return openModals.length === 0
      ? undefined
      : openModals[openModals.length - 1];
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

  _openFirstModal(wrapper) {
    this.openModals.push(wrapper);
    wrapper
      .orderFront()
      .createTrap()
      .focus();
  }

  _closeTheOnlyOpenModal(wrapper) {
    wrapper.deactivateTrap();
  }

  _transitionFromOpenWrapperToWrapper(fromWrapper, toWrapper) {
    fromWrapper.orderToBackground();
    this.openModals.push(toWrapper);
    toWrapper
      .orderFront()
      .createTrap()
      .focus();
  }

  _closeTopModal(wrapper) {
    wrapper.deactivateTrap();
  }

  __openModal(wrapper) {
    const { topModal } = this;
    if (topModal == null) {
      this._openFirstModal(wrapper);
      return;
    }
    this._transitionFromOpenWrapperToWrapper(topModal, wrapper);
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
