<template>
  <div>
    <h3>Normal</h3>
    <p>
      Lorem ipsum
      <fd-link href="#" @click="handleClick">dolor sit amet consectetur</fd-link>
      adipiscing elit.
    </p>

    <h3>Selected</h3>
    <p>
      Lorem ipsum
      <fd-link href="#" selected @click="handleClick">dolor sit amet consectetur</fd-link>
      adipiscing elit.
    </p>

    <h3>Disabled</h3>
    <p>
      Lorem ipsum
      <fd-link href="#" disabled @click="handleClick">dolor sit amet consectetur</fd-link>
      adipiscing elit.
    </p>
  </div>
</template>
<script>
export default {
  methods: {
    handleFocus() {
      console.log("focus"); // eslint-disable-line no-console
    },
    handleClick() {
      console.log("clicked"); // eslint-disable-line no-console
    }
  }
};
</script>
