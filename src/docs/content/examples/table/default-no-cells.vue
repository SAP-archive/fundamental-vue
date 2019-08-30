<template>
  <fd-table
    :headers="[{ label: 'Custom Cell Name', key: 'firstName' }, 'lastName', 'building']"
    :items="items"
  >
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
