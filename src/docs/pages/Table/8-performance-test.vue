<title>Performance Test</title>

<tip>
`FdTable` is not yet capable of displaying huge data sets. The current limit is around `1.000`-`5.000` rows (depending on the browser, number of elements currently present in the DOM, number of columns, displayed data, …).
</tip>

<template>
  <div>
    <FdFormSet style="height: 100px;">
      <FdFormItem inline label="Number of Columns">
        <FdInput v-model="numberOfColumns" />
      </FdFormItem>
      <FdFormItem inline label="Number of Rows">
        <FdInput v-model="numberOfRows" />
      </FdFormItem>
    </FdFormSet>

    <FdTable :fixedWrapperStyle="{'width': '100%'}" firstColumnFixed :items="tableData">

      <FdTableHeader>
        <FdTableHeaderCell label="id" />
        <FdTableHeaderCell v-for="colName in colNames" :key="colName" :label="colName" />
      </FdTableHeader>

      <FdTableRow slot="row" slot-scope="{item}">
        <FdTableCell :key="item.id + 'id'">
          {{item.id}}
        </FdTableCell>
        <FdTableCell
          v-for="colName in colNames"
          :key="item.id + colName">
            {{valueInItem(item, colName)}}
        </FdTableCell>
      </FdTableRow>
    </FdTable>
  </div>
</template>

<script>
export default {
  methods: {
    valueInItem(item, col) {
      return item[col];
    },
    colName(col) {
      return `col${col}`;
    }
  },
  computed: {
    colNames() {
      const cols = Number(this.numberOfColumns);
      return Array.from({length: cols}).map((_, index) => {
        return this.colName(index);
      });
    },
    tableData() {
      const cols = Number(this.numberOfColumns);
      const rows = Number(this.numberOfRows);
      return Array.from({length: rows}).map((_, rowIndex) => {
        const colNames = Array.from({length: cols}).map((_, index) => {
          return this.colName(index);
        });
        const row = { id: String(rowIndex) };
        colNames.forEach(colName => {
          row[colName] = `Row: ${rowIndex} - Col: ${colName}`;
        });
        return row;
      });
    },
  },
  data: () => ({
    numberOfColumns: '5',
    numberOfRows: '5',
  })
};
</script>
