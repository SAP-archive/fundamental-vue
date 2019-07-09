<template>
  <div>
    <FdFormSet>
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
    </FdFormSet>

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
