<template>
  <div>
    <strong>Date Mode:</strong>
    <fd-date-input v-model="date" />
    <fd-date-input v-model="date" />
    <br />
    <br />
    <strong>Range Mode:</strong>
    <fd-date-input mode="range" v-model="range" />
    <fd-date-input mode="range" v-model="range" />
  </div>
</template>

<script>
export default {
  data: () => ({
    date: { from: new Date(2019, 1, 13), to: null },
    range: { from: new Date(2019, 1, 13), to: new Date(2020, 1, 13) }
  })
};
</script>
