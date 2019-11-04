<template>
  <div class="page">
    <p id="selected-value">{{ value || 'none' }}</p>
    <fd-menu-popover>
      <template #control="{toggle}">
        <button @click="toggle">toggle</button>
      </template>
      <fd-menu-list>
        <fd-menu-item uid="a-id-0" value="a-value-0">a-title-0</fd-menu-item>
        <fd-menu-item uid="a-id-1" value="a-value-1">a-title-1</fd-menu-item>
        <fd-menu-item uid="a-id-2" value="a-value-2">a-title-2</fd-menu-item>
      </fd-menu-list>
    </fd-menu-popover>
  </div>
</template>

<script>
export default {
  data() {
    return { value: null }
  }
}
</script>
