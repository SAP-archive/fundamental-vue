<title>Search Input</title>
<docs>`FdSearchInput` supports `v-model`: The *model value* is simply the currently entered predicate/query/value.</docs>
<tip>
Currently `FdSearchInput` always renderes an empty state even when no auto compleiton is used. This issue will be addressed in the near future.
</tip>
<template>
  <div>
    <p>
      Predicate: <code>{{ predicate }}</code>
    </p>
    <FdSearchInput v-model="predicate" placeholder="Search" />
  </div>
</template>

<script>
export default {
  data: () => ({ predicate: "Apples and Oranges" })
};
</script>
