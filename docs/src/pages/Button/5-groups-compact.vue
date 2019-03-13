<title>Compact Button Groups</title>
<tip>The compact size is only used on desktop and it is full size when used on a touch device.</tip>

<template>
  <div>
    <FdButtonGroup
      v-model="activeButtons"
      selectionMode="multiple"
      aria-label="Favorite Color"
    >
      <FdButtonGroupButton value="a">Red</FdButtonGroupButton>
      <FdButtonGroupButton value="b">Green</FdButtonGroupButton>
      <FdButtonGroupButton value="c">Blue</FdButtonGroupButton>
    </FdButtonGroup>
    <br /><br />
    <FdButtonGroup
      compact
      v-model="activeButtons"
      selectionMode="multiple"
      aria-label="Favorite Color"
    >
      <FdButtonGroupButton value="a">Red</FdButtonGroupButton>
      <FdButtonGroupButton value="b">Green</FdButtonGroupButton>
      <FdButtonGroupButton value="c">Blue</FdButtonGroupButton>
    </FdButtonGroup>
    <br /><br />
    Values of selected Buttons: {{ activeButtons }}
  </div>
</template>

<script>
export default {
  data: () => ({ activeButtons: [] })
};
</script>
