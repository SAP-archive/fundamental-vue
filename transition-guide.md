# Transition Guide
This is a guide that lists all *major* changes and helps you to transition from an old version to a newer version. The most recent recommendations are right at the beginning – further down you will find the older recommendations. If in doubt, it is generally safer to apply the recommendations from bottom to top.

## `id` now required in `FdFormItemRadio` and `FdFormItemCheckbox` (`> 0.18.4-rc.2`)

The `id`-attribute/prop is now required. If you use the `label`-prop of `FdFormItemCheckbox` and `FdFormItemRadio` those components will render the corresponding label on your behalf. If the label is rendered for you, is it ensured that the `for`-attribute of the `label`-element is set to the same `id`. If you want to render the label/item yourself you should use the new label components – namely: `FdRadioLabel` and `FdCheckboxLabel`.

**Old:**

```markup
<FdFormItemCheckbox label="red">
  <FdCheckbox compact value="red" v-model="favoriteColors" />
</FdFormItemCheckbox>
```

**New:**

```
<FdFormItemCheckbox id="examples-form-checkbox-red" label="red">
  <FdCheckbox
    compact
    value="red"
    id="examples-form-checkbox-red"
    v-model="favoriteColors"
  />
</FdFormItemCheckbox>
```

**Important:**

Due to incomatible changes in *Fundamental Styles*, **inline form items** do not work in this version. This will be fixed shortly. You should find a corresponding entry in this transition guide once this is fixed.