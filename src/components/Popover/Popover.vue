<template>
  <k-pop
    class="fd-popover"
    ref="kpop"
    arrow-class="fd-popover__arrow"
    :defaultBodyZIndex="defaultBodyZIndex"
    :portal-id="$fdDefaultPortalId"
    :body-class="fdBodyClass"
    :body-styles="popoverBodyStyles"
    :placement="placement"
    :with-arrow="withArrow"
    :body-size-mode="bodySizeMode"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template #trigger="popProps">
      <div class="fd-popover__control">
        <slot name="control" v-bind="popProps" />
      </div>
    </template>
    <template #default="popProps">
      <fd-on-click-outside
        :ignoredElements="ignoredElements_"
        @do="handleClickOutside"
        :active="popProps.visible"
      >
        <slot v-bind="popProps" />
      </fd-on-click-outside>
    </template>
  </k-pop>
</template>

<script>
import { Uid } from "./../../mixins";
import KPop from "@ckienle/k-pop";
import FdOnClickOutside from "./../$Support/on-click-outside.vue";
import * as BodySizeMode from "./body-size-mode";

// The popover is a wrapping component that renders a control and can display a popover that is attached to the control.
export default {
  name: "FdPopover",
  components: { FdOnClickOutside, KPop },
  mixins: [Uid],
  methods: {
    handleClickOutside() {
      this.hide();
    },
    show() {
      this.kpop.show();
    },
    hide() {
      this.kpop.hide();
    },
    toggle() {
      this.kpop.toggle();
    },
    ignoredElements_() {
      if (this.controlEl == null) {
        return this.ignoredElements();
      }
      return [...this.ignoredElements(), this.controlEl];
    }
  },
  data() {
    return {
      defaultBodyStyles: {
        maxHeight: "300px",
        overflowY: "auto"
      }
    };
  },
  computed: {
    kpop() {
      return this.$refs.kpop;
    },
    controlEl() {
      const { kpop } = this.$refs;
      if (kpop == null) {
        return;
      }
      return kpop.$el;
    },
    fdBodyClass() {
      const result = ["fd-popover__popper"];
      if (!this.withArrow) {
        result.push("fd-popover__popper--no-arrow");
      }
      return result.join(" ");
    },
    popoverBodyStyles() {
      return { ...this.defaultBodyStyles, ...this.bodyStyles };
    }
  },
  props: {
    adjustsBodyWidth: {
      type: Boolean,
      default: false
    },
    // Use a custom body size mode. For details please refer to the [K-Pop](https://christiankienle.github.io/k-pop/examples/#body-size-modes) documentation.
    bodySizeMode: {
      // Possible Values: `auto` / `equal-trigger` / `at-least-trigger`
      type: String,
      validator: BodySizeMode.isValid,
      // `auto`
      default: BodySizeMode.defaultMode
    },
    // Custom styles object
    bodyStyles: {
      type: Object,
      default: () => {}
    },
    // Default z-index that should be used for the popover body.
    defaultBodyZIndex: {
      type: Number,
      // `1000`
      default: 1000
    },
    // Customize elements that can be interacted with, without the popover being dismissed.
    ignoredElements: {
      // A function that returns an array of `Element`s that should be ignored:
      // Signature: `() => Element[]`
      type: Function,
      // By default no elements are ignored: `() => []`
      default: () => []
    },
    // Whether or not the popover body has an arrow pointing to the control.
    withArrow: {
      type: Boolean,
      // `false` – no arrow is created by default
      default: false
    },
    // Set the placement of the popover body. This is passed – as is – to Popper.js. This means that all [Popper.js placements](https://popper.js.org/popper-documentation.html#Popper.placements) can be used.
    placement: {
      type: String,
      // `bottom`
      default: "bottom"
    }
  }
};
</script>
