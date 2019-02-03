<template>
  <a v-on="listeners" :class="classes">
    <slot/>
  </a>
</template>

<script lang="ts">
import Vue from "vue";
import { PropValidator } from "vue/types/options";

export default Vue.extend({
  name: "FdLink",
  props: {
    selected: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false } as PropValidator<boolean>
  },
  computed: {
    listeners(): object {
      var vm = this;
      return {
        ...this.$listeners,
        click(event: Event) {
          if (vm.disabled) {
            event.preventDefault();
            event.stopPropagation();
            return;
          }
          vm.$emit("click", event);
        }
      };
    },
    classes(): object {
      return {
        "fd-link": true,
        "is-selected": this.selected,
        "is-disabled": this.disabled
      };
    }
  }
});
</script>

