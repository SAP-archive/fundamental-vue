<title>Contextual Menu (Text only)</title>

<tip>You might have noticed that `FdContextualMenu` does not contain an `FdMenu`. This is intended. `FdContextualMenu` is creating an `FdMenu` for you.</tip>

<template>
  <div>
    <FdContextualMenu moreIndicatorType="text">
      <FdMenuList header="Group Header">
        <FdMenuItem>Option 1</FdMenuItem>
        <FdMenuItem>Option 2</FdMenuItem>
        <FdMenuItem>Option 3</FdMenuItem>
      </FdMenuList>
      <FdMenuList header="Group Header">
        <FdMenuItem>Option 4</FdMenuItem>
        <FdMenuItem>Option 5</FdMenuItem>
        <FdMenuItem>Option 6</FdMenuItem>
      </FdMenuList>
    </FdContextualMenu>
  </div>
</template>
