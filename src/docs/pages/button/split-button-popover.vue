<template>
  <div>
    <fd-menu-popover body-size-mode="at-least-trigger">
      <template #control="{toggle}">
        <FdSplitButton @click:auxiliary="toggle" icon="cart">Checkout</FdSplitButton>
      </template>
      <fd-menu-list v-slot:default>
        <FdMenuItem>Option 1</FdMenuItem>
        <FdMenuItem>Option 2</FdMenuItem>
        <FdMenuItem>Option 3</FdMenuItem>
        <FdMenuItem>Option 4</FdMenuItem>
      </fd-menu-list>
    </fd-menu-popover>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>
