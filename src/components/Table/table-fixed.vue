<template>
  <div class="fd-table--fixed"><slot /></div>
</template>

<script>
// Use this component together wit `fd-table-fixed-wrapper` and `fd-table` in order to create a table with a fixed column. Example:
// ```xml
// <fd-table-fixed-wrapper>
//   <fd-table-fixed>
//     <fd-table />
//   </fd-table-fixed>
// </fd-table-fixed-wrapper>
// ```
export default {
  name: "FdTableFixed"
};
</script>
