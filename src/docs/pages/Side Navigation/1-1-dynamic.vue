<title>Side Navigation (Dynamic)</title>
<docs>`FdSideNavList` comes with a handy `items`-prop. If this prop is set, `FdSideNavList` will automatically render everything on it's own. The `items`-array should contains plain objects with the following shape:

```typescript
type Item = {
  // A SideNav-wide unique id
  id: string;

  // A VueRouter-Type. to can:
  // - be a string and is then interpreted as a url/path
  // - be a RouterLink compatible value for it's to-prop.
  to?: RawLocation;

  // Displayed title
  name?: string;

  // Icon rendered before the title
  icon?: string;

  // Child items, if set this item becomes expandable.
  children?: Item[];
}
```
</docs>

<template>
  <FdSideNav>
    <FdSideNavList :items="items" />
  </FdSideNav>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: "1", name: "Item 1" },
        { id: "2", name: "Item 2" },
        { id: "3", name: "Item 3", children: [
          { id: "3-1", name: "Item 3-1" },
          { id: "3-2", name: "Item 3-2" },
          { id: "3-3", name: "Item 3-3" },
        ]},
        { id: "4", name: "Item 4" },
        { id: "5", name: "Item 5" },
      ],
    };
  },
};
</script>
