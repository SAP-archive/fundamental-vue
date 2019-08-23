---
fdRelatedComponents:
  - fd-popover
  - fd-menu-popover
---

# Popovers

A popover is made up of two parts:

- **Popover Control:** This part triggers the popover content to be displayed. You specify the popover control by providing content for the `control`-slot.
- **Popover Content:** The content is what will be displayed. The content is anchored to the control element. You specify the popover's content by providing a default slot.

Each slot (`control` and `default`) have access to the following *slot-props*:

- `visible` – *Boolean*: `true` when the popover's content is currently visible.
- `show` – *Function*: When called, the popover's content will be made visible.
- `hide` – *Function*: When called, the popover's content will be dismissed.
- `toggle` – *Function*: When called, the popover's visibility will be toggled.
- `placement` – *String*: The current popover placement.


## Default Popover
::: tip

You can use those slot-props to customize all sorts of things. For example, showing the popover's content when the user hovers over the *control* just means that you have to call `toggle` or `show` for `mouseenter` instead of `click`.

:::

<d-example name="default-popover">
</d-example>

## Scrolling and Styling

You can pass a styles object to the `body-styles` prop which will allow you to customize the popover's body. The styles object that is provided by default is the following:

```js
defaultBodyStyles: {
  maxHeight: "300px",
  overflowY: "auto"
}
```
You can override these properties and add your custom styling.

::: tip

Try to avoid manipulating css properties that might interfere with those controlled by other props (e.g: width). 

:::

In the example below you can use the slider to control the `max-height` property of the popover's body.

<d-example name="default-styles">
</d-example>

## Placement Options

Use the `placement`-prop to any of the following values: `bottom-start`, `bottom`, `bottom-end`, `left-start`, `left`, `left-end`, `right-start`, `right`, `right-end`, `top-start`, `top` and `top-end`.

<d-example name="placement-options">
</d-example>

## Custom Content

<d-example name="custom-content">
</d-example>

## Custom Controls

<d-example name="custom-controls">
</d-example>
