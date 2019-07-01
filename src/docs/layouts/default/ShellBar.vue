<template>
  <fd-shell-bar class="fdd-shell-bar">
    <fd-shell-bar-group position="start">
      <fd-shell-bar-logo style="display: flex;">
        <slot name="toggle" />
        <span class="fdd-shell-bar__product-name">
          <span class="fdd-shell-bar__product-name__main">Fundamental</span>
          <span class="fdd-shell-bar__product-name__vue">Vue</span>
        </span>
      </fd-shell-bar-logo>
    </fd-shell-bar-group>
    <fd-shell-bar-group position="end">
      <fd-shell-bar-actions>
        <fd-shell-bar-action>
          <fd-popover ref="popover" with-arrow :flips="false" placement="bottom-end">
            <template #control="{toggle}">
              <fd-shell-bar-action-button icon="search" @click="toggle" />
            </template>
            <template #default="{hide}">
              <d-component-picker @select="hide" />
            </template>
          </fd-popover>
        </fd-shell-bar-action>
      </fd-shell-bar-actions>
    </fd-shell-bar-group>
  </fd-shell-bar>
</template>

<style lang="scss">
.fdd-shell-bar {
  &__product-name {
    font-weight: bold;
    font-size: 18px;
    &__main {
      color: white;
      margin-right: 5px;
    }
    &__vue {
      color: #42b883;
    }
  }
}
</style>
