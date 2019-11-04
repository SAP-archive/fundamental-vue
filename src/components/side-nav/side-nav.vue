<template>
  <nav class="fd-side-nav">
    <div class="fd-side-nav__main-navigation">
      <slot />
    </div>
    <div class="fd-side-nav__utility">
      <slot name="utility" />
    </div>
  </nav>
</template>

<script>
export default {
  name: 'FdSideNav'
}
</script>
