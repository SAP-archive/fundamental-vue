<template>
  <fd-table borderless :headers="['firstName', 'lastName', 'building']" :items="items">
    <template #row="{ item: { firstName, lastName, building } }">
      <fd-table-row>
        <template #firstName>
          <fd-table-cell>{{ firstName }}</fd-table-cell>
        </template>
        <template #lastName>
          <fd-table-cell>{{ lastName }}</fd-table-cell>
        </template>
        <template #building>
          <fd-table-cell>{{ building }}</fd-table-cell>
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
