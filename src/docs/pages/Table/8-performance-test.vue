<title>Performance Test</title>

<tip>
`FdTable` is not yet capable of displaying huge data sets. The current limit is around `1.000`-`5.000` rows (depending on the browser, number of elements currently present in the DOM, number of columns, displayed data, …).
</tip>

<template>
  <div>
    <fd-field-set style="height: 100px;">
      <FdFormItem inline label="Number of Columns">
        <FdInput v-model="numberOfColumns" />
      </FdFormItem>
      <FdFormItem inline label="Number of Rows">
        <FdInput v-model="numberOfRows" />
      </FdFormItem>
    </fd-field-set>

    <FdTable
      :headers="headers"
      :fixedWrapperStyle="{ width: '100%' }"
      firstColumnFixed
      :items="items"
    >
      <template slot="row" slot-scope="{ item }">
        <FdTableRow>
          <FdTableCell v-for="colName in colNames" :key="item.id + colName">
            {{ valueInItem(item, colName) }}
          </FdTableCell>
        </FdTableRow>
      </template>
    </FdTable>
  </div>
</template>

<script>
export default {
  methods: {
    valueInItem(item, col) {
      return item[col];
    }
  },
  computed: {
    headers() {
      return this.colNames.map(label => ({ label }));
    },
    colNames() {
      const cols = Number(this.numberOfColumns);
      return Array.from({ length: cols }).map((_, index) => {
        return `col${index}`;
      });
    },
    items() {
      const rows = Number(this.numberOfRows);
      return Array.from({ length: rows }).map((_, rowIndex) => {
        const colNames = this.colNames;
        const row = { id: String(rowIndex) };
        colNames.forEach(colName => {
          row[colName] = `Row: ${rowIndex} - Col: ${colName}`;
        });
        return row;
      });
    }
  },
  data: () => ({
    numberOfColumns: "5",
    numberOfRows: "5"
  })
};
</script>
