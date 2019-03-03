<template>
  <div class="fd-side-nav__group">
    <slot name="title">
      <FdSideNavGroupTitle v-if="title != null">{{
        title
      }}</FdSideNavGroupTitle>
    </slot>
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import FdSideNavGroupTitle from "./SideNavGroupTitle.vue";

export default Vue.extend({
  name: "FdSideNavGroup",
  components: { FdSideNavGroupTitle },
  props: {
    title: { type: String, default: null }
  }
});
</script>
