<title>Table</title>
<docs>
Use `FdTable` in order to display data best visualized by rows and columns.

<div class="tip" style="border-left: 0.5rem solid #ffa94a;">
  <div class="tip-title">IMPORTANT</div>
  <div class="tip-body">
    <p>In a previous release you didn't have to put <code>FdTableRow</code> in a <code>template</code>. Going forward you have to do so.</p>
  </div>
</div>

The most important prop exposed by `FdTable` is called `items`. The items of a table must all be some kind of `Object`. If `FdTable` encounters an item without an `id`-property, an `id` will be created. The `id` of an item is used to uniquely identify the corresponding item. Each item may contain any additional custom properties.

### FdTable Atonomy

#### The Table Header: `FdTableHeader`
It is the responsibility of `FdTable` to render it's header. The header renders column names, sort indicators and custom content. You configure the header of an `FdTable` by using it's `headers`-prop. The `headers`-prop accepts an array which may contain strings or header configuration objects. A plain string inside the `headers`-array will be used as a label for the column header. The complete definition of the `headers`-prop looks like this:

```javascript
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
interface RowSlotProps<T = object> {
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
</docs>

<tip>
`FdTable` is pretty fast. However it currently renders everything no matter whether an item is currently displayed or not. The `items`-array should be somewhere around `0` and `5.000`. Otherwise `FdTable` will crash your browser. We are working on removing that limitation. In the meantime you should work around that by using some kind of paging mechanism.
</tip>

<template>
  <FdTable :headers="headers" :items="items">
    <template slot="row" slot-scope="{item}">
      <FdTableRow>
        <FdTableCell>{{item.firstName}}</FdTableCell>
        <FdTableCell>{{item.lastName}}</FdTableCell>
        <FdTableCell>{{item.building}}</FdTableCell>
      </FdTableRow>
    </template>
  </FdTable>
</template>

<script>
export default {
  data: () => ({
    headers: ["First Name", "Last Name", "Building"],
    items: [
      { rating: 1, firstName: "Chris", lastName: "Kienle", building: "WFD02" },
      { rating: 2, firstName: "Andi", lastName: "Kienle", building: "WFD03" },
      { rating: 3, firstName: "Sven", lastName: "Bacia", building: "WFD02" },
      { rating: 4, firstName: "Artur", lastName: "Raess", building: "WFD02" },
    ]
  })
};
</script>
