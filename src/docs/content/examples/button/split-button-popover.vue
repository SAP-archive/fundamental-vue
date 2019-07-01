<template>
  <div>
    <fd-menu-popover body-size-mode="at-least-trigger">
      <template #control="{toggle}">
        <fd-split-button @click:auxiliary="toggle" icon="cart">Checkout</fd-split-button>
      </template>
      <fd-menu-list v-slot:default>
        <fd-menu-item>Option 1</fd-menu-item>
        <fd-menu-item>Option 2</fd-menu-item>
        <fd-menu-item>Option 3</fd-menu-item>
        <fd-menu-item>Option 4</fd-menu-item>
      </fd-menu-list>
    </fd-menu-popover>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
