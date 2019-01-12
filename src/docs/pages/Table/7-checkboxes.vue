<title>Table with Checkboxes</title>
<docs>
In some situations you may want a checkbox in addition to the regular row selection indicating the currently selected rows. As it turns out you could do that completely on your own by simply using `FdCheckbox` and configuring it correctly. However `FdTable` comes with a special component called `FdRowSelectionIndicator` that should be preferred over plain `FdCheckbox`es whenever possible. The reason is that we want to hide the fact that the selection is indicated by using a checkbox in order to change that in future releases.
</docs>

<tip>
You can use the `sync`-modifier on the `selectedIds`-prop in order to be informed when the selection changes.
</tip>

<template>
<div>
  <FdTable :selectedIds.sync="selectedIds" selectionMode="multiple" :items="items">

    <FdTableHeader>
      <FdTableHeaderCell label="" />
      <FdTableHeaderCell label="First Name" />
      <FdTableHeaderCell label="Last Name" />
      <FdTableHeaderCell label="Building" />
    </FdTableHeader>

    <FdTableRow slot="row" slot-scope="{item, changeSelection, selected}">
      <FdTableCell>
        <FdRowSelectionIndicator
          :value="item.id"
          :selected="selected"
          @change="changeSelection"
        />
      </FdTableCell>
      <FdTableCell>{{item.firstName}}</FdTableCell>
      <FdTableCell>{{item.lastName}}</FdTableCell>
      <FdTableCell>{{item.building}}</FdTableCell>
    </FdTableRow>

  </FdTable>
  <div>
    <p>Selected Rows: {{formattedSelectedIds}}</p>
  </div>
</div>
</template>

<script>
export default {
  computed: {
    formattedSelectedIds() {
      return this.selectedIds.length === 0 ? 'none' : this.selectedIds.join(', ');
    }
  },
  data: () => ({
    selectedIds: [],
    items: [
      { id: "1", firstName: "Chris", lastName: "Kienle", building: "WFD02" },
      { id: "2", firstName: "Andi", lastName: "Kienle", building: "WFD03" },
      { id: "3", firstName: "Sven", lastName: "Bacia", building: "WFD02" },
      { id: "4", firstName: "Artur", lastName: "Raess", building: "WFD02" },
    ]
  })
};
</script>
