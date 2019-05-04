<title>Search Input</title>
<docs>`fd-search-input` supports `v-model`: The *model value* is simply the currently entered predicate/query/value.</docs>
<template>
  <div>
    <p>
      Predicate: <code>{{ predicate }}</code>
    </p>
    <fd-search-input v-model="predicate" placeholder="Search" />
  </div>
</template>

<script>
export default {
  data: () => ({ predicate: "Apples and Oranges" })
};
</script>
