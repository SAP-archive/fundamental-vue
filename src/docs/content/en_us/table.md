---
fdRelatedComponents:
  - fd-table
  - fd-table-cell
  - fd-table-row
---

# Table

Use `fd-table` in order to display data best visualized by rows and columns.

::: tip
In a previous release you didn't have to put `fd-table-row` in a `<template>`-tag. Going forward you have to do so.
:::

The most important prop exposed by `fd-table` is called `items`. The items of a table must all be some kind of `Object`. If `fd-table` encounters an item without an `id`-property, an `id` will be created. The `id` of an item is used to uniquely identify the corresponding item. Each item may contain any additional custom properties.

### fd-table Atonomy

#### The Table Header: `fd-table-header`
It is the responsibility of `fd-table` to render it's header. The header renders column names, sort indicators and custom content. You configure the header of an `fd-table` by using it's `headers`-prop. The `headers`-prop accepts an array which may contain strings or header configuration objects. A plain string inside the `headers`-array will be used as a label for the column header. The complete definition of the `headers`-prop looks like this:

```ts
type Header = {
  key: string;
  label: string;
  sortable?: boolean;
  sortBy?: string;
  alignment?: TextAlignment; // 'center' or 'default'
  renderHeader?: HeaderCellRenderFunction; // not yet implemented
} | string;
```

#### The Table Row Template: `fd-table-row`
Rows are rendered by `fd-table` on your behalf. This is why you don't specify each row individually. Instead you describe how to render a row (`fd-table-row`) given some context (using Vue's __slot-scope__-mechanism). The object passed to the template has the following shape:

```typescript
// Object passed to the row template.
interface RowSlotProps<T=object> {
  // Your custom item
  item: T & { id: string; };

  // True if the corresonding row is currently selected
  selected: boolean;

  // Call this if you want to change the selection
  setSelected(selected: boolean): void;

  selectedIds: string[];
  canSelect: boolean;
  toggle(): void;
}
```

::: tip
`fd-table` is pretty fast. However it currently renders everything no matter whether an item is currently displayed or not. The `items`-array should be somewhere around `0` and `5.000`. Otherwise `fd-table` will crash your browser. We are working on removing that limitation. In the meantime you should work around that by using some kind of paging mechanism.
:::

## Default Table

<d-example name="default">
</d-example>

## Default Cell Content
By default, the table will use the `header.key` value to render a cell's content. Which means, you don't need to write a template for every
cell in a row in case the cell will just display a property's value. For example, if your headers are `['firstName', 'lastName']` then by default
the 2 cells in each row will display the value of `item.firstName` and `item.lastName` respectively.

It could be that you want the column's name to be different than the property's name, which you can still achieve by providing the `label` and `key` properties for that column's header definition.

::: tip
If no `key` was provided and no cell template was written, then the value of `label` will be used as the property's name. For example, if headers=`['Some Label']` then the default cell content will be the value of `item['Some Label']`.
:::

In the example below, you can see the same rows as the one before without the need to write any templates.

::: tip
In case you need to provide a custom cell content then you must wrap it in `fd-table-row` like in the other examples.
:::

<d-example name="default-no-cells">
</d-example>

## Table without Border
You can use `borderless` on `fd-table` in order to disable the outer table border.

<d-example name="no-border">
</d-example>

## Table with Stripes

You can use `striped` on `fd-table` in order enable alternating colored rows.

<d-example name="stripes">
</d-example>

## Example: Adding Entries & Sorting

The example below is a little bit more complex. It highlights three aspects:

### Sortable Columns

A header can be made sortable by simply flagging it as such using `sortable` and setting `sortBy` to any sortable property of the objects in your `items`-array. By doing so `fd-table` displays sort indicators in the individual column headers. The currently applied sorting can be adjusted by simply clicking on the column headers.

### Custom Cell Content
Up until now `fd-tableCell` was only used to display plain text. However, `fd-tableCell` is simply rendering whatever you put in it. This can be anything from emojis (we all like emojis, right? 😀 🥰 ) to images and even custom components.

```html
// …
<fd-table-cell>{{item.rating}}</fd-table-cell>
// …
<fd-table-cell>{{item.firstName}} {{item.lastName}}</fd-table-cell>
// …
```

The two lines above show that in action. The first cell is simply rendering the rating which is just a string with emojis. The second line is combining the first name with the last name in order to render the full name. But as already said: You can put in whatever you want.

### Modifying the displayed Items
`fd-table` watches for any changes to it's items array. So you can simply add/remove and modify anything you want.

::: tip

If you modify the `items`-array, make sure that the modification is done in a way compatible with [Vue's reactivity system](https://vuejs.org/v2/guide/reactivity.html).

:::

<d-example name="complex">
</d-example>

## Table with fixed Column
Use `<fd-table-fixed-wrapper>` on and `fd-table-fixed` in order to make the first column stay fixed when scrolling.

::: tip

Using fixed columns is still experimental.

:::

<d-example name="fixed-col">
</d-example>

## Selection Modes

`fd-table` supports three different selection modes:

1. Selection mode `none` (default): Rows are not selectable in any way.
2. Selection mode `single`: There can only ever be a single selected row.
3. Selection mode `multiple`: Multiple rows can be selected.

Use the `selectionMode`-prop to set the selection mode of your choice.

<d-example name="selection-modes">
</d-example>

## Performance Test

::: tip

`fd-table` is not yet capable of displaying huge data sets. The current limit is around `1.000`-`5.000` rows (depending on the browser, number of elements currently present in the DOM, number of columns, displayed data, …).

**If you want to display a lot of data consider using** `fd-virtualized-list`.

:::

<d-example name="performance-test">
</d-example>

## Custom Row Content

You can put other components (for example a simple `fd-button`) in `fd-table-cell`.

::: tip

If a component you put inside an `fd-tableCell` subscribes to `@click`-events, you will most likely wand to use the `.stop`-modifier. Otherwise clicking a button will toggle the selection of the enclosing row.

:::

<d-example name="with-components">
</d-example>

## Dynamic Columns

<d-example name="dynamic-columns">
</d-example>

## Select by Clicking on Row

<d-example name="select-by-row-click">
</d-example>
