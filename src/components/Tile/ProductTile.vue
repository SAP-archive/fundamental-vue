<template>
  <div class="fd-product-tile" :role="role" :aria-disabled="disabled">
    <div class="fd-product-tile__media" :style="style" />
    <div class="fd-product-tile__content">
      <h2 v-if="title != null" class="fd-product-tile__title">{{ title }}</h2>
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  name: "FdProductTile",
  props: {
    url: { type: String, default: null },
    title: { type: String, default: null },
    isButton: { type: Boolean, default: null },
    disabled: { type: String, default: null }
  },
  computed: {
    style() {
      const url = this.url;
      if (url == null) {
        return {};
      }
      return {
        "background-image": `url(${this.url})`
      };
    },
    role() {
      return this.isButton ? "button" : null;
    }
  }
};
</script>
