<template>
  <div v-fd-padding:large>
    <FdDatePicker v-model="date" mode="range">
      <template #input>
        <FdDatePickerInput style="color: red !important;" />
      </template>
      <template #calendar>
        <FdDatePickerCalendar />
      </template>
    </FdDatePicker>
  </div>
</template>

<script>
export default {
  data() {
    const today = () => new Date(Date.now())
    const dayAfterTomorrow = today()
    dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 3)

    return {
      date: {
        from: today(),
        to: dayAfterTomorrow
      }
    }
  }
}
</script>
