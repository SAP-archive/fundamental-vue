<template>
  <div>
    <fd-button @click="addColumn">add column</fd-button>
    <fd-table :headers="headers" :items="items">
      <template #row="{ item }">
        <fd-table-row>
          <template v-for="header in headers" v-slot:[header]>
            <fd-table-cell :key="item.id + header">
              {{ header }}
            </fd-table-cell>
          </template>
        </fd-table-row>
      </template>
    </fd-table>
    <fd-table :headers="headers" :items="items">
      <template #row="{ item }">
        <fd-table-row :key="'row__item-id--' + item.id">
          <template v-for="header in headers" v-slot:[header]>
            <fd-table-cell :key="'row__item-id--' + item.id + '__for-header--' + header">
              {{ header }}
            </fd-table-cell>
          </template>
        </fd-table-row>
      </template>
    </fd-table>
  </div>
</template>

<script>
export default {
  methods: {
    addColumn() {
      const colName = `h${this.headers.length + 1}`;
      this.headers = [colName, ...this.headers];
    }
  },
  data: () => ({
    headers: ["h3", "h2", "h1"],
    items: [
      {
        id: "1",
        rating: 1,
        firstName: "Chris",
        lastName: "Kienle",
        building: "WFD02"
      },
      {
        id: "2",
        rating: 2,
        firstName: "Andi",
        lastName: "Kienle",
        building: "WFD03"
      },
      {
        id: "3",
        rating: 3,
        firstName: "Sven",
        lastName: "Bacia",
        building: "WFD02"
      },
      {
        id: "4",
        rating: 4,
        firstName: "Artur",
        lastName: "Raess",
        building: "WFD02"
      }
    ]
  })
};
</script>
