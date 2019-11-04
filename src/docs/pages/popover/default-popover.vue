<template>
  <fd-popover boundary="viewport">
    <template #control="{toggle}">
      <fd-button @click="toggle">top-start</fd-button>
    </template>
    <template #default="{hide}">
      <fd-menu @select="hide">
        <fd-menu-list>
          <FdMenuItem>Option 1</FdMenuItem>
          <FdMenuItem>Option 2</FdMenuItem>
          <FdMenuItem>Option 3</FdMenuItem>
        </fd-menu-list>
      </fd-menu>
    </template>
  </fd-popover>
</template>
