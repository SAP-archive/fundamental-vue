<template>
  <FdPopover boundary="viewport">
    <template #control="{toggle}">
      <fd-button @click="toggle">top-start</fd-button>
    </template>
    <template #default="{hide}">
      <FdMenu @select="hide">
        <FdMenuList>
          <FdMenuItem>Option 1</FdMenuItem>
          <FdMenuItem>Option 2</FdMenuItem>
          <FdMenuItem>Option 3</FdMenuItem>
        </FdMenuList>
      </FdMenu>
    </template>
  </FdPopover>
</template>
