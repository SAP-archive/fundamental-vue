<title>Minimal Shell Bar</title>
<tip>This example shows the minimum Shellbar for a single application product with only user settings. If no user thumbnail is available then display initials.</tip>

<template>
  <div>
    <FdShellBar>
      <FdShellBarGroup position="start">
        <FdShellBarLogo
          alt="SAP"
          :src="$withBase('images/sap-logo.png')"
          :srcset="srcset"
          width="48"
          height="24"
        />
        <FdShellBarProduct productTitle="Product Name" />
      </FdShellBarGroup>
      <FdShellBarGroup position="end">
        <FdShellBarActions>
          <FdShellBarAction>
            <FdShellBarUserMenu ref="userMenu">
              <FdMenu>
                <FdMenuList>
                  <FdMenuItem @click="closeUserMenu">
                    Settings
                  </FdMenuItem>
                  <FdMenuItem @click="closeUserMenu">
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
  methods: {
    closeUserMenu() {
      this.$refs.userMenu.close();
    }
  },
  computed: {
    srcset() {
      return [
        `${this.$withBase("images/sap-logo@2x.png")} 2x`,
        `${this.$withBase("images/sap-logo@3x.png")} 3x`,
        `${this.$withBase("images/sap-logo@4x.png")} 4x`
      ].join(", ");
    }
  }
};
</script>
