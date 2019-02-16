<title>Search Input with Auto Complete</title>

<template>
  <div>
    <p>Search Query: '{{ query }}'</p>
    <FdSearchInput
      v-model="query"
      placeholder="Enter Search Query"
      @search="search"
      @autoComplete="autoComplete"
      :enableSuggest="true"
    >
      <FdMenuItem
        v-for="item in data"
        :key="item.key"
        @click="searchvalue = item.text"
        >{{ item.text }}</FdMenuItem
      >
    </FdSearchInput>
  </div>
</template>

<script>
export default {
  methods: {
    search(query) {
      this.query = query;
    },
    autoComplete(event) {}
  },
  data() {
    return {
      query: "",
      data: [
        { key: 1, text: "apple" },
        { key: 2, text: "mango" },
        { key: 3, text: "grapes" },
        { key: 4, text: "banana" },
        { key: 5, text: "orange" }
      ]
    };
  }
};
</script>
