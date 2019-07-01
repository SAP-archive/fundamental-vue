<template>
  <div>
    <fd-field-set>
      <fd-legend>Selection Mode</fd-legend>
      <fd-select v-model="selectionMode">
        <option value="none">None</option>
        <option value="single">Single</option>
        <option value="multiple">Multiple</option>
      </fd-select>
    </fd-field-set>

    <fd-table
      :headers="['index', 'firstName', 'lastName', 'building']"
      :selectionMode="selectionMode"
      :items="items"
    >
      <template #row="{ canSelect, selectedIds, item, toggle, selected, setSelected }">
        <fd-table-row>
          <template #index>
            <fd-table-cell>
              <fd-checkbox :disabled="!canSelect" @update="setSelected" :model-value="selected" />
            </fd-table-cell>
          </template>

          <template #firstName>
            <fd-table-cell>{{ item.firstName }}</fd-table-cell>
          </template>

          <template #lastName>
            <fd-table-cell>{{ item.lastName }}</fd-table-cell>
          </template>

          <template #building>
            <fd-table-cell>{{ item.building }}</fd-table-cell>
          </template>
        </fd-table-row>
      </template>
    </fd-table>
  </div>
</template>

<script>
export default {
  data: () => ({
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
