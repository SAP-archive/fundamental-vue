<template>
  <div>
    <FdTable selectionMode="single" :data="tableData">
      <FdTableColumn sortable prop="rating" label="Rating"></FdTableColumn>
      <FdTableColumn sortable prop="firstName" label="First Name"></FdTableColumn>
      <FdTableColumn sortable prop="lastName" label="Last Name"></FdTableColumn>
      <FdTableColumn label="Initials">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.firstName }}_{{ scope.row.lastName }}</span>
        </template>
      </FdTableColumn>
    </FdTable>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        { rating: 1, firstName: 'Chris', lastName: 'Kienle', building: 'WFD02' },
        { rating: 2, firstName: 'Andi', lastName: 'Kienle', building: 'WFD03' },
        { rating: 3, firstName: 'Sven', lastName: 'Bacia', building: 'WFD02' },
        { rating: 4, firstName: 'Artur', lastName: 'Raess', building: 'WFD02' },
      ],
    };
  },
};
</script>