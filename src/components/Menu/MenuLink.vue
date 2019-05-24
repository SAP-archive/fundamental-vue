<template>
  <a class="fd-menu__item" :class="classes" v-on="listeners" @click="click"
    ><slot
  /></a>
</template>

<script>
export default {
  name: "FdMenuLink",
  props: {
    selected: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false }
  },
  methods: {
    click(event) {
      if (this.disabled) {
        event.preventDefault();
        return;
      }
      this.$emit("click", event);
    }
  },
  computed: {
    listeners() {
      const { click, ...others } = this.$listeners; // eslint-disable-line no-unused-vars
      return others;
    },
    classes() {
      return {
        "is-selected": this.selected,
        "is-disabled": this.disabled,
        "fd-has-color-text-4": this.disabled
      };
    }
  }
};
</script>
