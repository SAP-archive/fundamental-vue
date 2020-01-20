<template>
  <div style="padding: 100px;">
    <p data-cy="value">{{ value || 'none' }}</p>
    <fd-date-picker v-model="value" data-cy="picker" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: {
        from: null,
        to: null
      }
    }
  }
}
</script>
