<template>
  <div style="padding: 100px;">
    <p data-ci-value>{{ value || "none" }}</p>
    <fd-date-picker v-model="value" />
  </div>
</template>

<script>
export default {
  data() {
    return { value: null };
  }
};
</script>
