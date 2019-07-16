<title>Search Input with Confirmation on Tab</title>

<tip>
Set `confirmOn` to `keyup.tab` in order to allow the user to select suggestions by using the tab key. By default, selected suggestions are confirmed when the user hits the **Enter**-key.
</tip>

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
      confirmOn="keyup.tab"
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
