<title>Search</title>
<docs>
You have to provide two slots in order to make `fd-input-group-search` work properly:

1. `input`-slot: Use this slot to provide a search input.
2. `clear`-slot: Use this slot to provide a clear button. You can use `fd-input-group-clear-button` for that.

</docs>
<template>
  <fd-form-item>
    <fd-form-label>Render a Search Field with a Clear Button:</fd-form-label>
    <fd-input-group-search>
      <template #input>
        <input type="search" placeholder="Enter Search Term…" />
      </template>
      <template #clear>
        <fd-input-group-clear-button />
      </template>
    </fd-input-group-search>
  </fd-form-item>
</template>
