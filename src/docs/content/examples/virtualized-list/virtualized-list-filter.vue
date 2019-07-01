<template>
  <div>
    <fd-input-group-search>
      <template #input>
        <input
          @change="applyQuery"
          type="search"
          v-model="query"
          placeholder="Enter Search Query and press Enter…"
        />
      </template>
      <template #clear>
        <fd-input-group-clear-button @click="reset" />
      </template>
    </fd-input-group-search>

    <fd-virtualized-list
      key-field="id"
      style="height: 400px;"
      :min-item-size="30"
      :items="items"
      :load-more-items="loadMoreItems"
      :total-item-count="totalItemCount"
      :size-dependencies="['item.title']"
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
class MockBackend {
  constructor() {
    // Generate sample items:
    // { title: 01234567… Item, id: "$index" }
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
      id: `${_index}`,
      title: makeTitle(_index + 1)
    }));
    this.items = [{ title: "HelloWorld", id: "-1" }, ...this.items];
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
      query.length < 1 ? this.items : this.items.filter(item => item.title.includes(query));
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
      this.totalItemCount = null;
      this.page = null;
      this.items = [];
    },
    reset() {
      this.totalItemCount = null;
      this.page = null;
      this.items = [];
      this.query = "";
    },
    async loadMoreItems(done) {
      const page = this.page == null ? 0 : this.page + 1;
      const { itemsPerPage, query } = this;
      // const that = this;
      const response = await this.$backend.getItems({
        itemsPerPage,
        page,
        query
      });
      const { _meta, items } = response;
      this.totalItemCount = _meta.totalItemCount;
      this.page = _meta.page;
      this.items.push(...items);
      done();
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
