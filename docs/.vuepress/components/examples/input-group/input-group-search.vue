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
