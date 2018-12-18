<title>Calendar with blocked Items</title>

<template>
  <div>
    <FdCalendar :blockedDate="isWeekend" />
  </div>
</template>

<script>
export default {
  props: {
    isWeekend: {
      default: () => (date) => date.getDay() === 0 || date.getDay() === 6
    }
  },
}
</script>
