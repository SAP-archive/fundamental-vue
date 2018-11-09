<template>
  <div>
    <vf-button-group v-model="activeButton">
      <vf-button icon="survey" />
      <vf-button icon="pie-chart" />
      <vf-button icon="pool" />
    </vf-button-group>
    <br /><br />
    <vf-button-group v-model="activeButton">
      <vf-button>Left</vf-button>
      <vf-button>Middle</vf-button>
      <vf-button>Right</vf-button>
    </vf-button-group>
    <br /><br />
    <vf-button-group compact v-model="activeButton">
      <vf-button>Left</vf-button>
      <vf-button>Middle</vf-button>
      <vf-button>Right</vf-button>
    </vf-button-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeButton: 1,
    };
  },
};
</script>