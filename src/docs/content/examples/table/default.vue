<template>
  <fd-table :headers="['firstName', 'lastName', 'building']" :items="items">
    <template #row="{ item }">
      <fd-table-row>
        <template #firstName>
          <fd-table-cell>
            {{ item.firstName }}
          </fd-table-cell>
        </template>
        <template #lastName>
          <fd-table-cell>
            {{ item.lastName }}
          </fd-table-cell>
        </template>
        <template #building>
          <fd-table-cell>
            {{ item.building }}
          </fd-table-cell>
        </template>
      </fd-table-row>
    </template>
  </fd-table>
</template>

<script>
export default {
  data: () => ({
    items: [
      { firstName: "Chris", lastName: "Kienle", building: "WFD02" },
      { firstName: "Andi", lastName: "Kienle", building: "WFD03" },
      { firstName: "Sven", lastName: "Bacia", building: "WFD02" },
      { firstName: "Artur", lastName: "Raess", building: "WFD02" }
    ]
  })
};
</script>
