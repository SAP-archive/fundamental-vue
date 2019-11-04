<template>
  <div>
    <fd-shell-bar>
      <fd-shell-bar-product-group>
        <fd-shell-bar-logo
          alt="SAP"
          :src="$withBase('images/sap-logo.png')"
          :srcset="srcset"
          width="48"
          height="24"
        />
        <fd-shell-bar-product productTitle="Product Name" />
      </fd-shell-bar-product-group>
      <fd-shell-bar-actions-group>
        <fd-shell-bar-action>
          <fd-shell-bar-action-button icon="sys-help" />
        </fd-shell-bar-action>
        <fd-shell-bar-action>
          <fd-shell-bar-action-button icon="settings" />
        </fd-shell-bar-action>
        <fd-shell-bar-action>
          <fd-shell-bar-user-menu>
            <fd-menu>
              <fd-menu-list>
                <FdMenuItem>
                  Settings
                </FdMenuItem>
                <FdMenuItem>
                  Sign out
                </FdMenuItem>
              </fd-menu-list>
            </fd-menu>
          </fd-shell-bar-user-menu>
        </fd-shell-bar-action>
      </fd-shell-bar-actions-group>
    </fd-shell-bar>
  </div>
</template>

<script>
export default {
  computed: {
    srcset() {
      return [
        `${this.$withBase('images/sap-logo@2x.png')} 2x`,
        `${this.$withBase('images/sap-logo@3x.png')} 3x`,
        `${this.$withBase('images/sap-logo@4x.png')} 4x`
      ].join(', ')
    }
  }
}
</script>
