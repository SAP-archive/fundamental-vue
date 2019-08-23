<template>
  <div>
    <div class="sliders">
      <p>Max height: {{ maxHeight }}px</p>
      <input v-model.number="maxHeight" type="range" min="1" max="600" />
    </div>
    <fd-popover :body-styles="{ maxHeight: `${maxHeight}px` }" boundary="viewport">
      <template #control="{toggle}">
        <fd-button @click="toggle">Long options list</fd-button>
      </template>
      <template #default="{hide}">
        <fd-menu @select="hide">
          <fd-menu-list>
            <fd-menu-item v-for="i in items" :key="i">Option {{ i }}</fd-menu-item>
          </fd-menu-list>
        </fd-menu>
      </template>
    </fd-popover>
  </div>
</template>

<script>
export default {
  computed: {
    items() {
      return this.generateData();
    }
  },
  methods: {
    generateData() {
      const items = [];
      for (let i = 0; i < 100; i++) {
        items.push(i);
      }
      return items;
    }
  },
  data() {
    return {
      maxHeight: 250
    };
  }
};
</script>

<style>
.sliders,
.sliders input {
  width: 100%;
}
</style>
