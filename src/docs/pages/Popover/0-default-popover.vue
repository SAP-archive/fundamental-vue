<title>Popovers</title>
<docs>
A popover is made up of two parts:

- **Popover Control:** This part triggers the popover content to be displayed. You specify the popover control by providing content for the `control`-slot.
- **Popover Content:** The content is what will be displayed. The content is anchored to the control element. You specify the popover's content by providing a default slot.

Each slot (`control` and `default`) have access to the following *slot-props*:

- `visible` – *Boolean*: `true` when the popover's content is currently visible.
- `show` – *Function*: When called, the popover's content will be made visible.
- `hide` – *Function*: When called, the popover's content will be dismissed.
- `toggle` – *Function*: When called, the popover's visibility will be toggled.
- `placement` – *String*: The current popover placement.
</docs>

<tip>
You can use those slot-props to customize all sorts of things. For example, showing the popover's content when the user hovers over the *control* just means that you have to call `toggle` or `show` for `mouseenter` instead of `click`.
</tip>
<template>
  <FdPopover boundary="viewport">
    <template #control="{toggle}">
      <FdButton @click="toggle">top-start</FdButton>
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
