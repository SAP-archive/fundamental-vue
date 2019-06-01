<template>
  <k-pop
    class="fd-popover"
    ref="kpop"
    arrowClass="fd-popover__arrow"
    :portalId="$fdDefaultPortalId"
    :bodyClass="fdBodyClass"
    :placement="placement"
    :with-arrow="withArrow"
    :adjustsBodyWidth="adjustsBodyWidth"
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
        @do="popProps.hide"
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

export default {
  name: "FdPopover",
  components: { FdOnClickOutside, KPop },
  mixins: [Uid],
  methods: {
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
    }
  },
  props: {
    adjustsBodyWidth: { type: Boolean, default: false },
    ignoredElements: { type: Function, default: () => [] },
    withArrow: Boolean,
    placement: {
      type: String,
      default: "bottom"
    }
  }
};
</script>
