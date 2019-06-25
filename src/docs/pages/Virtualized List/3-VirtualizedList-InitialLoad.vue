<title>Initial Load</title>

<template>
  <fd-virtualized-list
    :min-item-size="30"
    :items="items"
    :load-more-items="loadMoreItems"
    style="height: 400px;"
    key-field="id"
  >
    <template #item="{ item, index }">
      <div style="padding: 20px;">{{ item.title }}[{{ index }}]</div>
    </template>
  </fd-virtualized-list>
</template>

<script>
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";

const createItem = maxIndex => ({
  title: `Item at Index ${maxIndex}`,
  id: `${maxIndex}`
});

const createItems = (maxIndex, count) => {
  const indices = Array.from({ length: count }).map(
    (_, index) => index + maxIndex
  );
  return indices.map(index => createItem(index));
};

export default {
  methods: {
    loadMoreItems(done) {
      setTimeout(() => {
        this.items.push(...createItems(this.items.length, 20));
        done();
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
