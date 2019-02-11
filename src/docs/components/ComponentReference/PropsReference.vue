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

<script lang="ts">
import Vue from "vue";
import { Prop } from "vue/types/options";
import { ValueToken, TypeTokens } from "./Tokens";
import { PropDocumentation } from "@/docs/api/PropDocumentation";

const defaultValueFromProp = ({
  readableDefaultValue,
  defaultValue
}: PropDocumentation) =>
  readableDefaultValue != null ? readableDefaultValue : defaultValue;

export default Vue.extend({
  components: { ValueToken, TypeTokens },
  props: {
    documentedProps: Array as Prop<PropDocumentation[]>
  },
  computed: {
    tableItems(): PropDocumentation[] {
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
});
</script>
