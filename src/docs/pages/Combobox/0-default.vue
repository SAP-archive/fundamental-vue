<title>Default Combobox</title>
<tip>
There are **two** things to consider:

**`v-model` support**: `FdCombobox` supports `v-model` and thus you can easily create bi-directional bindings.


**Wrapping `FdMenuItem`s:** You have to wrap the `FdMenuItem`s in a `FdMenuList` in order for things to looks right and work properly.
</tip>

<template>
  <div>
    <div class="favorite-fruit">
      <span class="favorite-fruit-label">Selected Fruit:</span>
      <span class="favorite-fruit-current">{{fruit || 'none'}}</span>
    </div>
    <FdCombobox v-model="fruit" placeholder="Pick your Fruit of the day">
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

<style scoped>
.favorite-fruit {
  font-size: 20px;
  margin-bottom: 30px;
  border-bottom: 1px solid #efefef;
  padding-bottom: 10px;
}
.favorite-fruit-label {
  margin-right: 10px;
}

.favorite-fruit-current {
  font-weight: bold;
  color: rgb(55, 160, 6);
  background-color: #efefef;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 5px;
}

</style>
