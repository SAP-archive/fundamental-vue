<template>
  <div>
    <ApiItem
      v-for="item of items"
      :key="item.name"
      :name="item.name"
      :description="item.description"
      :types="item.types"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { PropDocumentation } from "@/api/PropDocumentation";
import ApiItem from "./components/ApiItem.vue";

const defaultValueFromProp = ({
  readableDefaultValue,
  defaultValue
}: PropDocumentation) =>
  readableDefaultValue != null ? readableDefaultValue : defaultValue;
export default Vue.extend({
  components: { ApiItem },
  props: {
    documentedProps: Array as PropOptions<PropDocumentation[]>
  },
  computed: {
    items(): PropDocumentation[] {
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
