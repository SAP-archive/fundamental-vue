<title>Button Groups</title>
<docs>Use an `FdButtonGroup` in order to group buttons. `FdButtonGroupButton` supports everything (ex. `icon`, `@click(…), …`) a regular `FdButton` does. You can use `v-model` on `FdButtonGroupButton`. The `value` of a button group is always an array which contains the `value` of each pressed/selected `FdButtonGroupButton`. You associate a value with a button group button by using it's `value`-prop. There are also three selection modes (specified by using the `selectionMode`-prop on the group):

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
</docs>
<tip>A button group may only contain `FdButtonGroupButton`s. If you use `FdButton` instead, things will not work correctly.

**Important**

Make sure to set `aria-label` on the button group.
</tip>
<template>
  <div>
    <FdButtonGroup
      v-model="activeButtons"
      selectionMode="multiple"
      aria-label="Favorite Color"
    >
      <FdButtonGroupButton value="a">Red</FdButtonGroupButton>
      <FdButtonGroupButton value="b">Green</FdButtonGroupButton>
      <FdButtonGroupButton value="c">Blue</FdButtonGroupButton>
    </FdButtonGroup>
    <br /><br />
    <FdButtonGroup
      v-model="activeButtons"
      selectionMode="multiple"
      aria-label="Favorite Icon"
    >
      <FdButtonGroupButton icon="survey" value="a" />
      <FdButtonGroupButton icon="pool" value="b" />
      <FdButtonGroupButton icon="pie-chart" value="c" />
    </FdButtonGroup>
    <br /><br />

    Values of selected Buttons: {{ activeButtons }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeButtons: []
    };
  }
};
</script>
