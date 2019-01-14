<title>Table with fixed Column</title>
<docs>
Use `firstColumnFixed` on `FdTable` in order to make the first column stay fixed when scrolling.
</docs>

<tip>
Using fixed columns is still experimental.
</tip>

<template>
  <FdTable :fixedWrapperStyle="{'width': '100%'}" firstColumnFixed :items="tableData">
    <FdTableHeader>
      <FdTableHeaderCell label="First Name" />
      <FdTableHeaderCell label="Last Name" />
      <FdTableHeaderCell label="Building" />
      <FdTableHeaderCell label="Building1" />
      <FdTableHeaderCell label="Building2" />
      <FdTableHeaderCell label="Building3" />
      <FdTableHeaderCell label="Building4" />
      <FdTableHeaderCell label="Building5" />
      <FdTableHeaderCell label="Building6" />
      <FdTableHeaderCell label="Building7" />
      <FdTableHeaderCell label="Building8" />
      <FdTableHeaderCell label="Building9" />
    </FdTableHeader>

    <FdTableRow slot="row" slot-scope="{item}">
      <FdTableCell>{{item.firstName}}</FdTableCell>
      <FdTableCell>{{item.lastName}}</FdTableCell>
      <FdTableCell>{{item.building}}</FdTableCell>
      <FdTableCell>{{item.building}}1</FdTableCell>
      <FdTableCell>{{item.building}}2</FdTableCell>
      <FdTableCell>{{item.building}}3</FdTableCell>
      <FdTableCell>{{item.building}}4</FdTableCell>
      <FdTableCell>{{item.building}}5</FdTableCell>
      <FdTableCell>{{item.building}}6</FdTableCell>
      <FdTableCell>{{item.building}}7</FdTableCell>
      <FdTableCell>{{item.building}}8</FdTableCell>
      <FdTableCell>{{item.building}}9</FdTableCell>
    </FdTableRow>

  </FdTable>
</template>

<script>
export default {
  data: () => ({
    tableData: [
      { id: "1", rating: 1, firstName: "Chris", lastName: "Kienle", building: "WFD02" },
      { id: "2", rating: 2, firstName: "Andi", lastName: "Kienle", building: "WFD03" },
      { id: "3", rating: 3, firstName: "Sven", lastName: "Bacia", building: "WFD02" },
      { id: "4", rating: 4, firstName: "Artur", lastName: "Raess", building: "WFD02" },
    ]
  })
};
</script>
