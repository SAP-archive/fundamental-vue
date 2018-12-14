<title>Default MultiInput</title>

<template>
  <FdPagination :itemsTotal=101 :initialPage=1 totalText="Dalmations" @change="onClick"/>
</template>

<script>
export default {
  methods: {
    onClick(page) {
      window.alert('Switch to page '+page+'!');
    },
  },
};
</script>
