<template>
  <div>
    <p>
      Predicate:
      <code>{{ predicate }}</code>
    </p>
    <fd-search-input
      popoverClass="docs-search"
      class="docs-search"
      v-model="predicate"
      placeholder="Search"
      :completions="['Apple', 'Peach', 'Banana', 'Chris', 'Vue is Cool', 'Test123']"
    />
  </div>
</template>

<script>
export default {
  data: () => ({ predicate: "" })
};
</script>

<style>
.docs-search {
  width: 300px;
}
</style>
