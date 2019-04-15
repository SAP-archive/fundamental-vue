<template>
  <div
    v-show="active"
    class="fd-ui__overlay fd-overlay fd-overlay--modal"
    :aria-hidden="String(!active)"
  >
    <div
      @clickOutside="close"
      class="fd-modal"
      :tabindex="active ? -1 : 0"
      :active="active"
      v-fd-on-click-outside:close="active"
    >
      <div class="fd-modal__content" role="document">
        <!-- HEADER -->
        <div class="fd-modal__header">
          <slot name="title">
            <h1 class="fd-modal__title">
              {{ title }}
            </h1>
          </slot>
          <slot name="close">
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
          <slot />
        </div>

        <!-- FOOTER -->
        <footer
          v-if="$slots.footer != null || $slots.actions != null"
          class="fd-modal__footer"
        >
          <slot name="footer" />
          <div v-if="$slots.actions" class="fd-modal__actions">
            <slot name="actions" />
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import FdButton from "@/components/Button";
import { ClickOutside, FocusTrap } from "@/mixins";
import { isInside, onClickOutside } from "@/directives";

export default {
  name: "FdModal",
  mixins: [ClickOutside, FocusTrap],
  directives: {
    "fd-is-inside": isInside,
    "fd-on-click-outside": onClickOutside
  },
  components: { FdButton },
  methods: {
    close() {
      this.$emit("close");
      this.$emit("update:active", false);
    }
  },
  mounted() {
    document.body.appendChild(this.$el);
    this.initializeFocusTrap(this.$el, {
      onDeactivate: this.close,
      initialFocus: ".fd-modal"
    });
  },
  destroyed() {
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
    if (this.active) {
      this.activateFocusTrap();
    } else {
      this.deactivateFocusTrap();
    }
  },
  props: {
    active: { type: Boolean, default: false },
    title: { type: String, default: null }
  }
};
</script>
