<title>Popover with custom Trigger</title>

<template>
<!-- div is needed: otherwise the popover will not be positioned correctly -->
<div>
  <FdPopover>
    <FdButton styling="emphasized" type="positive" slot="control">Custom Popover Trigger Control</FdButton>
    <FdMenuItem>Option 1</FdMenuItem>
    <FdMenuItem>Option 2</FdMenuItem>
    <FdMenuItem>Option 3</FdMenuItem>
    <FdMenuItem>Option 4</FdMenuItem>
  </FdPopover>
</div>
</template>