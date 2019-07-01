---
fdRelatedComponents:
  - fd-menu
  - fd-menu-list
  - fd-menu-item
  - fd-menu-link
---

# Menu

Menus are created by using `fd-menu`. A menu contains one or more `fd-menu-list`s. Lists in turn contain `fd-menu-item`s. *This separation allows you to put similar items in the same group and bring order to chaos*. Further down you will find examples that show how to use multiple lists.

**Events**

- `fd-menu-item` emits `click` when clicked.
- Both, `fd-menu-list` and `fd-menu` emit `select`-events every time an item was clicked. The payload is the item itself. They act as some kind of event aggregator which is useful if you don't care about the context of the clicked items so much.

## Default Menu

<d-example name="menu">
</d-example>

## Menu Item with Link


**`fd-menu-item` is smart:**

`fd-menu-item` looks at what you put in it. If you have an item with just text, `fd-menu-item` will detect that and automatically wrap it with an anchor-element. So this:

```html
<fd-menu-item>click me</fd-menu-item>
```

will yield the same *HTML* as

```html
<fd-menu-item>
  <fd-menu-link>click me</fd-menu-link>
</fd-menu-item>
```

If you put anything other than just plain text inside `fd-menu-item` then this automatism won't kick in.

::: tip

`fd-menuLink` is just a simple wrapper around the standard `a`-element. This allows you to further customize the menu item (`href`, `target`, …).

:::

<d-example name="menuitem-link">
</d-example>

## Menu w/ Group

<d-example name="menu-group">
</d-example>

## Menu w/ addon before

<d-example name="menu-addon">
</d-example>

## Menu w/ separated items

Use the `separated` modifier on `fd-menu-list` to add separators between the items.

<d-example name="menu-separated">
</d-example>

## Menu Highlight

`fd-menu` currently has a limited API to control the highlighting-state. At this moment only two methods are exposed:

1. `highlightNextItem()`: Highlights the next menu item.
2. `highlightPreviousItem()`: Highlights the previous menu item.

You should rarely need to manually call those methods. They are mainly used to support keyboard navigation.

::: tip

By setting `highlights-selection` to `true` you tell `fd-menu` that selected items should be highlighted. A highlighted menu item is rendered with a background colored in light-blue.

:::

<d-example name="menu-selection">
</d-example>
