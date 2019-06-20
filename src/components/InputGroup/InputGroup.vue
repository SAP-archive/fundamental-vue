<template>
  <div class="fd-input-group" :class="classes">
    <fd-addon-before-provider>
      <slot name="before">
        {{ before }}
      </slot>
    </fd-addon-before-provider>
    <slot name="before-input" />
    <slot name="input" />
    <slot name="after-input" />
    <fd-addon-after-provider>
      <slot name="after">{{ after }}</slot>
    </fd-addon-after-provider>
  </div>
</template>

<script>
import { CompactableContainer } from "./../../mixins";

const CreateAddon = context => ({
  provide() {
    return {
      $_fdInputGroupAddonContext: context
    };
  },
  render() {
    return this.$scopedSlots.default();
  }
});

const FdAddonBeforeProvider = CreateAddon("before");
const FdAddonAfterProvider = CreateAddon("after");

export default {
  name: "FdInputGroup",
  mixins: [CompactableContainer],
  components: { FdAddonBeforeProvider, FdAddonAfterProvider },
  props: {
    before: { type: String, default: null },
    after: { type: String, default: null }
  },
  computed: {
    hasBefore() {
      return this.before != null || this.$slots.before != null;
    },
    hasAfter() {
      return this.after != null || this.$slots.after != null;
    },
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
