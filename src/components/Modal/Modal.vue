<template>
  <Portal :selector="portalSelector">
    <div
      :data-fd-modal-identifier="name"
      :aria-hidden="String(!visible)"
      v-show="visible"
      class="fd-modal"
      :tabindex="modalTabIndex"
    >
      <div class="fd-modal__content" role="document">
        <!-- HEADER -->
        <div class="fd-modal__header">
          <slot name="title" v-bind="this">
            <h3 class="fd-modal__title">
              {{ title }}
            </h3>
          </slot>
          <slot name="close" v-bind="this">
            <FdButton
              class="fd-modal__close"
              styling="light"
              @click="close"
              aria-label="close"
            />
          </slot>
        </div>

        <!-- BODY -->
        <div class="fd-modal__body">
          <slot v-bind="this" />
        </div>

        <!-- FOOTER -->
        <footer
          v-if="$scopedSlots.footer != null || $scopedSlots.actions != null"
          class="fd-modal__footer"
        >
          <slot name="footer" v-bind="this" />
          <div v-if="$scopedSlots.actions != null" class="fd-modal__actions">
            <slot name="actions" v-bind="this" />
          </div>
        </footer>
      </div>
    </div>
  </Portal>
</template>

<script>
import { shortUuid } from "./../../lib";
import FdButton from "./../Button";
import { FocusTrap } from "./../../mixins";
import { Portal } from "@linusborg/vue-simple-portal";
import { OVERLAY_SELECTOR } from "./ModalManager";

export default {
  name: "FdModal",
  mixins: [FocusTrap],
  components: { Portal, FdButton },
  props: {
    title: { type: String, default: null },
    name: {
      type: String,
      default: () => `fd-modal-${shortUuid()}`
    }
  },
  computed: {
    portalSelector() {
      return OVERLAY_SELECTOR;
    },
    modalTabIndex() {
      return this.visible ? -1 : 0;
    }
  },
  data: () => ({ visible: false }),
  methods: {
    open() {
      this.$fdModal.openModal(this);
    },
    close() {
      this.$emit("close");
      this.$fdModal.closeModal(this);
    }
  },
  created() {
    this.$fdModal.registerModal(this);
  },
  beforeDestroy() {
    this.$fdModal.unregisterModal(this);
  },
  beforeMount() {
    this.$fdModal.createAndUpdateOverlayIfNeeded();
  }
};
</script>
