<title>Table with Stripes</title>
<docs>
You can use `striped` on `FdTable` in order enable alternating colored rows.
</docs>

<template>
  <FdTable striped :items="tableData">

    <FdTableHeader>
      <FdTableHeaderCell label="First Name" />
      <FdTableHeaderCell label="Last Name" />
      <FdTableHeaderCell label="Building" />
    </FdTableHeader>

    <FdTableRow slot="row" slot-scope="{item}">
      <FdTableCell>{{item.firstName}}</FdTableCell>
      <FdTableCell>{{item.lastName}}</FdTableCell>
      <FdTableCell>{{item.building}}</FdTableCell>
    </FdTableRow>

  </FdTable>
</template>

<script>
export default {
  data: () => ({
    tableData: [
      { id: "1", firstName: "Chris", lastName: "Kienle", building: "WFD02" },
      { id: "2", firstName: "Andi", lastName: "Kienle", building: "WFD03" },
      { id: "3", firstName: "Sven", lastName: "Bacia", building: "WFD02" },
      { id: "4", firstName: "Artur", lastName: "Raess", building: "WFD02" },
    ]
  })
};
</script>
