<template>
  <div>
    <div class="favorite-fruit">
      <span class="favorite-fruit-label">Selected Fruit:</span>
      <span class="favorite-fruit-current">{{ fruit || "none" }}</span>
    </div>
    <fd-combobox class="fruit-picker" v-model="fruit" placeholder="Pick your Fruit of the day">
      <fd-combobox-menu class="fruit-picker" v-slot="menu">
        <fd-menu-list>
          <fd-menu-item value="Apple">Apple</fd-menu-item>
          <fd-menu-item value="Banana">Banana</fd-menu-item>
          <fd-menu-item value="Cherry">Cherry</fd-menu-item>
        </fd-menu-list>
      </fd-combobox-menu>
    </fd-combobox>
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
