<template>
  <FdTable :headers="headers" selectionMode="multiple" :items="items">
    <template slot="row" slot-scope="{ item }">
      <FdTableRow @click="onRowClick(item)">
        <FdTableCell>
          <fd-button @click.stop="onButtonClick">{{
            item.firstName
          }}</fd-button>
        </FdTableCell>
        <FdTableCell>{{ item.lastName }}</FdTableCell>
        <FdTableCell>{{ item.building }}</FdTableCell>
      </FdTableRow>
    </template>
  </FdTable>
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
    headers: ["First Name", "Last Name", "Building"],
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
