<template>
  <a v-on="$listeners" @click.native="click" :class="classes" href="#" :title="title">
    <slot>{{ title }}</slot>
  </a>
</template>

<script>
export default {
  name: "FdLink",
  props: {
    title: String,
    selected: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false }
  },
  methods: {
    click(event) {
      if (event.defaultPrevented) {
        return;
      }
      event.preventDefault();
      if (this.disabled) {
        event.stopPropagation();
        return;
      }
      this.$emit("click", event);
    }
  },
  computed: {
    classes() {
      return {
        "fd-link": true,
        "is-selected": this.selected,
        "is-disabled": this.disabled
      };
    }
  }
};
</script>
