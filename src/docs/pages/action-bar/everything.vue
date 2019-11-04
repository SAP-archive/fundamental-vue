<template>
  <fd-action-bar>
    <template #back>
      <fd-action-bar-back>
        <fd-button styling="light" icon="nav-back" />
      </fd-action-bar-back>
    </template>
    <template #header>
      <fd-action-bar-header>
        <template #title>
          <fd-action-bar-title>Action Bar Title</fd-action-bar-title>
        </template>
        <template #description>
          <fd-action-bar-description>Action Bar Description</fd-action-bar-description>
        </template>
      </fd-action-bar-header>
    </template>
    <template #actions>
      <fd-action-bar-actions>
        <fd-button type="positive" icon="accept">Approve</fd-button>
        <fd-button type="negative" icon="decline">Reject</fd-button>
      </fd-action-bar-actions>
    </template>
  </fd-action-bar>
</template>
