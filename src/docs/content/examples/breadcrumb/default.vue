<template>
  <div>
    <fd-breadcrumb>
      <fd-breadcrumb-item @click.prevent="handleClick">Home</fd-breadcrumb-item>
      <fd-breadcrumb-item href="#">Products</fd-breadcrumb-item>
      <fd-breadcrumb-item to="#chris">Butter Pretzel</fd-breadcrumb-item>
    </fd-breadcrumb>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick() {
      console.log("clicked"); // eslint-disable-line no-console
    }
  }
};
</script>
