<template>
  <div class="fd-action-bar__header">
    <!-- Custom title – use `fd-action-bar-title` -->
    <slot name="title" />
    <!-- Custom description – use `fd-action-bar-description` -->
    <slot name="description" />
  </div>
</template>

<script>
// The header of an `fd-action-bar`. Use `fd-action-bar-title` to add an title to the header.
export default {
  name: "FdActionBarHeader"
};
</script>
