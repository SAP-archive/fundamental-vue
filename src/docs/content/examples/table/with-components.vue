<template>
  <fd-table
    selection-mode="multiple"
    :headers="['firstName', 'lastName', 'building']"
    :items="items"
  >
    <template #row="{ item }">
      <fd-table-row @click="onRowClick(item)">
        <template #firstName>
          <fd-table-cell>
            <fd-button @click.stop="onButtonClick">{{ item.firstName }}</fd-button>
          </fd-table-cell>
        </template>

        <template #lastName>
          <fd-table-cell>{{ item.lastName }}</fd-table-cell>
        </template>

        <template #building>
          <fd-table-cell>{{ item.building }}</fd-table-cell>
        </template>
      </fd-table-row>
    </template>
  </fd-table>
</template>

<script>
export default {
  methods: {
    onButtonClick() {
      console.log("click on button"); // eslint-disable-line no-console
    },
    onRowClick(item) {
      console.log("click on row representing item: %o", item); // eslint-disable-line no-console
    }
  },
  data: () => ({
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
