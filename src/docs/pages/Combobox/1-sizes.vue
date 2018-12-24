<title>Combobox Sizes</title>

<template>
  <div>
    <FdCombobox v-model="fruit" placeholder="Pick your Fruit of the day (default size)">
      <FdMenuList>
        <FdMenuItem @click="fruit = 'Apple'">Apple</FdMenuItem>
        <FdMenuItem @click="fruit = 'Banana'">Banana</FdMenuItem>
        <FdMenuItem @click="fruit = 'Cherry'">Cherry</FdMenuItem>
      </FdMenuList>
    </FdCombobox>

    <br /><br />

    <FdCombobox v-model="fruit" compact placeholder="Pick your Fruit of the day (compact size)">
      <FdMenuList>
        <FdMenuItem @click="fruit = 'Apple'">Apple</FdMenuItem>
        <FdMenuItem @click="fruit = 'Banana'">Banana</FdMenuItem>
        <FdMenuItem @click="fruit = 'Cherry'">Cherry</FdMenuItem>
      </FdMenuList>
    </FdCombobox>
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
