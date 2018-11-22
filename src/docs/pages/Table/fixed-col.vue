<title>Table with fixed Column</title>

<template><div>
  <FdTable firstColumnFixed :data="tableData">
    <FdTableColumn sortable prop="rating" label="Rating" />
    <FdTableColumn prop="firstName" label="First Name" />
    <FdTableColumn prop="lastName" label="Last Name" />
    <FdTableColumn prop="lastName" label="Last Name 2" />
    <FdTableColumn prop="lastName" label="Last Name 3" />
    <FdTableColumn prop="lastName" label="Last Name 4" />
    <FdTableColumn prop="lastName" label="Last Name 5" />
    <FdTableColumn prop="lastName" label="Last Name 6" />
    <FdTableColumn prop="lastName" label="Last Name 7" />
  </FdTable>
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
