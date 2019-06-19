<title>Controlling Calendar Buttons</title>
<docs>The `hasNext` and `hasPrevious` props can be used to control the next and previous buttons in the calendar header. Those props are functions that return either `true` or `false`. Returning `false` disables the corresponding button. The calendar passes an object containing the `min` and `max` date of the currently displayed month.</docs>
<tip>The example below let's you go three month into the future and past by using the previous and next buttons in the header. By using the year and month picker the user can still go to months/years that are not reachable with previous and next buttons.</tip>
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
