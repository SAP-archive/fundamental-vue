<template>
  <div>
    <fd-field-set>
      <fd-legend>Favorite Color</fd-legend>
      <fd-form-group inline>
        <fd-form-item-radio>
          <fd-radio value="red" v-model="color" />
          <td-form-label>Red</td-form-label>
        </fd-form-item-radio>
        <fd-form-item-radio>
          <fd-radio value="green" v-model="color" />
          <td-form-label>Green</td-form-label>
        </fd-form-item-radio>
        <fd-form-item-radio>
          <fd-radio value="yellow" v-model="color" />
          <td-form-label>Yellow</td-form-label>
        </fd-form-item-radio>
      </fd-form-group>
    </fd-field-set>
    <fd-field-set>
      <fd-form-item>
        <fd-form-label>Favorite Color</fd-form-label>
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
        <fd-form-item-checkbox>
          <fd-checkbox v-model="dish.fish" />
          <fd-form-label>Fish</fd-form-label>
        </fd-form-item-checkbox>
        <fd-form-item-checkbox>
          <fd-checkbox v-model="dish.meat" />
          <fd-form-label>Meat</fd-form-label>
        </fd-form-item-checkbox>
        <fd-form-item-checkbox>
          <fd-checkbox v-model="dish.noodles" />
          <fd-form-label>Noodles</fd-form-label>
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
