<template>
  <div>
    <fd-calendar :has-next="hasNext" :has-previous="hasPrevious" />
  </div>
</template>

<script>
export default {
  methods: {
    hasNext({ max }) {
      return max.getTime() < this.maxDate.getTime();
    },
    hasPrevious({ min }) {
      return min.getTime() > this.minDate.getTime();
    }
  },
  data() {
    const maxDate = new Date(Date.now());
    maxDate.setMonth(maxDate.getMonth() + 3);

    const minDate = new Date(Date.now());
    minDate.setMonth(minDate.getMonth() - 3);

    return {
      maxDate,
      minDate
    };
  }
};
</script>
