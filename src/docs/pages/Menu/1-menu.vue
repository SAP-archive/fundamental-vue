<title>Menu</title>
<condensed />
<docs>
Menus are created by using `FdMenu`. A menu contains one or more `FdMenuList`s. Lists in turn contain `FdMenuItem`s. *This separation allows you to put similar items in the same group and bring order to chaos*. Further down you will find examples that show how to use multiple lists.

**Events**

- `FdMenuItem` emits `click` when clicked.
- Both, `FdMenuList` and `FdMenu` emit `select`-events every time an item was clicked. The payload is the item itself. They act as some kind of event aggregator which is useful if you don't care about the context of the clicked items so much.

</docs>
<template>
  <FdMenu @select="sayHi">
    <FdMenuList>
      <FdMenuItem value="1">Option 1</FdMenuItem>
      <FdMenuItem value="2">
        Option 2
      </FdMenuItem>
      <FdMenuItem value="3">
        Option 3
      </FdMenuItem>
      <FdMenuItem value="4">
        Option 4
      </FdMenuItem>
    </FdMenuList>
  </FdMenu>
</template>

<script>
export default {
  methods: {
    sayHi(item) {
      alert(`Clicked Menu Item with value: '${item.value}'`);
    }
  }
};
</script>
