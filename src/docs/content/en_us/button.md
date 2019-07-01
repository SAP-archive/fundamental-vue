---
fdRelatedComponents:
  - fd-button
  - fd-button-group
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

## Button Groups

Use an `fd-buttonGroup` in order to group buttons. `fd-buttonGroupButton` supports everything (ex. `icon`, `@click(…), …`) a regular `fd-button` does. You can use `v-model` on `fd-buttonGroupButton`. The `value` of a button group is always an array which contains the `value` of each pressed/selected `fd-buttonGroupButton`. You associate a value with a button group button by using it's `value`-prop. There are also three selection modes (specified by using the `selectionMode`-prop on the group):

1. `single`: A single button can be pressed/selected at a time.
2. `multiple`: Multiple buttons can be pressed/selected at a time.
3. **A custom selection mode function**

**Custom Selection Mode**

If you have special needs you can specific a custom selection mode function. Simply pass a function to the `selectionMode`-prop. The function will be called with the current selection and the value of button that has just been clicked/tapped. Your custom selection mode function then has to return an array which represents the new selection.

```javascript
const mySelectionMode = (selection, value) => {
  if(value === "foo" || value === "bar") {
    return selection;
  }
  const index = selection.indexOf(value);
  const newSelection = [...selection];
  if(index >= 0) {
    // value is already selected, remove it
    newSelection.splice(index);
    return newSelection;
  }
  // value is not selected, add it
  return [value, ...newSelection];
};
```

The custom selection mode above ignores any interactions with buttons that have the value `foo` or `bar`. Otherwise it acts just like the multiple selection mode.

::: tip
A button group may only contain `fd-button-group-button`-instances. If you use `fd-button` instead, things will not work correctly.

**Important**

Make sure to set `aria-label` on the button group.
:::

<d-example name="groups">
</d-example>


## Compact Button Groups

::: tip
The compact size is only used on desktop and it is full size when used on a touch device.
:::

<d-example name="groups-compact">
</d-example>
