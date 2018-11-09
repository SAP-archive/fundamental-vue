<template>
  <div>
    <h3>Normal</h3>
    <p>Lorem ipsum <vf-link href="#" @click="handleClick">dolor sit amet consectetur</vf-link> adipiscing elit.</p>

    <h3>Selected</h3>
    <p>Lorem ipsum <vf-link href="#" selected @click="handleClick">dolor sit amet consectetur</vf-link> adipiscing elit.</p>

    <h3>Disabled</h3>
    <p>Lorem ipsum <vf-link href="#" disabled @click="handleClick">dolor sit amet consectetur</vf-link> adipiscing elit.</p>
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
