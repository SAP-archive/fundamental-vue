<title>Search Input with Auto Complete</title>
<docs>Use the `completions`-prop in order to pass an array of strings to `FdSearchInput`. `FdSearchInput` will then render a completion list that is automatically filtered.</docs>

<template>
  <div>
    <p>
      Predicate: <code>{{ predicate }}</code>
    </p>
    <fd-search-input
      popoverClass="docs-search"
      inputGroupClass="docs-search"
      class="docs-search-input"
      v-model="predicate"
      placeholder="Search"
      :completions="[
        'Apple',
        'Peach',
        'Banana',
        'Chris',
        'Vue is Cool',
        'Test123'
      ]"
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
