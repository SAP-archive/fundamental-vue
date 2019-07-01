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
        <fd-input v-model="newEntry.firstName" placeholder="Enter something nice" />
      </fd-form-item>
      <fd-form-item label="Last Name">
        <fd-input v-model="newEntry.lastName" placeholder="Enter something nice" />
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
