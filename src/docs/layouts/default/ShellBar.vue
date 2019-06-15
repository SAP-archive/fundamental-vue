<template>
  <FdShellBar>
    <FdShellBarGroup position="start">
      <FdShellBarLogo style="display: flex;">
        <slot name="toggle" />
        <span class="product-name">Fundamental Vue</span>
      </FdShellBarLogo>
    </FdShellBarGroup>
  </FdShellBar>
</template>

<script>
export default {
  computed: {
    sidenavVisible: {
      get() {
        return (
          this.sidenavVisibleModel.length === 1 &&
          this.sidenavVisibleModel[0] === true
        );
      },
      set(visible) {
        this.sidenavVisibleModel = [visible];
      }
    }
  },
  data() {
    return {
      sidenavVisibleModel: [true]
    };
  }
};
</script>

<style>
.product-name {
  color: white !important;
  font-weight: bold;
}
</style>
