<template>
  <div>
    <p>
      <strong>Selected Fruit:</strong>
    </p>
    <p>{{ fruit || "none" }}</p>
    <fd-combobox v-model="fruit" placeholder="Pick your Fruit of the day">
      <template #default>
        <fd-menu-item value="Apple">Apple</fd-menu-item>
        <fd-menu-item value="Banana">Banana</fd-menu-item>
        <fd-menu-item value="Cherry">Cherry</fd-menu-item>
      </template>
    </fd-combobox>
  </div>
</template>

<script>
export default {
  data: () => ({ fruit: null })
};
</script>
