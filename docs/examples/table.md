---
fdRelatedComponents:
  - fd-table
  - fd-table-cell
  - fd-table-row
---

# Table

Use `FdTable` in order to display data best visualized by rows and columns.

<tip warn>

In a previous release you didn't have to put `FdTableRow` in a `<template>`-tag. Going forward you have to do so.

</tip>

The most important prop exposed by `FdTable` is called `items`. The items of a table must all be some kind of `Object`. If `FdTable` encounters an item without an `id`-property, an `id` will be created. The `id` of an item is used to uniquely identify the corresponding item. Each item may contain any additional custom properties.

### FdTable Atonomy

#### The Table Header: `FdTableHeader`
It is the responsibility of `FdTable` to render it's header. The header renders column names, sort indicators and custom content. You configure the header of an `FdTable` by using it's `headers`-prop. The `headers`-prop accepts an array which may contain strings or header configuration objects. A plain string inside the `headers`-array will be used as a label for the column header. The complete definition of the `headers`-prop looks like this:

```typescript
type Header = {
  label: string;
  sortable?: boolean;
  sortBy?: string;
  alignment?: TextAlignment; // 'center' or 'default'
  renderHeader?: HeaderCellRenderFunction; // not yet implemented
} | string;
```

#### The Table Row Template: `FdTableRow`
Rows are rendered by `FdTable` on your behalf. This is why you don't specify each row individually. Instead you describe how to render a row (`FdTableRow`) given some context (using Vue's __slot-scope__-mechanism). The object passed to the template has the following shape:

```typescript
// Object passed to the row template.
interface RowSlotProps<T=object> {
  // Your custom item
  item: T & { id: string; };

  // True if the corresonding row is currently selected
  selected: boolean;

  // Call this if you want to change the selection
  // Of the current row. Typically bound to an
  // `@change`-event from `FdCheckbox`-instances.
  changeSelection(selected: boolean, event: Event): void;
}
```

<tip>

`FdTable` is pretty fast. However it currently renders everything no matter whether an item is currently displayed or not. The `items`-array should be somewhere around `0` and `5.000`. Otherwise `FdTable` will crash your browser. We are working on removing that limitation. In the meantime you should work around that by using some kind of paging mechanism.

</tip>

## Default Table

::: example default
:::

## Table without Border
You can use `borderless` on `FdTable` in order to disable the outer table border.

::: example no-border
:::

## Table with Stripes

You can use `striped` on `FdTable` in order enable alternating colored rows.

::: example stripes
:::

## Example: Adding Entries & Sorting


The example below is a little bit more complex. It highlights three aspects:

### Sortable Columns

A header can be made sortable by simply flagging it as such using `sortable` and setting `sortBy` to any sortable property of the objects in your `items`-array. By doing so `FdTable` displays sort indicators in the individual column headers. The currently applied sorting can be adjusted by simply clicking on the column headers.

### Custom Cell Content
Up until now `FdTableCell` was only used to display plain text. However, `FdTableCell` is simply rendering whatever you put in it. This can be anything from emojis (we all like emojis, right? 😀 🥰 ) to images and even custom components.

```html
// …
<FdTableCell>{{item.rating}}</FdTableCell>
// …
<FdTableCell>{{item.firstName}} {{item.lastName}}</FdTableCell>
// …
```

The two lines above show that in action. The first cell is simply rendering the rating which is just a string with emojis. The second line is combining the first name with the last name in order to render the full name. But as already said: You can put in whatever you want.

### Modifying the displayed Items
`FdTable` watches for any changes to it's items array. So you can simply add/remove and modify anything you want.

<tip>

If you modify the `items`-array, make sure that the modification is done in a way compatible with [Vue's reactivity system](https://vuejs.org/v2/guide/reactivity.html).

</tip>

::: example complex
:::

## Table with fixed Column
Use `firstColumnFixed` on `FdTable` in order to make the first column stay fixed when scrolling.

<tip>

Using fixed columns is still experimental.

</tip>

::: example fixed-col
:::

## Selection Modes

`FdTable` supports three different selection modes:

1. Selection mode `none` (default): Rows are not selectable in any way.
2. Selection mode `single`: There can only ever be a single selected row.
3. Selection mode `multiple`: Multiple rows can be selected.

Use the `selectionMode`-prop to set the selection mode of your choice.

::: example selection-modes
:::

## Table with Checkboxes

In some situations you may want a checkbox in addition to the regular row selection indicating the currently selected rows. As it turns out you could do that completely on your own by simply using `FdCheckbox` and configuring it correctly. However `FdTable` comes with a special component called `FdRowSelectionIndicator` that should be preferred over plain `FdCheckbox`es whenever possible. The reason is that we want to hide the fact that the selection is indicated by using a checkbox in order to change that in future releases.

<tip>

You can use the `sync`-modifier on the `selectedIds`-prop in order to be informed when the selection changes.

</tip>

::: example checkboxes
:::

## Performance Test

<tip>

`FdTable` is not yet capable of displaying huge data sets. The current limit is around `1.000`-`5.000` rows (depending on the browser, number of elements currently present in the DOM, number of columns, displayed data, …).

</tip>

::: example performance-test
:::

## Custom Row Content

You can put other components (for example a simple `fd-button`) in `FdTableCell`.

<tip>

If a component you put inside an `FdTableCell` subscribes to `@click`-events, you will most likely wand to use the `.stop`-modifier. Otherwise clicking a button will toggle the selection of the enclosing row.

</tip>

::: example table-with-components
:::
