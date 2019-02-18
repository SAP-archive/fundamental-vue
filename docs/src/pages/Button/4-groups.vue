<title>Button Groups</title>

<template>
  <div>
    <FdButtonGroup v-model="activeButtons">
      <FdButton value="a">Left</FdButton>
      <FdButton value="b">Middle</FdButton>
      <FdButton value="c">Right</FdButton>
    </FdButtonGroup>
    <br /><br />
    <FdButtonGroup v-model="activeButtons">
      <FdButton value="a">Left</FdButton>
      <FdButton value="b">Middle</FdButton>
      <FdButton value="c">Right</FdButton>
    </FdButtonGroup>
    <br /><br />
    <FdButtonGroup compact v-model="activeButtons">
      <FdButton value="a">Left</FdButton>
      <FdButton value="b">Middle</FdButton>
      <FdButton value="c">Right</FdButton>
    </FdButtonGroup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeButtons: []
    };
  }
};
</script>
