<template>
  <div>
    <fd-button @click="items = []">reset</fd-button>
    <fd-virtualized-list
      ref="list"
      key-field="id"
      :min-item-size="30"
      :items="items"
      :load-more-items="loadMoreItems"
      style="height: 400px;"
    >
      <template #item="{ item, index }">
        <fd-tile transparent is-button>
          <fd-tile-content>
            <fd-tile-title>#{{ index }} {{ item.title }}</fd-tile-title>
          </fd-tile-content>
        </fd-tile>
      </template>
    </fd-virtualized-list>
  </div>
</template>

<script>
const createItem = maxIndex => ({
  title: `Item at Index ${maxIndex}`,
  id: `${maxIndex}`
});

const createItems = (maxIndex, count) => {
  const indices = Array.from({ length: count }).map((_, index) => index + maxIndex);
  return indices.map(index => createItem(index));
};

export default {
  methods: {
    loadMoreItems(done) {
      setTimeout(() => {
        const { items } = this;
        items.push(...createItems(items.length, 3));
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
