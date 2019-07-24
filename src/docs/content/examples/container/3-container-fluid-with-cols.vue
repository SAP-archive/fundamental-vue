<template>
  <div>
    <fd-button :disabled="addDiabled" @click="cols++" styling="light" icon="sys-add">
      Column
    </fd-button>
    <fd-button :disabled="removeDisabled" @click="cols--" styling="light" icon="sys-minus">
      Column
    </fd-button>
    <hr />
    <br />
    <fd-container fluid>
      <fd-col :span="span" v-for="col in cols" :key="`col-${col}`">{{ col }}. Column</fd-col>
    </fd-container>
  </div>
</template>

<script>
export default {
  data() {
    return { cols: 3 };
  },
  computed: {
    span() {
      return 12 / this.cols;
    },
    addDiabled() {
      return this.cols > 11;
    },
    removeDisabled() {
      return this.cols < 1;
    }
  }
};
</script>
