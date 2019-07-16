<title>Action bar with title and description as slots.</title>

<template>
  <fd-action-bar title="Page Title" description="Action bar Description">
    <template #title>
      <fd-identifier size="s" circle thumbnail url="/images/headshot-male.jpg" />
      <span>Matthew Spark</span>
    </template>
    <template #description>
      <fd-badge pill type="success">UI/UX</fd-badge>
      <fd-badge pill type="success">Developer</fd-badge>
      <fd-badge pill type="success">VIP</fd-badge>
      <fd-badge pill type="success">Star</fd-badge>
    </template>
    <fd-button slot="back" styling="light" compact icon="nav-back" />
  </fd-action-bar>
</template>
