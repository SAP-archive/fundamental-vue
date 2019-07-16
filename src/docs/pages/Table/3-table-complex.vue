<title>Example: Adding Entries & Sorting</title>

<docs>
The example below is a little bit more complex. It highlights three aspects:

### Sortable Columns

A header can be made sortable by simply flagging it as such using `sortable` and setting `sortBy` to any sortable property of the objects in your `items`-array. By doing so `FdTable` displays sort indicators in the individual column headers. The currently applied sorting can be adjusted by simply clicking on the column headers.

### Custom Cell Content
Up until now `fd-table-cell` was only used to display plain text. However, `fd-table-cell` is simply rendering whatever you put in it. This can be anything from emojis (we all like emojis, right? 😀 🥰 ) to images and even custom components.

```xml
<!-- item.rating: ⭐️⭐️⭐️⭐️⭐️ -->
<fd-table-cell>{{ item.rating }}</fd-table-cell>

<!-- display a full name -->
<fd-table-cell>
  {{item.firstName}} {{item.lastName}}
</fd-table-cell>


<!-- display a button -->
<fd-table-cell>
  <fd-button>Hello World</fd-button>
</fd-table-cell>
```

The two lines above show that in action. The first cell is simply rendering the rating which is just a string with emojis. The second line is combining the first name with the last name in order to render the full name. But as already said: You can put in whatever you want.

### Modifying the displayed Items
`fd-table` watches for any changes to it's items array. So you can simply add/remove and modify anything you want.
</docs>

<tip>
If you modify the `items`-array, make sure that the modification is done in a way compatible with [Vue's reactivity system](https://vuejs.org/v2/guide/reactivity.html).
</tip>

<template>
  <div>
    <fd-table :headers="headers" :items="items">
      <template #row="{ item }">
        <fd-table-row>
          <template #rating>
            <fd-table-cell>
              {{ item.rating }}
            </fd-table-cell>
          </template>
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
          <template #fullName>
            <fd-table-cell>{{ item.firstName }} {{ item.lastName }}</fd-table-cell>
          </template>
        </fd-table-row>
      </template>
    </fd-table>

    <h2>Creating an Entry</h2>

    <fd-field-set>
      <fd-form-item label="First Name">
        <FdInput v-model="newEntry.firstName" placeholder="Enter something nice" />
      </fd-form-item>
      <fd-form-item label="Last Name">
        <FdInput v-model="newEntry.lastName" placeholder="Enter something nice" />
      </fd-form-item>
      <fd-form-item label="Rating">
        <fd-combobox v-model="newEntry.rating">
          <fd-menu-item value="️️️⭐️">⭐️</fd-menu-item>
          <fd-menu-item value="⭐️⭐️">⭐️⭐️</fd-menu-item>
          <fd-menu-item value="⭐️⭐️⭐️">⭐️⭐️⭐️</fd-menu-item>
          <fd-menu-item value="⭐️⭐️⭐️⭐️">⭐️⭐️⭐️⭐️</fd-menu-item>
          <fd-menu-item value="⭐️⭐️⭐️⭐️⭐️">⭐️⭐️⭐️⭐️⭐️</fd-menu-item>
        </fd-combobox>
      </fd-form-item>
    </fd-field-set>
    <fd-button @click="addCurrentEntry" icon="add">Add Entry</fd-button>
  </div>
</template>

<script>
export default {
  methods: {
    addCurrentEntry() {
      const entry = {
        ...this.newEntry
      };
      this.items = [...this.items, entry];
      this.newEntry = {
        firstName: null,
        lastName: null,
        rating: "⭐️⭐️⭐️",
        id: String(this.items.length + 1)
      };
    }
  },
  data() {
    return {
      headers: [
        { id: "rating", label: "Rating", sortable: true, sortBy: "rating" },
        {
          id: "firstName",
          label: "First Name",
          sortable: true,
          sortBy: "firstName"
        },
        {
          id: "lastName",
          label: "Last Name",
          sortable: true,
          sortBy: "lastName"
        },
        {
          id: "fullName",
          label: "Full Name",
          sortable: true,
          sortBy: "firstName"
        }
      ],
      newEntry: {
        firstName: null,
        lastName: null,
        rating: "⭐️⭐️⭐️",
        id: "5"
      },
      items: [
        {
          id: "1",
          rating: "⭐️⭐️⭐️",
          firstName: "Chris",
          lastName: "Kienle"
        },
        {
          id: "2",
          rating: "⭐️⭐️⭐️⭐️",
          firstName: "Andi",
          lastName: "Kienle"
        },
        {
          id: "3",
          rating: "⭐️⭐️⭐️⭐️⭐️",
          firstName: "Sven",
          lastName: "Bacia"
        },
        {
          id: "4",
          rating: "⭐️⭐️⭐️⭐️⭐️",
          firstName: "Artur",
          lastName: "Raess"
        }
      ]
    };
  }
};
</script>
