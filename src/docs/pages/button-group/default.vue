<template>
  <div>
    <FdButtonGroup aria-label="Favorite Color">
      <FdButtonGroupButton @click="clicked('red')">Red</FdButtonGroupButton>
      <FdButtonGroupButton @click="clicked('green')">Green</FdButtonGroupButton>
      <FdButtonGroupButton @click="clicked('blue')">Blue</FdButtonGroupButton>
    </FdButtonGroup>
    <br />
    <br />
    <FdButtonGroup aria-label="Favorite Icon">
      <FdButtonGroupButton @click="clicked('survey')" icon="survey" />
      <FdButtonGroupButton @click="clicked('pool')" icon="pool" />
      <FdButtonGroupButton @click="clicked('pie-chart')" icon="pie-chart" />
    </FdButtonGroup>
    <br />
    <br />

    Most recently clicked Button: {{ clickedItem }}
  </div>
</template>
<script>
export default {
  methods: {
    clicked(item) {
      this.clickedItem = item
    }
  },
  data() {
    return {
      clickedItem: null
    }
  }
}
</script>
