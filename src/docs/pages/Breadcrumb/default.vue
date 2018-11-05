<template>
  <div>
    <FdBreadcrumb>
      <FdBreadcrumbItem @click="handleClick">Link Text</FdBreadcrumbItem>
      <FdBreadcrumbItem>Link Text</FdBreadcrumbItem>
      <FdBreadcrumbItem>Link Text</FdBreadcrumbItem>
    </FdBreadcrumb>
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