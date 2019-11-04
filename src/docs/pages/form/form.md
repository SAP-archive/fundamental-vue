---
fdRelatedComponents:
  - fd-fieldset
  - fd-fieldset-legend
  - FdFormItem
  - FdFormLabel
  - fd-form-message
  - fd-input
  - fd-input-group
  - fd-legend
  - fd-select
  - fd-text-area
---

# Form
Fundamental Vue comes with many components that make it easy to build nice-looking forms.

## Terminology
If you want to use the form components effectively you should understand the terminology used throughout this documentation:

- **Form Controls:** A form control (or simply *a control*) is a component that allows a user to input information. Examples for those controls are `fd-text-input`, `fd-checkbox`, `fd-radio`, `fd-toggle` and `fd-textarea`. There is a dedicated controls-section that shows all available controls and how to use them. Controls are simple thin wrappers around native input elements (`input`, `textarea`, …). Fundamental Vue wraps native input elements in order to add styling and other props like `state`.
- **Form Items:** A form item is made of a control (such as `fd-text-input`), a label and additional properties (like `inline`). Controls are seldomly used alone. Usually you alway use them in combination with a form item. There are many form items – for example: `FdFormItem-text`, `FdFormItem-checkbox`, `FdFormItem-radio`, ….
- **Fieldset:** A fieldset either wraps form items. Not using a fieldset does not have a functional impact. However, without it your forms will look squished – not nice. Using `fd-fieldset` is really as easy as wrapping the form item (or form items) and you are done. You can also put an `fd-fieldset-legend` inside a `fd-fieldset` to create a legend.

## Form Item Checkbox
You can bind multiple checkboxes to a single array. For each checked control it's corresponding value is added to the bound array.

::: tip

Form items can be inlined. You can do this either by setting `inline` to `true`.

:::

<d-example name="checkbox">
</d-example>

## Form Item Radio

<d-example name="radio">
</d-example>

## Form Item Text

<d-example name="form-item-text">
</d-example>

## Data Binding

::: tip

All controls support `v-model`.

:::

<d-example name="binding">
</d-example>

## Input States

<d-example name="states">
</d-example>

## Horizontal Inputs

<d-example name="inputs-horizontal">
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
