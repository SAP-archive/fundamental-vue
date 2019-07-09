<template>
  <div>
    <FdTable
      :headers="headers"
      :selectedIds.sync="selectedIds"
      selectionMode="multiple"
      :items="items"
    >
      <template slot="row" slot-scope="{ item, changeSelection, selected }">
        <FdTableRow>
          <FdTableCell>
            <FdRowSelectionIndicator
              :value="item.id"
              :selected="selected"
              @change="changeSelection"
            />
          </FdTableCell>
          <FdTableCell>{{ item.firstName }}</FdTableCell>
          <FdTableCell>{{ item.lastName }}</FdTableCell>
          <FdTableCell>{{ item.building }}</FdTableCell>
        </FdTableRow>
      </template>
    </FdTable>
    <div>
      <p>Selected Rows: {{ formattedSelectedIds }}</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    formattedSelectedIds() {
      return this.selectedIds.length === 0
        ? "none"
        : this.selectedIds.join(", ");
    }
  },
  data: () => ({
    headers: ["", "First Name", "Last Name", "Building"],
    selectedIds: [],
    items: [
      { id: "1", firstName: "Chris", lastName: "Kienle", building: "WFD02" },
      { id: "2", firstName: "Andi", lastName: "Kienle", building: "WFD03" },
      { id: "3", firstName: "Sven", lastName: "Bacia", building: "WFD02" },
      { id: "4", firstName: "Artur", lastName: "Raess", building: "WFD02" }
    ]
  })
};
</script>
