---
fdRelatedComponents:
  - fd-toggle
---

# Toggle/Switch

`FdFormItem` has an optional label. Use the `on`-prop to turn a toggle on (`:on=true`) or off (`:on=false`). Set `disabled`-flag to disable user interaction.

## Default Toggles

::: example default
:::

## Sizes

`FdToggle` supports three different size classes:

1. `xs`: renderes an extra small toggle
2. `s`: renderes a small toggle
3. `l`: renderes a large toggle

If you omit the size class, the toggle will be rendered with a default size.

::: example sizes
:::

## Using `v-model`

`FdToggle` supports `v-model`. This allows you to bind an `FdToggle` to a `boolean` property of your component. The example below uses `v-model` to control the visbibility of a popover.

::: example v-model
:::
