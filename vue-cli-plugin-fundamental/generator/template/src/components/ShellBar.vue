<template>
  <fd-shell-bar>
    <fd-shell-bar-group position="start">
      <fd-shell-bar-logo
        src="/images/product-logo.png"
        srcset="/images/product-logo.png 1x, /images/product-logo@2x.png 2x"
      />
      <fd-shell-bar-product>Product Name</fd-shell-bar-product>
    </fd-shell-bar-group>
    <fd-shell-bar-group position="end">
      <fd-shell-bar-actions>
        <fd-shell-bar-action>
          <fd-shell-bar-user-menu>
             <fd-menu>
              <fd-menu-list>
                <fd-menu-item>Sign out</fd-menu-item>
              </fd-menu-list>
            </fd-menu>
          </fd-shell-bar-user-menu>
        </fd-shell-bar-action>
      </fd-shell-bar-actions>
    </fd-shell-bar-group>
  </fd-shell-bar>
</template>
