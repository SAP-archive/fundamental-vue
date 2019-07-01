---
fdRelatedComponents:
  - fd-toggle
---

# Toggle/Switch

`fd-form-item` has an optional label. Use the `on`-prop to turn a toggle on (`:on=true`) or off (`:on=false`). Set `disabled`-flag to disable user interaction.

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

`fd-toggle` supports `v-model`. This allows you to bind an `fd-toggle` to a `boolean` property of your component. The example below uses `v-model` to control the visbibility of a popover.

<d-example name="v-model">
</d-example>
