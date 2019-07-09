---
fdRelatedComponents:
  - fd-field-set
  - fd-form-group
  - fd-form-item
  - fd-form-label
  - fd-form-message
  - fd-form-set
  - fd-input
  - fd-input-group
  - fd-legend
  - fd-select
  - fd-text-area
---

# Form

## Binding

<tip>

`FdInput` supports `v-model` and thus you can easily create bi-directional bindings.

</tip>

::: example binding
:::

## Input States

::: example states
:::

## Checkboxes
You can bind multiple checkboxes to a single array. For each checked control it's corresponding value is added to the bound array.

<tip>

Form items can be inlined. You can do this either by setting the `inline`-flag on each item or by simply setting it on the enclosing `FdFormGroup`.

</tip>

::: example checkbox
:::


## Radio Buttons

::: example radio
:::


## Select

::: example select
:::


## Select with `v-model`

<tip>`FdSelect` supports `v-model`.</tip>

::: example select-model
:::


## `v-model` Example

The example below is using `v-model` in order to bind similar component to the same data.

::: example mixing-model
:::


