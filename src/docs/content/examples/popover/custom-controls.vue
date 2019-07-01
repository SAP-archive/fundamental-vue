<template>
  <fd-popover placement="right" with-arrow>
    <template #control="{toggle}">
      <fd-identifier @click="toggle" icon="settings" />
    </template>
    <template #default="{hide}">
      <fd-menu @select="hide">
        <fd-menu-list>
          <fd-menu-item>Option 1</fd-menu-item>
          <fd-menu-item>Option 2</fd-menu-item>
          <fd-menu-item>Option 3</fd-menu-item>
        </fd-menu-list>
      </fd-menu>
    </template>
  </fd-popover>
</template>
