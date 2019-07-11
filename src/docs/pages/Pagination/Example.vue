<title>Pagination</title>
<template>
  <div>
    <strong>{{ initialPage }}</strong>
    <FdPagination
      :itemsTotal="101"
      totalText="Search Results"
      :initialPage.sync="initialPage"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      initialPage: 1
    };
  }
};
</script>
