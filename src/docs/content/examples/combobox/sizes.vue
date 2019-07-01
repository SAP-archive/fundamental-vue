<template>
  <div>
    <fd-combobox v-model="fruit" placeholder="Pick your Fruit of the day (default size)">
      <fd-menu-item value="Apple">Apple</fd-menu-item>
      <fd-menu-item value="Banana">Banana</fd-menu-item>
      <fd-menu-item value="Cherry">Cherry</fd-menu-item>
    </fd-combobox>

    <br />
    <br />

    <fd-combobox v-model="fruit" compact placeholder="Pick your Fruit of the day (compact size)">
      <fd-menu-item value="Apple">Apple</fd-menu-item>
      <fd-menu-item value="Banana">Banana</fd-menu-item>
      <fd-menu-item value="Cherry">Cherry</fd-menu-item>
    </fd-combobox>
  </div>
</template>

<script>
export default {
  methods: {
    select(value) {
      this.fruit = value;
    }
  },
  data() {
    return {
      fruit: null
    };
  }
};
</script>
