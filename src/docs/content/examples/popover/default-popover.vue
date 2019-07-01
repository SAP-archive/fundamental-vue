<template>
  <fd-popover boundary="viewport">
    <template #control="{toggle}">
      <fd-button @click="toggle">top-start</fd-button>
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
