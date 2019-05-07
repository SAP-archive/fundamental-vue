<template>
  <div>
    <fd-popover>
      <template #control="{toggle}">
        <FdButton @click="toggle">Toggle</FdButton>
      </template>
      <template #default>
        <div>content</div>
      </template>
    </fd-popover>
  </div>
</template>

<script>
export default {
  name: "clickOutside"
}
</script>
