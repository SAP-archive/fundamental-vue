<template>
  <div style="width: 1000px; height: 1000px; padding: 100px;">
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
export default {}
</script>
