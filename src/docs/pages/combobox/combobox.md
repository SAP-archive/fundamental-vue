---
fdRelatedComponents:
  - fd-combobox
  - fd-menu-item
---

# Combobox

## Default Combobox

::: tip

`fd-combobox` supports `v-model` and thus you can easily create bi-directional bindings.
All `fd-menu-item`s need an associated `value` – otherwise `v-model` will not work.

:::
<d-example name="default">
</d-example>

## Combobox Sizes

<d-example name="sizes">
</d-example>

## Custom Menu

::: tip

Use the `menu`-slot in combination with `fd-combobox-menu` in order to provide a custom menu. This allows you (e.g.:) to easily apply custom attributes (`class`, `style`, …). The example below is using a custom menu in order to make it the same width as the combobox itself. A custom menu also allows you to have multiple lists.

:::

<d-example name="custom-menu">
</d-example>