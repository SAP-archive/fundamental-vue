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

::: tip
`fd-input` supports `v-model` and thus you can easily create bi-directional bindings.
:::

<d-example name="binding">
</d-example>

## Input States

<d-example name="states">
</d-example>

## Checkboxes
You can bind multiple checkboxes to a single array. For each checked control it's corresponding value is added to the bound array.

::: tip

Form items can be inlined. You can do this either by setting the `inline`-flag on each item or by simply setting it on the enclosing `fd-form-group`.

:::

<d-example name="checkbox">
</d-example>


## Radio Buttons

<d-example name="radio">
</d-example>


## Select

<d-example name="select">
</d-example>


## Select with `v-model`

::: tip
`fd-select` supports `v-model`.
:::

<d-example name="select-model">
</d-example>


## `v-model` Example

The example below is using `v-model` in order to bind similar component to the same data.

<d-example name="mixing-model">
</d-example>


