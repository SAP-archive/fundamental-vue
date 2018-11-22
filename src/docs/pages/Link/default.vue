<title>Link</title>

<template>
  <div>
    <h3>Normal</h3>
    <p>Lorem ipsum <FdLink href="#" @click="handleClick">dolor sit amet consectetur</FdLink> adipiscing elit.</p>

    <h3>Selected</h3>
    <p>Lorem ipsum <FdLink href="#" selected @click="handleClick">dolor sit amet consectetur</FdLink> adipiscing elit.</p>

    <h3>Disabled</h3>
    <p>Lorem ipsum <FdLink href="#" disabled @click="handleClick">dolor sit amet consectetur</FdLink> adipiscing elit.</p>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick() {
      console.log('clicked');
    },
  },
};
</script>
<style scoped>
p {
  margin-bottom: 20px;
}
</style>
