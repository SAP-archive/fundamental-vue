<title>Menu w/ addon before</title>
<condensed />

<template>
  <FdMenu canHaveAddon>
    <FdMenuList>
      <FdMenuItem>Option 1</FdMenuItem>
      <FdMenuItem>
        <span slot="addon" class="sap-icon--accept"/>
        Option 2
      </FdMenuItem>
      <FdMenuItem>Option 3</FdMenuItem>
      <FdMenuItem>Option 4</FdMenuItem>
    </FdMenuList>
  </FdMenu>
</template>