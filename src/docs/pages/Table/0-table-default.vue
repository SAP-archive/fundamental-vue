<title>Table</title>
<docs>
Use `fd-table` in order to display data best visualized by rows and columns.

<d-tip></d-tip>

<div class="fdd-tip">
  <div class="fdd-tip__title">IMPORTANT</div>
  <div class="fdd-tip__body">
    <p>In a previous release you didn't have to put <code>fd-table-row</code> in a <code>template</code>. Going forward you have to do so.</p>
  </div>
</div>

The most important prop exposed by `fd-table` is called `items`. The items of a table must all be some kind of `Object`. If `fd-table` encounters an item without an `id`-property, an `id` will be created. The `id` of an item is used to uniquely identify the corresponding item. Each item may contain any additional custom properties.

### fd-table Atonomy

#### The Table Header: `fd-tableHeader`
It is the responsibility of `fd-table` to render it's header. The header renders column names, sort indicators and custom content. You configure the header of an `fd-table` by using it's `headers`-prop. The `headers`-prop accepts an array which may contain strings or header configuration objects. A plain string inside the `headers`-array will be used as a label for the column header. The complete definition of the `headers`-prop looks like this:

```typescript
type Header = {
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
</docs>

<tip>
`fd-table` is pretty fast. However it currently renders everything no matter whether an item is currently displayed or not. The `items`-array should be somewhere around `0` and `5.000`. Otherwise `fd-table` will crash your browser. We are working on removing that limitation. In the meantime you should work around that by using some kind of paging mechanism.
</tip>

<template>
  <fd-table :headers="['firstName', 'lastName', 'building']" :items="items">
    <template #row="{ item }">
      <fd-table-row>
        <template #firstName>
          <fd-table-cell>
            {{ item.firstName }}
          </fd-table-cell>
        </template>
        <template #lastName>
          <fd-table-cell>
            {{ item.lastName }}
          </fd-table-cell>
        </template>
        <template #building>
          <fd-table-cell>
            {{ item.building }}
          </fd-table-cell>
        </template>
      </fd-table-row>
    </template>
  </fd-table>
</template>

<script>
export default {
  data: () => ({
    items: [
      { firstName: "Chris", lastName: "Kienle", building: "WFD02" },
      { firstName: "Andi", lastName: "Kienle", building: "WFD03" },
      { firstName: "Sven", lastName: "Bacia", building: "WFD02" },
      { firstName: "Artur", lastName: "Raess", building: "WFD02" }
    ]
  })
};
</script>
