<title>Custom Header</title>
<docs>
Having custom table header cells is just as easy as having custom table cells: Anything you put inside an `FdTableHeaderCell` will be rendered as is.
</docs>

<template>
  <FdTable :items="items">

    <FdTableHeader>
      <FdTableHeaderCell v-bg:accent-3 v-font-weight:bold class="fd-has-color-text-5">
        First Name
      </FdTableHeaderCell>

      <FdTableHeaderCell v-bg:accent-4 v-font-weight:bold class="fd-has-color-text-5">
        Last Name
      </FdTableHeaderCell>

      <FdTableHeaderCell v-bg:accent-5 v-font-weight:bold class="fd-has-color-text-5">
        🏠 🏠 🏠
      </FdTableHeaderCell>
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
    items: [
      { id: "1", firstName: "Chris", lastName: "Kienle", building: "WFD02" },
      { id: "2", firstName: "Andi", lastName: "Kienle", building: "WFD03" },
      { id: "3", firstName: "Sven", lastName: "Bacia", building: "WFD02" },
      { id: "4", firstName: "Artur", lastName: "Raess", building: "WFD02" },
    ]
  })
};
</script>
