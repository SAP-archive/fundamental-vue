<template>
  <div>
    <vf-breadcrumb>
      <vf-breadcrumb-item @click="handleClick">Link Text</vf-breadcrumb-item>
      <vf-breadcrumb-item>Link Text</vf-breadcrumb-item>
      <vf-breadcrumb-item>Link Text</vf-breadcrumb-item>
    </vf-breadcrumb>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick() {
      console.log('clicked');
    },
  },
};
</script>