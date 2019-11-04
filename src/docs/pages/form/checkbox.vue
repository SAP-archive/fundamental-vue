<template>
  <div>
    <FdFieldset>
      <FdFieldsetLegend>Favorite Colors</FdFieldsetLegend>

      <FdFormItemCheckbox label="red">
        <FdCheckbox compact value="red" v-model="favoriteColors" />
      </FdFormItemCheckbox>

      <FdFormItemCheckbox label="Green">
        <FdCheckbox compact value="green" v-model="favoriteColors" />
      </FdFormItemCheckbox>

      <FdFormItemCheckbox label="Yellow">
        <FdCheckbox compact value="yellow" v-model="favoriteColors" />
      </FdFormItemCheckbox>
    </FdFieldset>

    <FdFieldset>
      <FdFieldsetLegend>Inline Favorite Colors</FdFieldsetLegend>

      <FdFormItemCheckbox inline label="Red">
        <FdCheckbox compact value="red" v-model="favoriteColors" />
      </FdFormItemCheckbox>

      <FdFormItemCheckbox inline label="Green">
        <FdCheckbox compact value="green" v-model="favoriteColors" />
      </FdFormItemCheckbox>

      <FdFormItemCheckbox inline label="Yellow">
        <FdCheckbox compact value="yellow" v-model="favoriteColors" />
      </FdFormItemCheckbox>
    </FdFieldset>

    <FdFieldset>
      <FdFieldsetLegend>Favorite Dish</FdFieldsetLegend>
      <FdFormItemToggle label="Fish">
        <FdToggle size="s" v-model="dish.fish" />
      </FdFormItemToggle>
      <FdFormItemToggle label="Meat">
        <FdToggle size="s" v-model="dish.meat" />
      </FdFormItemToggle>
      <FdFormItemToggle label="Noodles">
        <FdToggle size="s" v-model="dish.noodles" />
      </FdFormItemToggle>
    </FdFieldset>
  </div>
</template>

<script>
export default {
  data: () => ({
    favoriteColors: ['red'],
    dish: {
      noodles: false,
      meat: false,
      fish: true
    }
  })
}
</script>
