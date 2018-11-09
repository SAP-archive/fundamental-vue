<template><div>
  <vf-table firstColumnFixed :data="tableData">
    <vf-table-column sortable prop="rating" label="Rating" />
    <vf-table-column prop="firstName" label="First Name" />
    <vf-table-column prop="lastName" label="Last Name" />
    <vf-table-column prop="lastName" label="Last Name 2" />
    <vf-table-column prop="lastName" label="Last Name 3" />
    <vf-table-column prop="lastName" label="Last Name 4" />
    <vf-table-column prop="lastName" label="Last Name 5" />
    <vf-table-column prop="lastName" label="Last Name 6" />
    <vf-table-column prop="lastName" label="Last Name 7" />
  </vf-table>
</div></template>

<script>
export default {
  data() {
    return {
      tableData: [
        { rating: 1, firstName: 'Chris', lastName: 'Kienle' },
        { rating: 2, firstName: 'Andi', lastName: 'Kienle' },
        { rating: 3, firstName: 'Sven', lastName: 'Bacia' },
        { rating: 4, firstName: 'Artur', lastName: 'Raess' },
      ],
    };
  },
};
</script>
