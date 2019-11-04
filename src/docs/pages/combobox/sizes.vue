<template>
  <div>
    <fd-combobox v-model="fruit" placeholder="Pick your Fruit of the day (default size)">
      <FdMenuItem value="Apple">Apple</FdMenuItem>
      <FdMenuItem value="Banana">Banana</FdMenuItem>
      <FdMenuItem value="Cherry">Cherry</FdMenuItem>
    </fd-combobox>

    <br />
    <br />

    <fd-combobox v-model="fruit" compact placeholder="Pick your Fruit of the day (compact size)">
      <FdMenuItem value="Apple">Apple</FdMenuItem>
      <FdMenuItem value="Banana">Banana</FdMenuItem>
      <FdMenuItem value="Cherry">Cherry</FdMenuItem>
    </fd-combobox>
  </div>
</template>

<script>
export default {
  methods: {
    select(value) {
      this.fruit = value
    }
  },
  data() {
    return {
      fruit: null
    }
  }
}
</script>
