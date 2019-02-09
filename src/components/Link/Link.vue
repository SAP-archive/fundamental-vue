<template>
  <a v-on="listeners" @click="click" :class="classes" href="#">
    <slot/>
  </a>
</template>

<script lang="ts">
import Vue from "vue";
import { PropValidator } from "vue/types/options";

export default Vue.extend({
  name: "FdLink",
  props: {
    selected: { type: Boolean, default: false } as PropValidator<boolean>,
    disabled: { type: Boolean, default: false } as PropValidator<boolean>,
  },
  methods: {
    click(event: Event): void {
      if (this.disabled) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      this.$emit("click", event);
    }
  },
  computed: {
    listeners(): object {
      const { click, ...listeners } = this.$listeners;
      return listeners;
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
