<title>Default Contextual Menu (Icon only)</title>
<docs>
`FdContextualMenu` is an opinionated composition of the `FdPopover` and `FdMenu` components with the use of a styled button. All of this is basically an implementation detail but still good to know. A More icon or the word, *More*, is used to indicate there are more options than room to display them. On click or tap, a contextual menu opens.
</docs>
<template>
  <div>
    <div class="options-selected">
      <span class="options-selected-label">Selected:</span>
      <span class="options-selected-current">{{selectedItem || 'none'}}</span>
    </div>
    <FdContextualMenu @select="selectedItem = $event.value">
      <FdMenuList>
        <FdMenuItem value="Option 1">Option 1</FdMenuItem>
        <FdMenuItem value="Option 2">Option 2</FdMenuItem>
        <FdMenuItem value="Option 3">Option 3</FdMenuItem>
      </FdMenuList>
    </FdContextualMenu>
  </div>
</template>

<script>

export default {
  data() {
    return {
      selectedItem: null
    };
  },
};
</script>

<style scoped>
.options-selected {
  font-size: 20px;
  margin-bottom: 30px;
  border-bottom: 1px solid #efefef;
  padding-bottom: 10px;
}
.options-selected-label {
  margin-right: 10px;
}

.options-selected-current {
  font-weight: bold;
  color: rgb(55, 160, 6);
  background-color: #efefef;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 5px;
}
</style>
