<title>Table</title>
<docs>
Use `FdTable` in order to display data best visualized by rows and columns.

The most important prop exposed by `FdTable` is called `items`. The items of a table must at least have an `id`-property which contains a `string`, uniquely indentifying the corresponding item. Each item may contain any additional custom properties.

### FdTable Atonomy

#### The Table Header: `FdTableHeader`
`FdTable` has an optional header which renders column names, sort indicators and custom content.

#### The Table Row Template: `FdTableRow`
Rows are rendered by `FdTable` on your behalf. This is why you don't specify each row individually. Instead you describe how to render a row (`FdTableRow`) given some context (using Vue's __slot-scope__-mechanism). The object passed to the template has the following shape:

```typescript
// The minimum viable table item only needs an id.
interface Item { id: string; }

// Object passed to the row template.
interface RowSlotProps<T = object> {
  // Your custom item
  item: T & Item;

  // True if the corresonding row is currently selected
  selected: boolean;

  // Call this if you want to change the selection
  // Of the current row. Typically bound to an
  // `@change`-event from `FdCheckbox`-instances.
  changeSelection(selected: boolean, event: Event): void;
}
```
</docs>

<tip>
`FdTable` is pretty fast. However it currently renders everything no matter whether an item is currently displayed or not. The `items`-array should be somewhere around `0` and `5.000`. Otherwise `FdTable` will crash your browser. We are working on removing that limitation. In the meantime you should work around that by using some kind of paging mechanism.
</tip>

<template>
  <FdTable :items="tableData">
    <FdTableHeader>
      <FdTableHeaderCell label="First Name" />
      <FdTableHeaderCell label="Last Name" />
      <FdTableHeaderCell label="Building" />
    </FdTableHeader>

    <FdTableRow slot="row" slot-scope="{item}">
      <FdTableCell>{{item.firstName}}</FdTableCell>
      <FdTableCell>{{item.lastName}}</FdTableCell>
      <FdTableCell>{{item.building}}</FdTableCell>
    </FdTableRow>

  </FdTable>
</template>

<script>
export default {
  data: () => ({
    tableData: [
      { id: "1", rating: 1, firstName: "Chris", lastName: "Kienle", building: "WFD02" },
      { id: "2", rating: 2, firstName: "Andi", lastName: "Kienle", building: "WFD03" },
      { id: "3", rating: 3, firstName: "Sven", lastName: "Bacia", building: "WFD02" },
      { id: "4", rating: 4, firstName: "Artur", lastName: "Raess", building: "WFD02" },
    ]
  })
};
</script>
