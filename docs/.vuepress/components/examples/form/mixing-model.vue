<template>
  <FdFormSet>
    <FdFieldSet>
      <FdLegend>Favorite Color</FdLegend>
      <FdFormGroup>
        <FdFormItem label="Red"
          ><FdRadio value="red" v-model="color"
        /></FdFormItem>
        <FdFormItem label="Green"
          ><FdRadio value="green" v-model="color"
        /></FdFormItem>
        <FdFormItem label="Yellow"
          ><FdRadio value="yellow" v-model="color"
        /></FdFormItem>
      </FdFormGroup>
    </FdFieldSet>
    <FdFormItem label="Favorite Color">
      <FdSelect v-model="color">
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </FdSelect>
    </FdFormItem>
    <FdFieldSet>
      <FdLegend>Favorite Dish (multiple selection)</FdLegend>
      <FdFormGroup>
        <FdFormItem label="Fish"><FdCheckbox v-model="dish.fish"/></FdFormItem>
        <FdFormItem label="Meat"><FdCheckbox v-model="dish.meat"/></FdFormItem>
        <FdFormItem label="Noodles"
          ><FdCheckbox v-model="dish.noodles"
        /></FdFormItem>
      </FdFormGroup>
    </FdFieldSet>
    <FdFieldSet>
      <FdLegend>Favorite Dish (multiple selection)</FdLegend>
      <FdFormGroup>
        <FdFormItem label="Fish"><FdToggle v-model="dish.fish"/></FdFormItem>
        <FdFormItem label="Meat"><FdToggle v-model="dish.meat"/></FdFormItem>
        <FdFormItem label="Noodles"
          ><FdToggle v-model="dish.noodles"
        /></FdFormItem>
      </FdFormGroup>
    </FdFieldSet>
  </FdFormSet>
</template>

<script>
export default {
  data() {
    return {
      color: "yellow",
      dish: {
        fish: false,
        meat: false,
        noodles: false
      }
    };
  }
};
</script>
