---
fdRelatedComponents:
  - fd-menu-item
  - fd-menu-link
  - fd-menu-list
  - fd-menu-popover
---

# Menu Popover

`fd-menu-popover` is a relatively low-level component. It is used internally by *Fundamental Vue* for dropdowns and other more high-level components.

## Menu Popover with multiple Lists

<d-example name="default-menu-popover">
</d-example>

## Customized Menu Popover

`fd-menu-popover` is a simple wrapper around `fd-popover`. Any attributes you set on `fd-menu-popover` that are not directly handled by `fd-menu-popver` itself will be passed through to the wrapped `fd-popover`. This allows you to set all `fd-popover`-related props. The example below shows how to set the `placement`-prop. Since `fd-menu-popover` has no custom `placement`-prop it will simply pass it to the popover.

<d-example name="menu-popover-placement">
</d-example>
