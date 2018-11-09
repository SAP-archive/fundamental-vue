<template>
  <div>
    <vf-combobox
      v-model="fruit"
      placeholder="Pick your Fruit of the day"
    >
      <vf-menu-item @click="select('Apple')">Apple</vf-menu-item>
      <vf-menu-item  @click="select('Banana')">Banana</vf-menu-item>
      <vf-menu-item  @click="select('Cherry')">Cherry</vf-menu-item>
    </vf-combobox>
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
