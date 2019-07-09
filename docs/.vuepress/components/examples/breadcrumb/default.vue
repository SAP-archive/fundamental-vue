<template>
  <div>
    <FdBreadcrumb>
      <FdBreadcrumbItem @click.prevent="handleClick">Home</FdBreadcrumbItem>
      <FdBreadcrumbItem href="#helloworld">Products</FdBreadcrumbItem>
      <FdBreadcrumbItem to="#chris">Butter Pretzel</FdBreadcrumbItem>
    </FdBreadcrumb>
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
