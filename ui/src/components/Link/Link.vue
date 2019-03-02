<template>
  <a v-on="listeners" @click="click" :class="classes" href="#" :title="title">
    <slot>{{ title }}</slot>
  </a>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "FdLink",
  props: {
    title: String,
    selected: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false }
  },
  methods: {
    click(event: Event): void {
      if (event.defaultPrevented) {
        return;
      }
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
