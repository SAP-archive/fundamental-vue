<template>
  <div>
    <FdTable :headers="headers" :items="items">
      <template slot="row" slot-scope="{ item }">
        <FdTableRow>
          <FdTableCell>{{ item.rating }}</FdTableCell>
          <FdTableCell>{{ item.firstName }}</FdTableCell>
          <FdTableCell>{{ item.lastName }}</FdTableCell>
          <FdTableCell>{{ item.firstName }} {{ item.lastName }}</FdTableCell>
        </FdTableRow>
      </template>
    </FdTable>

    <h2>Creating an Entry</h2>

    <FdFormSet>
      <FdFormItem label="First Name">
        <FdInput
          v-model="newEntry.firstName"
          placeholder="Enter something nice"
        />
      </FdFormItem>
      <FdFormItem label="Last Name">
        <FdInput
          v-model="newEntry.lastName"
          placeholder="Enter something nice"
        />
      </FdFormItem>
      <FdFormItem label="Rating">
        <FdCombobox v-model="newEntry.rating">
          <FdMenuItem value="️️️⭐️">
            ⭐️
          </FdMenuItem>
          <FdMenuItem value="⭐️⭐️">
            ⭐️⭐️
          </FdMenuItem>
          <FdMenuItem value="⭐️⭐️⭐️">
            ⭐️⭐️⭐️
          </FdMenuItem>
          <FdMenuItem value="⭐️⭐️⭐️⭐️">
            ⭐️⭐️⭐️⭐️
          </FdMenuItem>
          <FdMenuItem value="⭐️⭐️⭐️⭐️⭐️">
            ⭐️⭐️⭐️⭐️⭐️
          </FdMenuItem>
        </FdCombobox>
      </FdFormItem>
    </FdFormSet>
    <fd-button @click="addCurrentEntry">Add Entry</fd-button>
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
        { label: "Rating", sortable: true, sortBy: "rating" },
        { label: "First Name", sortable: true, sortBy: "firstName" },
        { label: "Last Name", sortable: true, sortBy: "lastName" },
        { label: "Full Name", sortable: true, sortBy: "firstName" }
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
