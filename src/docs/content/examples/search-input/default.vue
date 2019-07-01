<template>
  <div>
    <p>
      Predicate:
      <code>{{ predicate }}</code>
    </p>
    <fd-search-input v-model="predicate" placeholder="Search" />
  </div>
</template>

<script>
export default {
  data: () => ({ predicate: "Apples and Oranges" })
};
</script>
