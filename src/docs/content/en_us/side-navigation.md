---
fdRelatedComponents:
  - fd-side-nav
  - fd-side-nav-list
  - fd-side-nav-item
  - fd-side-nav-link
  - fd-side-nav-group
  - fd-side-nav-group-title
  - fd-side-nav-sub-list
  - fd-side-nav-sub-item
  - fd-side-nav-sub-link
  - fd-side-nav-icon
---

# Side Navigation

## Dynamic Side Navigation

`fd-side-nav-list` requires  which you set via the `items`-prop. You can put anything into your items. However there are a few special attributes you should be aware of:

```typescript
type Item = {
  // A SideNav-wide unique id
  id?: string; // default: random string

  // Child items – if this is non-empty the
  // item becomes expandable.
  children: Item[] = [];
}
```

<d-example name="dynamic">
</d-example>

## Working with the current Selection

The prop `selectedId` supports the `.sync`-modifier. This way you can bind the selection of the navigation to your data model.

<d-example name="data-driven-complex-sync">
</d-example>

