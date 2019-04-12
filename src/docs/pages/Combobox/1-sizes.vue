<title>Combobox Sizes</title>

<template>
  <div>
    <FdCombobox
      v-model="fruit"
      placeholder="Pick your Fruit of the day (default size)"
    >
      <FdMenuItem value="Apple">Apple</FdMenuItem>
      <FdMenuItem value="Banana">Banana</FdMenuItem>
      <FdMenuItem value="Cherry">Cherry</FdMenuItem>
    </FdCombobox>

    <br /><br />

    <FdCombobox
      v-model="fruit"
      compact
      placeholder="Pick your Fruit of the day (compact size)"
    >
      <FdMenuItem value="Apple">Apple</FdMenuItem>
      <FdMenuItem value="Banana">Banana</FdMenuItem>
      <FdMenuItem value="Cherry">Cherry</FdMenuItem>
    </FdCombobox>
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
