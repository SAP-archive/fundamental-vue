<template>
  <div class="status">
    <FdStatus>Default</FdStatus>
    <FdStatus type="success">Success</FdStatus>
    <FdStatus type="warning">Warning</FdStatus>
    <FdStatus type="error">Error</FdStatus>
  </div>
</template>

<style scoped>
.status {
  text-align: center;
}
.status > span {
  margin-right: 50px;
}
</style>
