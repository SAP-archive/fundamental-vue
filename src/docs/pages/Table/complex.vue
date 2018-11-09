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
    <vf-form-set>
      <vf-form-item>
        <vf-form-label>First Name</vf-form-label>
        <vf-input v-model="newEntry.firstName" placeholder="Enter something nice"/>
      </vf-form-item>
      <vf-form-item>
        <vf-form-label>Last Name</vf-form-label>
        <vf-input v-model="newEntry.lastName" placeholder="Enter something nice"/>
      </vf-form-item>
      <vf-form-item>
        <vf-form-label>Rating</vf-form-label>
        <vf-combobox v-model="newEntry.rating">
          <vf-menu-item value="1" title="1">1</vf-menu-item>
          <vf-menu-item value="2" title="2">2</vf-menu-item>
          <vf-menu-item value="3" title="3">3</vf-menu-item>
          <vf-menu-item value="4" title="4">4</vf-menu-item>
          <vf-menu-item value="4" title="5">5</vf-menu-item>
        </vf-combobox>
      </vf-form-item>
    </vf-form-set>
    <vf-button @click="addCurrentEntry">Add Entry</vf-button>
  </div>
</template>

<script>
export default {
  methods: {
    addCurrentEntry() {
      const tableEntry = { ...this.newEntry, building: null, rating: this.newEntry.rating.value };
      this.tableData.push(tableEntry);
    },
  },
  data() {
    return {
      newEntry: {
        firstName: null,
        lastName: null,
        rating: '1',
      },
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