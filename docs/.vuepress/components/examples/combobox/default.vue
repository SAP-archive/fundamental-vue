<template>
  <div>
    <div class="favorite-fruit">
      <span class="favorite-fruit-label">Selected Fruit:</span>
      <span class="favorite-fruit-current">{{ fruit || "none" }}</span>
    </div>
    <FdCombobox v-model="fruit" placeholder="Pick your Fruit of the day">
      <template style="width: 300px;" #default>
        <FdMenuItem value="Apple">Apple</FdMenuItem>
        <FdMenuItem value="Banana">Banana</FdMenuItem>
        <FdMenuItem value="Cherry">Cherry</FdMenuItem>
      </template>
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
