<template>
  <div>
    <vf-table selectionMode="single" :data="tableData">
      <vf-table-column prop="firstName" label="First Name"></vf-table-column>
      <vf-table-column prop="lastName" label="Last Name"></vf-table-column>
      <vf-table-column label="Initials">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.firstName }}_{{ scope.row.lastName }}</span>
        </template>
      </vf-table-column>
    </vf-table>
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