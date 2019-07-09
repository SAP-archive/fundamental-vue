<template>
  <div v-fd-padding:large>
    <fd-date-picker v-model="date" mode="range">
      <template #input>
        <fd-date-picker-input style="color: red !important;" />
      </template>
      <template #calendar>
        <fd-date-picker-calendar />
      </template>
    </fd-date-picker>
  </div>
</template>

<script>
export default {
  data() {
    const today = () => new Date(Date.now());
    const dayAfterTomorrow = today();
    dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 3);

    return {
      date: {
        from: today(),
        to: dayAfterTomorrow
      }
    };
  }
};
</script>
