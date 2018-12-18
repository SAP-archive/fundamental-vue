<title>Default MultiInput</title>

<template>
  <FdPagination :itemsTotal=101 :initialPage=1 totalText="Dalmations" v-on:page-change="onChange"/>
</template>

<script>
export default {
  methods: {
    onChange(page) {
      console.log('Switch to page '+page+'!');
    },
  },
};
</script>
