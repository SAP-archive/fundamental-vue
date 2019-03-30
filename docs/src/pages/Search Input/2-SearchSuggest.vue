<title>Search Input with Auto Complete</title>
<docs>Use the `completions`-prop in order to pass an array of strings to `FdSearchInput`. `FdSearchInput` will then render a completion list that is automatically filtered.</docs>

<template>
  <div>
    <p>
      Predicate: <code>{{ predicate }}</code>
    </p>
    <FdSearchInput
      v-model="predicate"
      placeholder="Search"
      :completions="['Apple', 'Peach', 'Banana']"
    />
  </div>
</template>

<script>
export default {
  data: () => ({ predicate: "" })
};
</script>
