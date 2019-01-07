<title>Menu Item with Link</title>
<condensed />
<tip>You can embed a link inside an `FdMenuItem`. By embedding a link inside an `FdMenuItem` you are also able to further customize the menu item (`href`, `target`, …) and omit a `@click`-handler.</tip>
<template>
  <FdMenu>
    <FdMenuList>
      <FdMenuItem><a href="https://sap.com">Option 1</a></FdMenuItem>
      <FdMenuItem><a href="https://sap.com" target="_blank">Goto sap.com (new window)</a></FdMenuItem>
      <FdMenuItem><a href="https://sap.com">Option 3</a></FdMenuItem>
      <FdMenuItem><a href="https://sap.com">Option 4</a></FdMenuItem>
    </FdMenuList>
  </FdMenu>
</template>
