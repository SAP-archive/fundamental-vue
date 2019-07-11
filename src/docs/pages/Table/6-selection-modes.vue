<title>Selection Modes</title>
<docs>
`FdTable` supports three different selection modes:

1. Selection mode `none` (default): Rows are not selectable in any way.
2. Selection mode `single`: There can only ever be a single selected row.
3. Selection mode `multiple`: Multiple rows can be selected.

Use the `selectionMode`-prop to set the selection mode of your choice.
</docs>

<template>
  <div>
    <fd-field-set>
      <FdFieldSet>
        <FdLegend>Selection Mode</FdLegend>
        <FdFormGroup inline>
          <FdFormItem label="None">
            <FdRadio value="none" v-model="selectionMode" />
          </FdFormItem>
          <FdFormItem label="Single">
            <FdRadio value="single" v-model="selectionMode" />
          </FdFormItem>
          <FdFormItem label="Multiple">
            <FdRadio value="multiple" v-model="selectionMode" />
          </FdFormItem>
        </FdFormGroup>
      </FdFieldSet>
    </fd-field-set>

    <FdTable :headers="headers" :selectionMode="selectionMode" :items="items">
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
  </div>
</template>

<script>
export default {
  data: () => ({
    headers: ["", "First Name", "Last Name", "Building"],
    selectionMode: "single",
    items: [
      { id: "1", firstName: "Chris", lastName: "Kienle", building: "WFD02" },
      { id: "2", firstName: "Andi", lastName: "Kienle", building: "WFD03" },
      { id: "3", firstName: "Sven", lastName: "Bacia", building: "WFD02" },
      { id: "4", firstName: "Artur", lastName: "Raess", building: "WFD02" }
    ]
  })
};
</script>
