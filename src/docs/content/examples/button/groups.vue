<template>
  <div>
    <fd-buttonGroup v-model="activeButtons" selectionMode="multiple" aria-label="Favorite Color">
      <fd-buttonGroupButton value="a">Red</fd-buttonGroupButton>
      <fd-buttonGroupButton value="b">Green</fd-buttonGroupButton>
      <fd-buttonGroupButton value="c">Blue</fd-buttonGroupButton>
    </fd-buttonGroup>
    <br />
    <br />
    <fd-buttonGroup v-model="activeButtons" selectionMode="multiple" aria-label="Favorite Icon">
      <fd-buttonGroupButton icon="survey" value="a" />
      <fd-buttonGroupButton icon="pool" value="b" />
      <fd-buttonGroupButton icon="pie-chart" value="c" />
    </fd-buttonGroup>
    <br />
    <br />

    Values of selected Buttons: {{ activeButtons }}
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
