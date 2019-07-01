<template>
  <div>
    <fd-button @click="visible = !visible">Toggle Visibile</fd-button>

    <br />
    <br />

    <fd-alert type="success" v-model="visible" dismissible>
      Success alert. Click on the close button.
    </fd-alert>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: true
    };
  }
};
</script>
