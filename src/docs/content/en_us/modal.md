---
fdRelatedComponents:
  - fd-modal
---

# Modal

Each slot (*footer*, *actions*, *default*, *close*, *title*) has access to the modal itself. This allows you to call any method or query any prop/data-value by using the slot's scope. A practical use case for this is shown in the example below. The modal's body (*default* slot) contains a link that, when clicked, closes the modal.

::: tip

There are multiple ways to show a modal.

**Using `$fdModal.open(modalName)`**

You can use the `$fdModal.open(modalName)` to open modals from anywhere. Just give each modal a name (using the `name`-prop) and pass this to the `open`-function.

**Manually showing the modal**

Of course you can also manually show or close the modal by simply calling the corresponding methods in it:

- `show(event?)`: shows the modal.
- `close(event?)`: closes the modal.

:::

## Default Modal

<d-example name="default-modal">
</d-example>

## Fullscreen Modal
The modal dimensions can be controlled through the width and height properties of the configuration object. These accept strings, so you may use whatever unit works best for your situation.
<d-example name="fullscreen-modal">
</d-example>

## Nested Modals

You can nest modals just by calling `$fdModal.open(…)` multiple times.

<d-example name="nested-modals">
</d-example>
