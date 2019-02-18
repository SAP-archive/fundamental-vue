<title>Table with Stripes</title>
<docs>
You can use `striped` on `FdTable` in order enable alternating colored rows.
</docs>

<template>
  <FdTable striped :headers="headers" :items="items">
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
      { id: "1", firstName: "Chris", lastName: "Kienle", building: "WFD02" },
      { id: "2", firstName: "Andi", lastName: "Kienle", building: "WFD03" },
      { id: "3", firstName: "Sven", lastName: "Bacia", building: "WFD02" },
      { id: "4", firstName: "Artur", lastName: "Raess", building: "WFD02" }
    ]
  })
};
</script>
