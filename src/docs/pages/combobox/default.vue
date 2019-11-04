<template>
  <div>
    <p>
      <strong>Selected Fruit:</strong>
    </p>
    <p>{{ fruit || 'none' }}</p>
    <fd-combobox v-model="fruit" placeholder="Pick your Fruit of the day">
      <template #default>
        <FdMenuItem value="Apple">Apple</FdMenuItem>
        <FdMenuItem value="Banana">Banana</FdMenuItem>
        <FdMenuItem value="Cherry">Cherry</FdMenuItem>
      </template>
    </fd-combobox>
  </div>
</template>

<script>
export default {
  data: () => ({ fruit: null })
}
</script>
