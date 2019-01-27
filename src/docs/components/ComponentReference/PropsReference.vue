<template>
  <Table :items="tableItems" :headers="headers" style="margin-bottom: 0;">
    <template slot="row" slot-scope="{item}">
      <TableRow>
        <TableCell>{{item.id}}</TableCell>
        <TableCell>{{item.description}}</TableCell>
        <TableCell>
          <ValueToken :key="item.name" :representedValue="item.defaultValue" />
        </TableCell>
        <TableCell>
          <TypeTokens
            :key="item.name"
            :propTypes="item.types"
          />
        </TableCell>
        <TableCell>{{item.acceptedValues}}</TableCell>
      </TableRow>
    </template>
  </Table>
</template>

<script lang="ts">
import Vue from "vue";
import { Prop } from "vue/types/options";
import { PropDocumentation, PropType } from "@/api/Model/PropDocumentation";
import { Table, TableRow, TableCell } from "@/components";
import { ValueToken, TypeTokens } from './Tokens';

type PropEntry = {
  id: string;
  name: string;
  description: string;
  acceptedValues: string; // formatted
  types: PropType[];
  defaultValue: any | undefined;
  required: boolean;
};

const defaultValueFromProp = ({
  readableDefaultValue,
  defaultValue
}: PropDocumentation) =>
  readableDefaultValue != null ? readableDefaultValue : defaultValue;

export default Vue.extend({
  components: { ValueToken, TypeTokens, TableRow, TableCell, Table },
  props: {
    documentedProps: Array as Prop<PropDocumentation[]>
  },
  computed: {
    tableItems(): PropEntry[] {
      return this.documentedProps.map(prop => {
        const defaultValue = defaultValueFromProp(prop);
        const acceptedValues = prop.formattedAcceptedValues;
        const types = prop.types;
        return {
          defaultValue,
          types,
          id: prop.key,
          name: prop.key,
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
