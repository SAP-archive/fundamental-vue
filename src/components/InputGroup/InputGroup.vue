<template>
  <div class="fd-input-group" :class="classes">
    <fd-addon-provider-before>
      <slot name="before" />
    </fd-addon-provider-before>
    <slot name="before-input" />
    <slot name="input" />
    <slot name="after-input" />
    <fd-addon-provider-after>
      <slot name="after" />
    </fd-addon-provider-after>
  </div>
</template>

<script>
import { CompactableContainer } from "./../../mixins";

const CreateAddon = context => ({
  name: `fd-addon-provider-${context}`,
  provide() {
    return {
      $_fdInputGroupAddonContext: context
    };
  },
  render(h) {
    const defaultSlot = this.$scopedSlots.default;
    if (defaultSlot) {
      return defaultSlot();
    }
    return h("");
  }
});

export default {
  name: "FdInputGroup",
  mixins: [CompactableContainer],
  components: {
    FdAddonProviderBefore: CreateAddon("before"),
    FdAddonProviderAfter: CreateAddon("after")
  },
  computed: {
    afterClasses() {
      const afterClass = this.afterClass;
      return [
        "fd-input-group__addon",
        "fd-input-group__addon--after",
        this.finalCompact ? "fd-input-group--compact" : "",
        ...(afterClass != null ? [afterClass] : [])
      ];
    },
    classes() {
      return {
        "fd-input-group--before": this.before || this.$slots.before,
        "fd-input-group--after": this.after || this.$slots.after,
        "fd-input-group--compact": this.compact
      };
    }
  }
};
</script>
