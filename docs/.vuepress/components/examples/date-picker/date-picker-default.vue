<template>
  <div>
    <fd-form-item>
      <fd-form-label>Simple Date Picker</fd-form-label>
      <fd-date-picker v-model="date" />
    </fd-form-item>

    <fd-form-item>
      <fd-form-label>Range Date Picker</fd-form-label>
      <fd-date-picker mode="range" v-model="range" />
    </fd-form-item>
  </div>
</template>

<script>
export default {
  data() {
    const today = () => new Date(Date.now());
    const dayAfterTomorrow = today();
    dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 3);

    return {
      range: { from: today(), to: dayAfterTomorrow },
      date: { from: today(), to: null }
    };
  }
};
</script>
