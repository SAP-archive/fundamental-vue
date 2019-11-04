<template>
  <fd-menu>
    <fd-menu-list>
      <FdMenuItem><fd-menu-link disabled>Disabled Menu Item</fd-menu-link></FdMenuItem>
      <FdMenuItem>
        <fd-menu-link href="https://sap.com" target="_blank">
          Goto sap.com (new window)
        </fd-menu-link>
      </FdMenuItem>
      <FdMenuItem><fd-menu-link href="https://sap.com">Option 3</fd-menu-link></FdMenuItem>
      <FdMenuItem><fd-menu-link href="https://sap.com">Option 4</fd-menu-link></FdMenuItem>
    </fd-menu-list>
  </fd-menu>
</template>
