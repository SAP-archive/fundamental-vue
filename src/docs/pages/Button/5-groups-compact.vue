<title>Compact Button Groups</title>
<tip>The compact size is only used on desktop and it is full size when used on a touch device.</tip>

<template>
  <div>
    <fd-button-group
      v-model="activeButtons"
      selectionMode="multiple"
      aria-label="Favorite Color"
    >
      <fd-button-group-button value="a">Red</fd-button-group-button>
      <fd-button-group-button value="b">Green</fd-button-group-button>
      <fd-button-group-button value="c">Blue</fd-button-group-button>
    </fd-button-group>
    <br /><br />
    <fd-button-group
      compact
      v-model="activeButtons"
      selectionMode="multiple"
      aria-label="Favorite Color"
    >
      <fd-button-group-button value="a">Red</fd-button-group-button>
      <fd-button-group-button value="b">Green</fd-button-group-button>
      <fd-button-group-button value="c">Blue</fd-button-group-button>
    </fd-button-group>
    <br /><br />
    Values of selected Buttons: {{ activeButtons }}
  </div>
</template>

<script>
export default {
  data: () => ({ activeButtons: [] })
};
</script>
