---
fdRelatedComponents:
  - fd-button
---

# Button

## Button Styling

<d-example name="styling">
</d-example>

## Button with Icon

<d-example name="icons">
</d-example>

## Button Sizes

::: tip
The compact size is only used on desktop and it is full size when used on a touch device.
:::

<d-example name="sizes">
</d-example>

## Split Button: Playground

`fd-split-button` is a composition of two other components:

1. `fd-split-button-action`: The *main* area on the left. `fd-split-button` will emit a `click`-event when the action-area is clicked.
2. `fd-split-button-auxiliary`: The area on the right. `fd-split-button` will emit a `click:auxiliary`-event when the auxiliary-area is clicked. You should show a popover/menu in when this event is emitted.

::: tip
`fd-split-button` does not display a menu or popover when clicked. It is up to you to set that up.
:::

<d-example name="split-button-playground">
</d-example>

## Split Button With Menu

`fd-split-button` works perfectly together with `fd-menu-popover`.

<d-example name="split-button-popover">
</d-example>

## Button States

<d-example name="states">
</d-example>
