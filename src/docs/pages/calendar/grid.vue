<template>
  <div>
    <FdCalendarGrid
      :items="[
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16'
      ]"
    >
      <template #item="{item}">
        <FdCalendarItem :text="item" />
      </template>
    </FdCalendarGrid>
  </div>
</template>

<script>
export default {}
</script>
