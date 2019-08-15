<template>
  <fd-master-details :master-items="items" style="max-height: 300px;">
    <template v-slot:details-content="{ item }">
      <fd-panel :title="`#${item}`" :description="`Details about ${item}`"></fd-panel>
    </template>
  </fd-master-details>
</template>

<script>
export default {
  data() {
    return {
      items: this.makeItems()
    };
  },
  methods: {
    makeItems() {
      let items = [];
      for (let i = 0; i < 100; i++) {
        items.push(`AC-COB${i}`);
      }
      return items;
    }
  }
};
</script>
