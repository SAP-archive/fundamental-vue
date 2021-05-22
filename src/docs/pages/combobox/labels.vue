<template>
  <div>
    <p>
      <strong>Selected number:</strong>
    </p>
    <p>{{ number || 'none' }}</p>
    <fd-combobox v-model="number" placeholder="Pick your favorite Number">
      <template #default>
        <FdMenuItem value="1" label="One">One</FdMenuItem>
        <FdMenuItem value="2" label="Two">Two</FdMenuItem>
        <FdMenuItem value="3" label="Three">Three</FdMenuItem>
      </template>
    </fd-combobox>
  </div>
</template>

<script>
export default {
  data: () => ({ number: null })
}
</script>
