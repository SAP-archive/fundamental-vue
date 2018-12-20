<title>With Icon</title>

<template>
  <div>
    <div class="options-selected">
      <span class="options-selected-label">Selected:</span>
      <span class="options-selected-current">{{selectedItem || 'none'}}</span>
    </div>
    <FdContextualMenu icon="vertical-grip">
      <FdMenu @select="selectOption">
        <FdMenuList>
          <FdMenuItem value="Option 1">Option 1</FdMenuItem>
          <FdMenuItem value="Option 2">Option 2</FdMenuItem>
          <FdMenuItem value="Option 3">Option 3</FdMenuItem>
        </FdMenuList>
      </FdMenu>
    </FdContextualMenu>
  </div>
</template>

<script>

export default {
  methods: {
    selectOption(event) {
      this.selectedItem = event.value;
    },
  },
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
