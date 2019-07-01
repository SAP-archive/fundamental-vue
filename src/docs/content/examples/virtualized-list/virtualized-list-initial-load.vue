<template>
  <fd-virtualized-list
    :min-item-size="30"
    :items="items"
    :load-more-items="loadMoreItems"
    style="height: 400px;"
    key-field="id"
  >
    <template #item="{ item, index }">
      <fd-tile transparent is-button>
        <fd-tile-content>
          <fd-tile-title>#{{ index }} {{ item.title }}</fd-tile-title>
        </fd-tile-content>
      </fd-tile>
    </template>
  </fd-virtualized-list>
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
