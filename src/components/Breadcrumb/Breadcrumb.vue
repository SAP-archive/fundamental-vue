<template>
  <ul class="fd-breadcrumb">
    <!-- one or more  `fd-breadcrumb-item`'s -->
    <slot />
  </ul>
</template>

<script>
// The breadcrumb allows users to see the current page and navigation path to that page.
export default {
  name: "FdBreadcrumb"
};
</script>
