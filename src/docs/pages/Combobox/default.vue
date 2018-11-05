<template>
  <div>
    <FdCombobox
      v-model="fruit"
      placeholder="Pick your Fruit of the day"
    >
      <FdMenuItem @click="select('Apple')">Apple</FdMenuItem>
      <FdMenuItem  @click="select('Banana')">Banana</FdMenuItem>
      <FdMenuItem  @click="select('Cherry')">Cherry</FdMenuItem>
    </FdCombobox>
    <br /><br />
    <h1>Selected Fruit: {{fruit}}</h1>
  </div>
</template>

<script>
export default {
  methods: {
    select(value) {
      this.fruit = value;
    },
  },
  data() {
    return {
      fruit: null,
    };
  },
};
</script>
