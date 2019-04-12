<template>
  <FdModalOverlay :visible="visible">
    <div class="fd-modal" :tabindex="modalTabIndex" v-fd-click-out="safeClose">
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
  </FdModalOverlay>
</template>

<script>
import FdButton from "./../Button";
import { FocusTrap } from "./../../mixins";
import clickOut from "./../../directives/click-out";
import FdModalOverlay from "./components/Overlay.vue";

export default {
  name: "FdModal",
  mixins: [FocusTrap],
  components: { FdModalOverlay, FdButton },
  directives: {
    "fd-click-out": clickOut
  },
  computed: {
    modalTabIndex() {
      return this.visible ? -1 : 0;
    }
  },
  data: () => ({ visible: false }),
  methods: {
    open(event) {
      this.showEvent = event;
      this.visible = true;
    },
    close() {
      this.visible = false;
      this.$emit("close");
    },
    safeClose(event) {
      if (this.visible === false) {
        return;
      }
      const ignoreClose = this.showEvent == null || event === this.showEvent;
      if (ignoreClose) {
        this.showEvent = undefined;
        return;
      }
      this.close();
    }
  },
  mounted() {
    document.body.appendChild(this.$el);
    this.initializeFocusTrap(this.$el, {
      initialFocus: ".fd-modal"
    });
  },
  beforeDestroy() {
    const { $el } = this;
    if ($el == null) {
      return;
    }
    const parent = $el.parentNode;
    if (parent == null) {
      return;
    }
    parent.removeChild($el);
  },
  updated() {
    if (this.visible) {
      this.activateFocusTrap();
    } else {
      this.deactivateFocusTrap();
    }
  },
  props: {
    title: { type: String, default: null }
  }
};
</script>
