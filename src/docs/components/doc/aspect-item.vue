<template>
  <div class="aspect-item">
    <slot />
  </div>
</template>

<style lang="scss">
.aspect-item {
  font-size: 16px;
  display: flex;
  width: 100%;
  &__col {
    flex: 1 0 0px;
  }
}
</style>
