<title>Menu Item with Link</title>
<condensed />
<docs>
**`FdMenuItem` is smart:**

`FdMenuItem` looks at what you put in it. If you have an item with just text, `FdMenuItem` will detect that and automatically wrap it with an anchor-element. So this:

```html
<FdMenuItem>click me</FdMenuItem>
```

will yield the same *HTML* as

```html
<FdMenuItem>
  <FdMenuLink>click me</FdMenuLink>
</FdMenuItem>
```

If you put anything other than just plain text inside `FdMenuItem` then this automatism won't kick in.
</docs>
<tip>`FdMenuLink` is just a simple wrapper around the standard `a`-element. This allows you to further customize the menu item (`href`, `target`, …).</tip>
<template>
  <FdMenu>
    <FdMenuList>
      <FdMenuItem><FdMenuLink disabled>Disabled Menu Item</FdMenuLink></FdMenuItem>
      <FdMenuItem>
        <FdMenuLink href="https://sap.com" target="_blank">Goto sap.com (new window)</FdMenuLink>
      </FdMenuItem>
      <FdMenuItem><FdMenuLink href="https://sap.com">Option 3</FdMenuLink></FdMenuItem>
      <FdMenuItem><FdMenuLink href="https://sap.com">Option 4</FdMenuLink></FdMenuItem>
    </FdMenuList>
  </FdMenu>
</template>
