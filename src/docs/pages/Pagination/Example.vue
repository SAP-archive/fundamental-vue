<title>Default MultiInput</title>
  <template>
    <div>
      <h2>{{selectedPage}}</h2>
      <FdPagination :itemsTotal=101 :initialPage=initialPage totalText="Dalmations" v-on:page-change="onChange"/>
    </div>
  </template>

<script>
export default {
  data() {
    const init =1;
    return {
      initialPage: init,
      selectedPage: init,
    }
  },
  methods: {
    onChange(page) {
      this.selectedPage = page;
    },
  },
};
</script>
