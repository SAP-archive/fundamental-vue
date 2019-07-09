<template>
  <FdTable :headers="headers" :items="items">
    <template slot="row" slot-scope="{ item }">
      <FdTableRow>
        <FdTableCell>{{ item.firstName }}</FdTableCell>
        <FdTableCell>{{ item.lastName }}</FdTableCell>
        <FdTableCell>{{ item.building }}</FdTableCell>
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
      { rating: 4, firstName: "Artur", lastName: "Raess", building: "WFD02" }
    ]
  })
};
</script>
