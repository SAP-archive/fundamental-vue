<template>
  <FdShellBar>
    <FdShellBarGroup position="start">
      <FdShellBarLogo style="display: flex;">
        <slot name="toggle" />
        <span class="product-name">Fundamental Vue</span>
      </FdShellBarLogo>
    </FdShellBarGroup>
    <FdShellBarGroup position="end">
      <FdShellBarActions>
        <FdShellBarAction>
          <FdShellBarUserMenu>
            <FdMenuItem>
              <a
                href="https://github.com/SAP/fundamental-vue/issues/new"
                target="_blank"
                >Report an Issue</a
              >
            </FdMenuItem>
          </FdShellBarUserMenu>
        </FdShellBarAction>
      </FdShellBarActions>
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
      sidenavVisibleModel: [true],
      logoSrc: process.env.BASE_URL + "images/logo.png",
      logoSrcSet:
        process.env.BASE_URL +
        "images/logo.png 1x, " +
        process.env.BASE_URL +
        "images/logo@2x.png 2x"
    };
  }
};
</script>

<style lang="scss">
.product-name {
  color: white;
  font-weight: bold;
}
</style>
