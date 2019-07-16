<template>
  <a
    class="fd-menu__item"
    :data-fd-menu-item-link-uid="menuItemId"
    :class="classes"
    v-on="listeners"
    @click="click"
  >
    <slot />
  </a>
</template>

<script>
export default {
  name: "FdMenuLink",
  inject: ["menuItem", "menuHighlight"],
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
    menuItemId() {
      return this.menuItem.uid;
    },
    highlighted_() {
      if (this.menuHighlight.highlightedId === this.menuItemId) {
        return true;
      }
      return this.selected;
    },
    listeners() {
      const { click, ...others } = this.$listeners; // eslint-disable-line no-unused-vars
      return others;
    },
    classes() {
      return {
        "is-selected": this.highlighted_,
        "is-disabled": this.disabled,
        "fd-has-color-text-4": this.disabled
      };
    }
  }
};
</script>
