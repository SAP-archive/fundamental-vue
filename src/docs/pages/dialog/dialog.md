---
fdRelatedComponents:
  - fd-dialog
---

# Dialog

Each slot (*footer*, *actions*, *default*, *close*, *title*) has access to the dialog itself. This allows you to call any method or query any prop/data-value by using the slot's scope. A practical use case for this is shown in the example below. The dialog's body (*default* slot) contains a link that, when clicked, closes the dialog.

::: tip

There are multiple ways to show a dialog.

**Using `$fdDialog.open(dialogName)`**

You can use the `$fdDialog.open(dialogName)` to open dialogs from anywhere. Just give each dialog a name (using the `name`-prop) and pass this to the `open`-function.

**Manually showing the dialog**

Of course you can also manually show or close the dialog by simply calling the corresponding methods in it:

- `show(event?)`: shows the dialog.
- `close(event?)`: closes the dialog.

:::

## Default Dialog

<d-example name="default">
</d-example>

## Fullscreen Dialog
The dialog dimensions can be controlled through the width and height properties of the configuration object. These accept strings, so you may use whatever unit works best for your situation.
<d-example name="fullscreen-dialog">
</d-example>

## Nested Dialogs

You can nest dialogs just by calling `$fdDialog.open(…)` multiple times.

<d-example name="nested-dialogs">
</d-example>
