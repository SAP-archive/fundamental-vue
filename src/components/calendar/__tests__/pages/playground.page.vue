<template>
  <div style="padding: 100px;">
    <fd-form-item>
      <fd-form-label>Mode</fd-form-label>
      <fd-select v-model="mode">
        <option value="single">single</option>
        <option value="range">range</option>
      </fd-select>
    </fd-form-item>
    <fd-form-item>
      <fd-form-label>Today</fd-form-label>
      <fd-date-input v-model="todayObject" />
    </fd-form-item>
    <p data-ci-value>{{ value || 'none' }}</p>
    <fd-calendar :today="today" :mode="mode" v-model="value" />
  </div>
</template>

<script>
export default {
  computed: {
    today() {
      return this.todayObject.from
    }
  },
  data() {
    return {
      mode: 'single',
      todayObject: {
        from: new Date('2019-06-20'),
        to: null
      },
      value: { from: null, to: null }
    }
  }
}
</script>
