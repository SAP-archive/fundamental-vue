---
fdRelatedComponents:
  - fd-menu
  - fd-menu-list
  - fd-menu-item
  - fd-menu-link
---

# Menu

Menus are created by using `FdMenu`. A menu contains one or more `FdMenuList`s. Lists in turn contain `FdMenuItem`s. *This separation allows you to put similar items in the same group and bring order to chaos*. Further down you will find examples that show how to use multiple lists.

**Events**

- `FdMenuItem` emits `click` when clicked.
- Both, `FdMenuList` and `FdMenu` emit `select`-events every time an item was clicked. The payload is the item itself. They act as some kind of event aggregator which is useful if you don't care about the context of the clicked items so much.

## Default Menu

::: example menu
:::

## Menu Item with Link


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

<tip>

`FdMenuLink` is just a simple wrapper around the standard `a`-element. This allows you to further customize the menu item (`href`, `target`, …).

</tip>

::: example menuitem-link
:::

## Menu w/ Group

::: example menu-group
:::

## Menu w/ addon before

::: example menu-addon
:::

## Menu w/ separated items

Use the `separated` modifier on `FdMenuList` to add separators between the items.

::: example menu-separated
:::

## Menu Highlight

`fd-menu` currently has a limited API to control the highlighting-state. At this moment only two methods are exposed:

1. `highlightNextItem()`: Highlights the next menu item.
2. `highlightPreviousItem()`: Highlights the previous menu item.

You should rarely need to manually call those methods. They are mainly used to support keyboard navigation.

<tip>

By setting `highlights-selection` to `true` you tell `fd-menu` that selected items should be highlighted. A highlighted menu item is rendered with a background colored in light-blue.

</tip>

::: example menu-selection
:::
