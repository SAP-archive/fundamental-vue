---
fdRelatedComponents:
  - fd-action-bar
  - fd-action-bar-title
  - fd-action-bar-actions
  - fd-action-bar-back
  - fd-action-bar-description
  - fd-action-bar-header
---

# Action Bar

## Action Bar with Everything
::: tip
If you are looking for something less *verbose* look at the other examples below.
:::
<d-example name="everything">
</d-example>

## Using the `back-button`-slot

`fd-action-bar` renders it's `back`-slot which expects you to use `fd-action-bar-back` with a custom `fd-button` in it's `default`-slot. This is used by the example above. If you don't need to customize the element which contains the back-button then you can simply use the `back-button`-slot and render your back-button directly.

<d-example name="back-button-slot">
</d-example>

## Using the `header-title`-slot
If you only want to customize the title then you can simply use the `header-title`-slot.

<d-example name="header-title-slot">
</d-example>
