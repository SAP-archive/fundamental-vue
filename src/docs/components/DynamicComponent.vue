<!--
This component is implemented as a single file component because I don't know of any
other way to render a component dynamically. dynamic-component is used to display an
actual example (see src/docs/pages/**.vue) component.
-->
<template>
  <div style="padding: 16px 24px;">
    <component :is="component" />
  </div>
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
