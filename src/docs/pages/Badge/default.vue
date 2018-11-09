<template>
  <div class="badges">
    <vf-badge>Default</vf-badge>
    <vf-badge type="success">Success</vf-badge>
    <vf-badge type="warning">Warning</vf-badge>
    <vf-badge type="error">Error</vf-badge>

    <br /><br />

    <vf-badge filled>Default</vf-badge>
    <vf-badge filled type="success">Success</vf-badge>
    <vf-badge filled type="warning">Warning</vf-badge>
    <vf-badge filled type="error">Error</vf-badge>

    <br /><br />

    <vf-badge pill>Default</vf-badge>
    <vf-badge pill type="success">Success</vf-badge>
    <vf-badge pill type="warning">Warning</vf-badge>
    <vf-badge pill type="error">Error</vf-badge>
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