<template>
  <fd-popover placement="right" with-arrow>
    <template #control="{toggle}">
      <fd-identifier @click="toggle" icon="settings" />
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
