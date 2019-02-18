<template>
  <th v-on="$listeners" :class="classes" :style="styles">
    {{ label }}
    <slot />
  </th>
</template>

<script lang="ts">
import Vue from "vue";
import { isTextAlignment, TextAlignment, SortOrder } from "./../Util";

export default Vue.extend({
  name: "FdTableHeaderCell",

  props: {
    label: {
      type: String,
      default: null
    },
    alignment: {
      type: String,
      default: TextAlignment.default,
      validator: isTextAlignment
    },
    sortOrder: {
      type: String,
      default: null
    },
    sortable: {
      type: Boolean,
      default: false
    },
    sortBy: {
      type: String,
      default: null
    },
    columnFixed: {
      type: Boolean,
      default: null
    }
  },
  computed: {
    classes(): object {
      const sortOrder = this.sortOrder;
      return {
        "fd-has-text-align-center": this.alignment === TextAlignment.center,
        "fd-table__sort-column": this.sortable,
        "fd-table__sort-column--dsc": sortOrder === SortOrder.descending,
        "fd-table__sort-column--asc": sortOrder === SortOrder.ascending,
        "fd-table__fixed-col": this.columnFixed
      };
    },
    styles(): object {
      return this.columnFixed
        ? {
            left: 0,
            width: "200px"
          }
        : {};
    }
  }
});
</script>
