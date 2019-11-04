---
fdRelatedComponents:
  - fd-button
  - fd-button-group
  - fd-button-group-button
---

# Button Group

Use an `FdButtonGroup` in order to group buttons. `FdButtonGroupButton` supports everything (ex. `icon`, `@click(…), …`) a regular `fd-button` does. You can use `v-model` on `FdButtonGroupButton`. The `value` of a button group is always an array which contains the `value` of each pressed/selected `FdButtonGroupButton`. `null` is also a valid value (which is the default). In that case `FdButtonGroupButton` does not manage a selection at all. You associate a value with a button group button by using it's `value`-prop. There are also three selection modes (specified by using the `selectionMode`-prop on the group):

1. `single`: A single button can be pressed/selected at a time.
2. `multiple`: Multiple buttons can be pressed/selected at a time.
3. **A custom selection mode function**

**Custom Selection Mode**

If you have special needs you can specific a custom selection mode function. Simply pass a function to the `selectionMode`-prop. The function will be called with the current selection and the value of button that has just been clicked/tapped. Your custom selection mode function then has to return an array which represents the new selection.

```javascript
const mySelectionMode = (selection, value, options) => {
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

## Default Button Group

<d-example name="default">
</d-example>

## Single Selection Mode

<d-example name="groups-single-selection">
</d-example>


## Compact Button Groups

::: tip
The compact size is only used on desktop and it is full size when used on a touch device.
:::

<d-example name="groups-compact">
</d-example>
