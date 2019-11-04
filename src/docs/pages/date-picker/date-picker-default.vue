<template>
  <div>
    <FdFieldset>
      <FdFormItem>
        <FdFormLabel>Simple Date Picker</FdFormLabel>
        <FdDatePicker v-model="date" />
      </FdFormItem>
    </FdFieldset>

    <FdFieldset>
      <FdFormItem>
        <FdFormLabel>Range Date Picker</FdFormLabel>
        <FdDatePicker mode="range" v-model="range" />
      </FdFormItem>
    </FdFieldset>
  </div>
</template>

<script>
export default {
  data() {
    const today = () => new Date(Date.now())
    const dayAfterTomorrow = today()
    dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 3)

    return {
      range: { from: today(), to: dayAfterTomorrow },
      date: { from: today(), to: null }
    }
  }
}
</script>
