<template>
  <FdPopover placement="right" with-arrow>
    <template #control="{toggle}">
      <FdIdentifier @click="toggle" icon="settings" />
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
