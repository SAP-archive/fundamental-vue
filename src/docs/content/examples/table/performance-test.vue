<template>
  <div>
    <fd-field-set style="height: 100px;">
      <fd-form-item inline label="Number of Columns">
        <fd-input v-model.number="numberOfColumns" />
      </fd-form-item>
      <fd-form-item inline label="Number of Rows">
        <fd-input v-model.number="numberOfRows" />
      </fd-form-item>
    </fd-field-set>
    <fd-table-fixed-wrapper style="width: 100%;">
      <fd-table-fixed>
        <fd-table :headers="headers" firstColumnFixed :items="items">
          <template #row="{ item, selected }">
            <fd-table-row>
              <template v-for="colName in colNames" v-slot:[colName]>
                <fd-table-cell :key="colName">
                  {{ valueInItem(item, colName) }}
                </fd-table-cell>
              </template>
            </fd-table-row>
          </template>
        </fd-table>
      </fd-table-fixed>
    </fd-table-fixed-wrapper>
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
      return this.colNames.map(label => label);
    },
    colNames() {
      return Array.from({ length: this.numberOfColumns }).map((_, index) => {
        return `col${index}`;
      });
    },
    items() {
      const { numberOfRows, colNames } = this;
      return Array.from({ length: numberOfRows }).map((_, rowIndex) => {
        const row = { id: String(rowIndex) };
        colNames.forEach(colName => {
          row[colName] = `Row: ${rowIndex} - Col: ${colName}`;
        });
        return row;
      });
    }
  },
  data: () => ({
    numberOfColumns: 5,
    numberOfRows: 5
  })
};
</script>
