<template>
  <div>
    <FdButtonGroup v-model="activeButton">
      <FdButton icon="survey" />
      <FdButton icon="pie-chart" />
      <FdButton icon="pool" />
    </FdButtonGroup>
    <br /><br />
    <FdButtonGroup v-model="activeButton">
      <FdButton>Left</FdButton>
      <FdButton>Middle</FdButton>
      <FdButton>Right</FdButton>
    </FdButtonGroup>
    <br /><br />
    <FdButtonGroup compact v-model="activeButton">
      <FdButton>Left</FdButton>
      <FdButton>Middle</FdButton>
      <FdButton>Right</FdButton>
    </FdButtonGroup>
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