<template>
  <div>
    <FdTable selectionMode="single" :data="tableData">
      <FdTableColumn prop="firstName" label="First Name"></FdTableColumn>
      <FdTableColumn prop="lastName" label="Last Name"></FdTableColumn>
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
        { firstName: 'Chris', lastName: 'Kienle', building: 'WFD02' },
        { firstName: 'Andi', lastName: 'Kienle', building: 'WFD03' },
        { firstName: 'Sven', lastName: 'Bacia', building: 'WFD02' },
        { firstName: 'Artur', lastName: 'Raess', building: 'WFD02' },
      ],
    };
  },
};
</script>
<style scoped>
</style>