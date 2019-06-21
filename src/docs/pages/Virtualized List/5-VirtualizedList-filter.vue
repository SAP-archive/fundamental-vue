<title>Filtering a Virtualized List</title>

<template>
  <div>
    <fd-input placeholder="query" v-model="query" />
    <fd-button @click="applyQuery">Go</fd-button>
    <fd-virtualized-list
      ref="list"
      :min-item-size="30"
      :items="items"
      :load-more-items="loadMoreItems"
      :total-item-count="totalItemCount"
      style="height: 400px;"
      :size-dependencies="['item.title']"
    >
      <template #item="{ item, index }">
        <div style="width: 100%; padding: 20px;">{{ item.title }}</div>
      </template>
    </fd-virtualized-list>
  </div>
</template>

<script>
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";

class MockBackend {
  constructor() {
    // Generate sample items:
    // { title: 01234567… Item, index: $index }
    const itemCount = 1000;
    const maxPrefixLength = 11;
    const makePrefix = index => {
      const prefixLength = index % maxPrefixLength;
      return Array.from({ length: prefixLength })
        .map((_, pIndex) => String(pIndex))
        .join("");
    };
    const makeTitle = index => `${makePrefix(index)} Item`;
    this.items = Array.from({ length: itemCount }).map((_, _index) => ({
      index: _index,
      title: makeTitle(_index + 1)
    }));
    this.items = [{ title: "HelloWorld", index: 0 }, ...this.items];
  }

  delay() {
    return new Promise(resolve => setTimeout(() => resolve(), 1000));
  }

  /**
   * @param {number=} itemsPerPage number of items per page
   * @param {number=} page page to fetch (0-based)
   * @param {string=} query search string
   */
  async getItems({ itemsPerPage = 5, page = 0, query = "" }) {
    await this.delay(); // simulate a delayed response
    const _items =
      query.length < 1
        ? this.items
        : this.items.filter(item => item.title.includes(query));
    const maxIndex = _items.length;
    const startIndex = itemsPerPage * page;
    const endIndex = Math.min(maxIndex, startIndex + itemsPerPage);
    const items = _items.slice(startIndex, endIndex);
    return {
      items,
      _meta: {
        page,
        itemsPerPage,
        totalItemCount: _items.length
      }
    };
  }
}

export default {
  beforeCreate() {
    this.$backend = new MockBackend();
  },
  methods: {
    applyQuery() {
      this.reset();
    },
    reset() {
      const list = this.$refs.list;
      this.totalItemCount = null;
      this.page = null;
      this.items = [];
      list.startToLoadMoreItems();
    },
    loadMoreItems(done) {
      const page = this.page == null ? 0 : this.page + 1;
      const { itemsPerPage, query } = this;
      const that = this;
      this.$backend.getItems({ itemsPerPage, page, query }).then(response => {
        const { items, _meta } = response;
        that.totalItemCount = _meta.totalItemCount;
        that.page = _meta.page;
        done(items);
      });
    }
  },
  data() {
    return {
      query: "",
      totalItemCount: null,
      items: [],
      page: null, // most recently loaded page
      itemsPerPage: 5
    };
  }
};
</script>
