<template>
  <FdTable :items="tableItems" :headers="headers" style="margin-bottom: 0;">
    <template slot="row" slot-scope="{ item }">
      <FdTableRow>
        <FdTableCell>{{ item.name }}</FdTableCell>
        <FdTableCell>{{ item.description }}</FdTableCell>
        <FdTableCell>
          <ValueToken :key="item.name" :representedValue="item.defaultValue" />
        </FdTableCell>
        <FdTableCell>
          <TypeTokens :key="item.name" :propTypes="item.types" />
        </FdTableCell>
        <FdTableCell>{{ item.acceptedValues }}</FdTableCell>
      </FdTableRow>
    </template>
  </FdTable>
</template>

<script>
import { ValueToken, TypeTokens } from "./Tokens";
const defaultValueFromProp = ({ readableDefaultValue, defaultValue }) =>
  readableDefaultValue != null ? readableDefaultValue : defaultValue;
export default {
  components: { ValueToken, TypeTokens },
  props: {
    documentedProps: Array
  },
  computed: {
    tableItems() {
      return this.documentedProps.map(prop => {
        const defaultValue = defaultValueFromProp(prop);
        const acceptedValues = (prop.acceptableValues || []).join(", ");
        const types = prop.types;
        return {
          defaultValue,
          types,
          name: prop.name,
          description: prop.description,
          acceptedValues,
          required: prop.required
        };
      });
    },
    headers() {
      return [
        "Property",
        "Description",
        "Default Value",
        "Type",
        "Accepted Values"
      ];
    }
  }
};
</script>
