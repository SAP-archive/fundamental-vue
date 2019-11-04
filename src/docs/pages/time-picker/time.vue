<template>
  <div>
    <fd-time v-model="time" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: {
        hour: 23,
        minute: 59,
        second: 59
      }
    }
  }
}
</script>
