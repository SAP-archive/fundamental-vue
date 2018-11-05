<template>
  <div>
    <vf-table selectionMode="single" :data="tableData">
      <vf-table-column sortable prop="rating" label="Rating"></vf-table-column>
      <vf-table-column sortable prop="firstName" label="First Name"></vf-table-column>
      <vf-table-column sortable prop="lastName" label="Last Name"></vf-table-column>
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
        { rating: 1, firstName: 'Chris', lastName: 'Kienle', building: 'WFD02' },
        { rating: 2, firstName: 'Andi', lastName: 'Kienle', building: 'WFD03' },
        { rating: 3, firstName: 'Sven', lastName: 'Bacia', building: 'WFD02' },
        { rating: 4, firstName: 'Artur', lastName: 'Raess', building: 'WFD02' },
      ],
    };
  },
};
</script>