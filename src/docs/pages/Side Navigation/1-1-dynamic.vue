<title>Side Navigation</title>
<docs>`fd-side-nav-list` requires  which you set via the `items`-prop. You can put anything into your items. However there are a few special attributes you should be aware of:

```typescript
type Item = {
  // A SideNav-wide unique id
  id?: string; // default: random string

  // Child items – if this is non-empty the
  // item becomes expandable.
  children: Item[] = [];
}
```
</docs>

<template>
  <fd-side-nav>
    <fd-side-nav-list :items="items">
      <template #item="item">
        <fd-side-nav-item>
          <fd-side-nav-link>{{ item.name }}</fd-side-nav-link>
          <template #subItem="subItem">
            <fd-side-nav-sub-item>
              <fd-side-nav-sub-link>{{ subItem.name }}</fd-side-nav-sub-link>
            </fd-side-nav-sub-item>
          </template>
        </fd-side-nav-item>
      </template>
    </fd-side-nav-list>
  </fd-side-nav>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { name: "Item 1" },
        { name: "Item 2" },
        {
          name: "Item 3",
          children: [{ name: "Item 3-1" }, { name: "Item 3-2" }, { name: "Item 3-3" }]
        },
        { name: "Item 4" },
        { name: "Item 5" }
      ]
    };
  }
};
</script>
