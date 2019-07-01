---
fdRelatedComponents:
  - fd-search-input
---

# Search Input

## Default Search Input

`fd-search-input` supports `v-model`: The *model value* is simply the currently entered predicate/query/value.

<d-example name="default">
</d-example>

## Search Input with Autocompletion

Use the `completions`-prop in order to pass an array of strings to `fd-search-input`. `fd-search-input` will then render a completion list that is automatically filtered.

::: tip

Use the `popoverClass`- and `inputGroupClass`-props in order to apply custom CSS classes. The class specified by `popoverClass` is attached to be popover body/content and the class specified by `inputGroupClass` is applied to the input group. The example below is using those two props in order to make the auto completion menu the same width as the input group.

:::

<d-example name="completions">
</d-example>

## Confirm on Tab

::: tip

Set `confirmOn` to `keyup.tab` in order to allow the user to select suggestions by using the tab key. By default, selected suggestions are confirmed when the user hits the **Enter**-key.

:::

<d-example name="confirm-on-tab">
</d-example>

