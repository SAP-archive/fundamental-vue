const OVERLAY_DATA_ATTRIBUTE = "data-fd-vue-modal-overlay";
export const OVERLAY_SELECTOR = `[${OVERLAY_DATA_ATTRIBUTE}]`;

export default class ModalManager {
  constructor() {
    this.openModalsCount = 0;
    this.modals = [];
  }

  registerModal(modal) {
    this.modals.push(modal);
  }

  unregisterModal({ name }) {
    const index = this.modals.indexOf(modal => modal.name === name);
    if (index >= 0) {
      this.modals.splice(index);
    }
  }

  open(modalName) {
    const modal = this.modals.find(modal => modal.name === modalName);
    if (modal) {
      this.openModal(modal);
    }
  }

  openModal(modalVM) {
    this.openModalsCount = this.openModalsCount + 1;
    this.createAndUpdateOverlayIfNeeded();
    const modalEl = document.querySelector(
      `[data-fd-modal-identifier='${modalVM.name}']`
    );

    modalVM.initializeFocusTrap(modalEl, {
      initialFocus: ".fd-modal"
    });

    modalVM.visible = true;
    modalVM.activateFocusTrap();
  }

  closeModal(modalVM) {
    this.openModalsCount = this.openModalsCount - 1;
    this.createAndUpdateOverlayIfNeeded();
    modalVM.visible = false;
    modalVM.deactivateFocusTrap();
  }

  close(modalName) {
    const modal = this.modals.find(modal => modal.name === modalName);
    if (modal) {
      this.closeModal(modal);
    }
  }

  get overlayEl() {
    return document.querySelector(OVERLAY_SELECTOR);
  }

  updateOverlayVisbility() {
    const el = this.overlayEl;
    const shouldBeHidden = this.openModalsCount === 0;
    el.setAttribute("aria-hidden", String(shouldBeHidden));
  }

  createAndUpdateOverlayIfNeeded() {
    const el = this.overlayEl;
    const hasOverlay = el != null;
    if (hasOverlay) {
      this.updateOverlayVisbility();
      return el;
    }
    const overlay = document.createElement("DIV");
    overlay.classList.add("fd-ui__overlay");
    overlay.classList.add("fd-overlay");
    overlay.classList.add("fd-overlay--modal");

    overlay.setAttribute("aria-hidden", "true");
    overlay.setAttribute(OVERLAY_DATA_ATTRIBUTE, "");
    document.body.appendChild(overlay);
    this.updateOverlayVisbility();
    return overlay;
  }
}
