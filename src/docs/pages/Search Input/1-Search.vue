<title>Search Input</title>

<template>
  <div>
    <p>Search Query: '{{query}}'</p>
    <FdSearchInput v-model="query" placeholder="Enter Search Query" @search="onSearch"/>
  </div>
</template>

<script>
export default {
  methods: {
    onSearch(txt) {
      this.query = txt;
    }
  },
  data: () => ({ query: "Apples and Oranges" })
};
</script>


