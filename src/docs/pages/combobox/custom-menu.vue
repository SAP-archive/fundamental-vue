<template>
  <div>
    <div class="favorite-fruit">
      <span class="favorite-fruit-label">Selected Fruit:</span>
      <span class="favorite-fruit-current">{{ fruit || 'none' }}</span>
    </div>
    <fd-combobox class="fruit-picker" v-model="fruit" placeholder="Pick your Fruit of the day">
      <fd-combobox-menu class="fruit-picker" v-slot="menu">
        <fd-menu-list>
          <FdMenuItem value="Apple">Apple</FdMenuItem>
          <FdMenuItem value="Banana">Banana</FdMenuItem>
          <FdMenuItem value="Cherry">Cherry</FdMenuItem>
        </fd-menu-list>
      </fd-combobox-menu>
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
