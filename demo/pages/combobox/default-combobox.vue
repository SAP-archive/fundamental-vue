<template>
  <div>
    <p id="selected-value">{{ value || "none" }}</p>
    <fd-combobox v-model="value" placeholder="Pick your Fruit of the day">
      <fd-menu-item id="item-1" value="item-1">Apple</fd-menu-item>
      <fd-menu-item id="item-2" value="item-2">Banana</fd-menu-item>
      <fd-menu-item id="item-3" value="item-3">Cherry</fd-menu-item>
    </fd-combobox>
  </div>
</template>

<script>
export default {
  data() {
    return { value: null }
  }
}
</script>
