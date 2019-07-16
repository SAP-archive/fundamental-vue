<title>`v-model` Example</title>
<docs>
The example below is using `v-model` in order to bind similar component to the same data.
</docs>
<template>
  <div>
    <fd-field-set>
      <fd-legend>Favorite Color</fd-legend>
      <fd-form-group inline>
        <fd-form-item-radio label="Red">
          <FdRadio value="red" v-model="color" />
        </fd-form-item-radio>
        <fd-form-item-radio label="Green">
          <FdRadio value="green" v-model="color" />
        </fd-form-item-radio>
        <fd-form-item-radio label="Yellow">
          <FdRadio value="yellow" v-model="color" />
        </fd-form-item-radio>
      </fd-form-group>
    </fd-field-set>
    <fd-field-set>
      <fd-form-item label="Favorite Color">
        <fd-select v-model="color">
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
        </fd-select>
      </fd-form-item>
    </fd-field-set>

    <fd-field-set>
      <fd-legend>Favorite Dish (multiple selection)</fd-legend>
      <fd-form-group inline>
        <fd-form-item-checkbox label="Fish">
          <fd-checkbox v-model="dish.fish" />
        </fd-form-item-checkbox>
        <fd-form-item-checkbox label="Meat">
          <fd-checkbox v-model="dish.meat" />
        </fd-form-item-checkbox>
        <fd-form-item-checkbox label="Noodles">
          <fd-checkbox v-model="dish.noodles" />
        </fd-form-item-checkbox>
      </fd-form-group>
    </fd-field-set>

    <fd-field-set>
      <fd-form-group>
        <fd-form-item-toggle label="Fish">
          <fd-toggle v-model="dish.fish" />
        </fd-form-item-toggle>
        <fd-form-item-toggle label="Meat">
          <fd-toggle v-model="dish.meat" />
        </fd-form-item-toggle>
        <fd-form-item-toggle label="Noodles">
          <fd-toggle v-model="dish.noodles" />
        </fd-form-item-toggle>
      </fd-form-group>
    </fd-field-set>
  </div>
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
