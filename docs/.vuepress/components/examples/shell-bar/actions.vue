<template>
  <div>
    <FdShellBar>
      <FdShellBarGroup position="start">
        <FdShellBarLogo
          alt="SAP"
          :src="$withBase('/images/sap-logo.png')"
          :srcset="srcset"
          width="48"
          height="24"
        />
        <FdShellBarProduct productTitle="Product Name" />
      </FdShellBarGroup>
      <FdShellBarGroup position="end">
        <FdShellBarActions>
          <FdShellBarAction>
            <FdShellBarActionButton icon="sys-help" />
          </FdShellBarAction>
          <FdShellBarAction>
            <FdShellBarActionButton icon="settings" />
          </FdShellBarAction>
          <FdShellBarAction>
            <FdShellBarUserMenu>
              <FdMenu>
                <FdMenuList>
                  <FdMenuItem>
                    Settings
                  </FdMenuItem>
                  <FdMenuItem>
                    Sign out
                  </FdMenuItem>
                </FdMenuList>
              </FdMenu>
            </FdShellBarUserMenu>
          </FdShellBarAction>
        </FdShellBarActions>
      </FdShellBarGroup>
    </FdShellBar>
  </div>
</template>

<script>
export default {
  computed: {
    srcset() {
      return [
        `${this.$withBase("/images/sap-logo@2x.png")} 2x`,
        `${this.$withBase("/images/sap-logo@3x.png")} 3x`,
        `${this.$withBase("/images/sap-logo@4x.png")} 4x`
      ].join(", ");
    }
  }
};
</script>
