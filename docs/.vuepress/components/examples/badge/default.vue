<template>
  <div class="badges">
    <FdBadge>Default</FdBadge>
    <FdBadge type="success">Success</FdBadge>
    <FdBadge type="warning">Warning</FdBadge>
    <FdBadge type="error">Error</FdBadge>

    <br /><br />

    <FdBadge filled>Default</FdBadge>
    <FdBadge filled type="success">Success</FdBadge>
    <FdBadge filled type="warning">Warning</FdBadge>
    <FdBadge filled type="error">Error</FdBadge>

    <br /><br />

    <FdBadge pill>Default</FdBadge>
    <FdBadge pill type="success">Success</FdBadge>
    <FdBadge pill type="warning">Warning</FdBadge>
    <FdBadge pill type="error">Error</FdBadge>
  </div>
</template>

<style scoped>
.badges {
  text-align: center;
}
.badges > span {
  margin-right: 10px;
}
</style>
