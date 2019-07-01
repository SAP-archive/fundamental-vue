<template>
  <div>
    <fd-date-input v-model="date" />
  </div>
</template>

<script>
export default {
  data: () => ({ date: { from: new Date(2019, 1, 13), to: null } })
};
</script>
