<template>
  <div>
    Columns:
    <fd-button :disabled="addDiabled" @click="cols++" styling="light" icon="sys-add"></fd-button>
    <fd-button
      :disabled="removeDisabled"
      @click="cols--"
      styling="light"
      icon="sys-minus"
    ></fd-button>
    <br />
    <fd-container fluid>
      <fd-col :span="1" v-for="col in cols" :key="`col-${col}`">{{ col }}. Column</fd-col>
    </fd-container>
  </div>
</template>

<script>
export default {
  data() {
    return { cols: 6 };
  },
  computed: {
    addDiabled() {
      return this.cols > 11;
    },
    removeDisabled() {
      return this.cols < 1;
    }
  }
};
</script>
