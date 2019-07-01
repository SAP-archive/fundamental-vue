<template>
  <div>
    <strong>Current Page: {{ initialPage }}</strong>
    <br />
    <br />
    <br />
    <fd-pagination
      style="width: 100%;"
      :items-total="101"
      :initial-page.sync="initialPage"
      total-text="Search Results"
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
