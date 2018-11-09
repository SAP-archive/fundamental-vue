<!--
This component is implemented as a single file component because I don't know of any
other way to render a component dynamically. dynamic-component is used to display an
actual example (see src/docs/pages/**.vue) component.
-->
<template>
  <component style="padding: 16px 24px;" :is="component" />
</template>

<script>
export default {
  name: 'dynamic-component',
  props: {
    component: {
      type: Object,
      required: true,
    },
  },
};
</script>
