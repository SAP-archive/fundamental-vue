<title>Search Input with Autocompletion</title>
<docs>
Use the `completions`-prop in order to pass an array of strings to `fd-search-input`. `fd-search-input` will then render a completion list that is automatically filtered.

</docs>

<tip>
Use the `popoverClass`- and `inputGroupClass`-props in order to apply custom CSS classes. The class specified by `popoverClass` is attached to be popover body/content and the class specified by `inputGroupClass` is applied to the input group. The example below is using those two props in order to make the auto completion menu the same width as the input group.
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
