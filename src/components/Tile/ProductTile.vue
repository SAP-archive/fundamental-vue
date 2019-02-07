<template>
  <div class="fd-product-tile" :role="role" :aria-disabled="disabled">
    <div class="fd-product-tile__media" :style="style"/>
    <div class="fd-product-tile__content">
      <h2 v-if="title != null" class="fd-product-tile__title">{{title}}</h2>
      <slot name="content"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "FdProductTile",
  props: {
    url: { type: String, default: null },
    title: { type: String, default: null },
    isButton: { type: String, default: null },
    disabled: { type: String, default: null }
  },
  computed: {
    style(): object {
      const url = this.url;
      if (url == null) {
        return {};
      }
      return {
        "background-image": `url(${this.url})`
      };
    },
    role(): string | null {
      return this.isButton ? "button" : null;
    }
  }
});
</script>
