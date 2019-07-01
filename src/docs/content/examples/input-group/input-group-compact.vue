<template>
  <fd-form-item>
    <fd-form-label>Compact Input Group:</fd-form-label>
    <fd-input-group compact>
      <template #input>
        <fd-input placeholder="Enter Search Term…" />
      </template>
      <template #after>
        <fd-input-group-addon>
          <fd-input-group-button>Submit</fd-input-group-button>
        </fd-input-group-addon>
      </template>
    </fd-input-group>
  </fd-form-item>
</template>
