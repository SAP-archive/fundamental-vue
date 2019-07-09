<template>
  <div class="status">
    <FdStatus icon="history">Custom Icon</FdStatus>
    <FdStatus icon="message-success">Success</FdStatus>
    <FdStatus icon="message-warning">Warning</FdStatus>
    <FdStatus icon="message-error">Error</FdStatus>
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
