<template>
  <div>
    <FdButtonGroup v-model="activeButton" selectionMode="single" aria-label="Favorite Color">
      <FdButtonGroupButton value="a">Red</FdButtonGroupButton>
      <FdButtonGroupButton value="b">Green</FdButtonGroupButton>
      <FdButtonGroupButton value="c">Blue</FdButtonGroupButton>
    </FdButtonGroup>
    <br />
    <br />
    <FdButtonGroup v-model="activeButton" selectionMode="single" aria-label="Favorite Icon">
      <FdButtonGroupButton icon="survey" value="a" />
      <FdButtonGroupButton icon="pool" value="b" />
      <FdButtonGroupButton icon="pie-chart" value="c" />
    </FdButtonGroup>
    <br />
    <br />

    Values of selected Button: {{ activeButton }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeButton: 'a'
    }
  }
}
</script>
