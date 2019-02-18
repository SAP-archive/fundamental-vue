<title>Table with fixed Column</title>
<docs>
Use `firstColumnFixed` on `FdTable` in order to make the first column stay fixed when scrolling.
</docs>

<tip>
Using fixed columns is still experimental.
</tip>

<template>
  <div>
    <FdTable
      :headers="headers"
      :fixedWrapperStyle="{ width: '100%' }"
      firstColumnFixed
      :items="items"
    >
      <template slot="row" slot-scope="{ item }">
        <FdTableRow>
          <FdTableCell>{{ item.firstName }}</FdTableCell>
          <FdTableCell>{{ item.lastName }}</FdTableCell>
          <FdTableCell>{{ item.building }}</FdTableCell>
          <FdTableCell>{{ item.building }}1</FdTableCell>
          <FdTableCell>{{ item.building }}2</FdTableCell>
          <FdTableCell>{{ item.building }}3</FdTableCell>
          <FdTableCell>{{ item.building }}4</FdTableCell>
          <FdTableCell>{{ item.building }}5</FdTableCell>
          <FdTableCell>{{ item.building }}6</FdTableCell>
          <FdTableCell>{{ item.building }}7</FdTableCell>
          <FdTableCell>{{ item.building }}8</FdTableCell>
          <FdTableCell>{{ item.building }}9</FdTableCell>
        </FdTableRow>
      </template>
    </FdTable>
  </div>
</template>

<script>
export default {
  data: () => ({
    headers: [
      "First Name",
      "Last Name",
      "Building",
      "Building1",
      "Building2",
      "Building3",
      "Building4",
      "Building5",
      "Building6",
      "Building7",
      "Building8",
      "Building9"
    ],
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
