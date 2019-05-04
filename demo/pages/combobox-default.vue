<template>
  <div>
    <p id="selected-value">{{ value || "none" }}</p>
    <fd-combobox v-model="value" placeholder="Pick your Fruit of the day">
      <fd-menu-item id="item-1" value="Apple-v">Apple</fd-menu-item>
      <fd-menu-item id="item-2" value="Banana-v">Banana</fd-menu-item>
      <fd-menu-item id="item-3" value="Cherry-v">Cherry</fd-menu-item>
    </fd-combobox>
  </div>
</template>

<script>
export default {
  data() {
    return { value: null };
  }
};
</script>
