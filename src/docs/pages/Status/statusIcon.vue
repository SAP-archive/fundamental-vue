<template>
  <div class="status">
    <FdStatus statusIcon="available">Available</FdStatus>
    <FdStatus statusIcon="away">Away</FdStatus>
    <FdStatus statusIcon="busy">Busy</FdStatus>
    <FdStatus statusIcon="offline">Appear Offline</FdStatus>
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