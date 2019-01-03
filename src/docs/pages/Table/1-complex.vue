<title>Complex and Dynamic Table</title>

<template>
  <div>
    <FdTable selectionMode="single" :data="tableData">
      <FdTableColumn sortable prop="rating" label="Rating" />
      <FdTableColumn sortable prop="firstName" label="First Name" />
      <FdTableColumn sortable prop="lastName" label="Last Name" />
      <FdTableColumn label="Initials">
        <template slot-scope="scope">
          <span style="margin-left: 10px">
            {{ scope.row.firstName }}_{{ scope.row.lastName }}
          </span>
        </template>
      </FdTableColumn>
    </FdTable>
    <FdFormSet>
      <FdFormItem label="First Name">
        <FdInput v-model="newEntry.firstName" placeholder="Enter something nice"/>
      </FdFormItem>
      <FdFormItem label="Last Name">
        <FdInput v-model="newEntry.lastName" placeholder="Enter something nice"/>
      </FdFormItem>
      <FdFormItem label="Rating">
        <FdCombobox v-model="newEntry.rating">
          <FdMenuItem value="1">1</FdMenuItem>
          <FdMenuItem value="2">2</FdMenuItem>
          <FdMenuItem value="3">3</FdMenuItem>
          <FdMenuItem value="4">4</FdMenuItem>
          <FdMenuItem value="5">5</FdMenuItem>
        </FdCombobox>
      </FdFormItem>
    </FdFormSet>
    <FdButton @click="addCurrentEntry">Add Entry</FdButton>
  </div>
</template>

<script>
export default {
  methods: {
    addCurrentEntry() {
      const entry = {
        ...this.newEntry,
      };
      this.tableData = [...this.tableData, entry];
      this.newEntry = {
        firstName: null,
        lastName: null,
        rating: "1"
      };
    },
  },
  data() {
    return {
      newEntry: {
        firstName: null,
        lastName: null,
        rating: "1",
      },
      tableData: [
        { rating: 1, firstName: "Chris", lastName: "Kienle" },
        { rating: 2, firstName: "Andi", lastName: "Kienle" },
        { rating: 3, firstName: "Sven", lastName: "Bacia" },
        { rating: 4, firstName: "Artur", lastName: "Raess" },
      ],
    };
  },
};
</script>
