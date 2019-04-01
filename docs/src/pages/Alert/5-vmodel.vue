<title>Alert and `v-model`</title>
<tip>`FdAlert` supports `v-model`. You can use `v-model` to control the visibility of the alert.</tip>
<template>
  <div>
    <FdButton @click="visible = !visible">Toggle Visibile</FdButton>

    <br /><br />

    <FdAlert type="success" v-model="visible" :dismissible="false">
      <a @click="dismiss" aria-label="close" style="float: right">
        Close
      </a>
      Success alert. Click on the close button.
    </FdAlert>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: true
    };
  },
  methods: {
    dismiss: function() {
      this.visible = false;
    }
  }
};
</script>
