<template>
  <div>
    <p data-cy="selectedValue">{{ value || 'none' }}</p>
    <FdCombobox v-model="value" placeholder="Pick your Fruit of the day">
      <template #default>
        <FdMenuItem data-cy="item-1" value="Apple-v">Apple</FdMenuItem>
        <FdMenuItem data-cy="item-2" value="Banana-v">Banana</FdMenuItem>
        <FdMenuItem data-cy="item-3" value="Cherry-v">Cherry</FdMenuItem>
      </template>
    </FdCombobox>
  </div>
</template>

<script>
export default {
  data() {
    return { value: null }
  }
}
</script>
