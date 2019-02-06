<template>
  <div class="fd-ui fd-ui--fundamental">
    <div v-if="$slots.header" :class="headerClasses">
      <slot name="header"/>
    </div>
    <div class="fd-ui__app">
      <div class="fd-app">
        <div v-if="$slots.sidebar" class="fd-app__sidebar">
          <slot name="sidebar"/>
        </div>
        <main class="fd-app__main" style="padding-top: 20px; background-color: white;">
          <slot/>
        </main>
      </div>
    </div>
    <div v-if="$slots.footer" class="fd-ui__footer">
      <slot name="footer"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "FdUi",
  props: {
    headerClass: { type: String, default: null }
  },
  computed: {
    headerClasses(): object {
      const headerClass = this.headerClass != null ? [this.headerClass] : [];
      return ["fd-ui__header", ...headerClass];
    }
  }
});
</script>
