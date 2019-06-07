<title>Resetting a Virtualized List</title>

<template>
  <div>
    <fd-button @click="reset">reset</fd-button>
    <fd-virtualized-list
      ref="list"
      :min-item-size="30"
      :items="items"
      :load-more-items="loadMoreItems"
      style="height: 400px;"
    >
      <template #item="{ item, index }">
        <div style="padding: 20px;">{{ item.title }}[{{ index }}]</div>
      </template>
    </fd-virtualized-list>
  </div>
</template>

<script>
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";

export default {
  methods: {
    reset() {
      const list = this.$refs.list;
      this.items = [];
      list.startToLoadMoreItems();
    },
    loadMoreItems(done) {
      setTimeout(() => {
        done([
          { title: "Item A" },
          { title: "Item B" },
          { title: "Item C" },
          { title: "Item D" },
          { title: "Item E" },
          { title: "Item F" },
          { title: "Item G" },
          { title: "Item H" },
          { title: "Item I" },
          { title: "Item J" },
          { title: "Item K" },
          { title: "Item L" }
        ]);
      }, 2000);
    }
  },
  data() {
    return {
      items: []
    };
  }
};
</script>
