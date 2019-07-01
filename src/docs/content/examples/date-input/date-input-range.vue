<template>
  <div>
    <fd-date-input mode="range" v-model="date" />
  </div>
</template>

<script>
export default {
  data: () => ({
    date: { from: new Date(2019, 1, 13), to: new Date(2019, 1, 15) }
  })
};
</script>
