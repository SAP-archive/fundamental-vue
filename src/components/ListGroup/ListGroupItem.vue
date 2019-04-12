<template>
  <li class="fd-list-group__item">
    <slot />
    <span v-if="hasAction" class="fd-list-group__action">
      <slot name="action" />
    </span>
  </li>
</template>

<script>
export default {
  name: "FdListGroupItem",
  computed: {
    hasAction() {
      return this.$slots.action != null;
    }
  }
};
</script>
