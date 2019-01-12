<title>Example: Adding Entries & Sorting</title>

<docs>
The example below is a little bit more complex. It highlights three aspects:

### Sortable Columns

`FdTableHeaderCell` can be made sortable by simply flagging it as such using `sortable` and setting `sortBy` to any sortable property of the objects in your `items`-array. By doing so `FdTable` displays sort indicators in the individual column headers. The currently applied sorting can be adjusted by simply clicking on the column headers.


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
</docs>

<tip>
If you modify the `items`-array, make sure that the modification is done in a way compatible with [Vue's reactivity system](https://vuejs.org/v2/guide/reactivity.html).
</tip>

<template>
  <div>
    <FdTable :items="tableData">

      <FdTableHeader>
        <FdTableHeaderCell sortable sortBy="rating" label="Rating" />
        <FdTableHeaderCell sortable sortBy="firstName" label="First Name" />
        <FdTableHeaderCell sortable sortBy="lastName" label="Last Name" />
        <FdTableHeaderCell sortable sortBy="firstName" label="Full Name" />
      </FdTableHeader>

      <FdTableRow slot="row" slot-scope="{item}">
        <FdTableCell>{{item.rating}}</FdTableCell>
        <FdTableCell>{{item.firstName}}</FdTableCell>
        <FdTableCell>{{item.lastName}}</FdTableCell>
        <FdTableCell>{{item.firstName}} {{item.lastName}}</FdTableCell>
      </FdTableRow>

    </FdTable>

    <h2>Creating an Entry</h2>

    <FdFormSet>
      <FdFormItem label="First Name">
        <FdInput v-model="newEntry.firstName" placeholder="Enter something nice"/>
      </FdFormItem>
      <FdFormItem label="Last Name">
        <FdInput v-model="newEntry.lastName" placeholder="Enter something nice"/>
      </FdFormItem>
      <FdFormItem label="Rating">
        <FdCombobox v-model="newEntry.rating">
          <FdMenuItem value="️️️⭐️">⭐️</FdMenuItem>
          <FdMenuItem value="⭐️⭐️">⭐️⭐️</FdMenuItem>
          <FdMenuItem value="⭐️⭐️⭐️">⭐️⭐️⭐️</FdMenuItem>
          <FdMenuItem value="⭐️⭐️⭐️⭐️">⭐️⭐️⭐️⭐️</FdMenuItem>
          <FdMenuItem value="⭐️⭐️⭐️⭐️⭐️">⭐️⭐️⭐️⭐️⭐️</FdMenuItem>
        </FdCombobox>
      </FdFormItem>
    </FdFormSet>
    <FdButton @click="addCurrentEntry">Add Entry</FdButton>
  </div>
</template>

<script>
export default {
  methods: {
    addCurrentEntry() {
      const entry = {
        ...this.newEntry,
      };
      this.tableData = [...this.tableData, entry];
      this.newEntry = {
        firstName: null,
        lastName: null,
        rating: "⭐️⭐️⭐️",
        id: String(this.tableData.length + 1),
      };
    },
  },
  data() {
    return {
      newEntry: {
        firstName: null,
        lastName: null,
        rating: "⭐️⭐️⭐️",
        id: '5',
      },
      tableData: [
        { id: "1", rating: '⭐️⭐️⭐️', firstName: "Chris", lastName: "Kienle" },
        { id: "2", rating: '⭐️⭐️⭐️⭐️', firstName: "Andi", lastName: "Kienle" },
        { id: "3", rating: '⭐️⭐️⭐️⭐️⭐️', firstName: "Sven", lastName: "Bacia" },
        { id: "4", rating: '⭐️⭐️⭐️⭐️⭐️', firstName: "Artur", lastName: "Raess" },
      ],
    };
  },
};
</script>
