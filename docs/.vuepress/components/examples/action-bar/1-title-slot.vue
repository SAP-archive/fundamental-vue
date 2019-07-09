<template>
  <FdActionBar title="Page Title" description="Action bar Description">
    <template #title>
      <FdIdentifier size="s" circle thumbnail url="/images/headshot-male.jpg" />
      <span class="name">Matthew Spark</span>
    </template>
    <template #description>
      <FdBadge pill type="success">UI/UX</FdBadge>
      <FdBadge pill type="success">Developer</FdBadge>
      <FdBadge pill type="success">VIP</FdBadge>
      <FdBadge pill type="success">Star</FdBadge>
    </template>
    <fd-button slot="back" styling="light" compact icon="nav-back" />
  </FdActionBar>
</template>

<style scoped>
.name {
  margin-left: 5px;
}
.fd-badge {
  margin-right: 3px;
}
</style>
