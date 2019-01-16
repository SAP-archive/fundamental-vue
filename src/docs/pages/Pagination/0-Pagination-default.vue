<title>Pagination</title>

<template>
  <div>
    <h2>{{initialPage}}</h2>
    <FdPagination :itemsTotal=101 totalText="Dalmations" :initialPage.sync="initialPage" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      initialPage: 1,
    };
  },
};
</script>
