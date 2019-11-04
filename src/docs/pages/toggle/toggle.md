---
fdRelatedComponents:
  - fd-toggle
  - fd-form-item-toggle
  - fd-form-item
---

# Toggle/Switch

`fd-toggle` renders a switch that can be toggled on or off. Usually `fd-toggle` is used in combination with `fd-input-item` or `fd-input-item-toggle`.


::: tip
Use the `on`-prop to turn a toggle on (`:on=true`) or off (`:on=false`). Set `disabled`-flag to disable user interaction.
:::

## Default Toggles

<d-example name="default">
</d-example>

## Sizes

`fd-toggle` supports three different size classes:

1. `xs`: renderes an extra small toggle
2. `s`: renderes a small toggle
3. `l`: renderes a large toggle

If you omit the size class, the toggle will be rendered with a default size.

<d-example name="sizes">
</d-example>

## Using `v-model`

`fd-toggle` supports `v-model`. This allows you to bind `fd-toggle` to a `boolean` property of your component. The example below uses `v-model` to control the visibility of a popover.

<d-example name="v-model">
</d-example>
