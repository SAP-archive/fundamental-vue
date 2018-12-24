<title>Placement Options</title>
<tip>If you dislike the fact that you have to manage the popover's visibility yourself consider `FdContextualMenu`.</tip>
<template>
  <div>
    <FdPopover title="Left Aligned (default)" v-model="visibility.popover1">
      <FdMenu @select="visibility.popover1 = false">
        <FdMenuList>
          <FdMenuItem>Option 1</FdMenuItem>
          <FdMenuItem>Option 2</FdMenuItem>
          <FdMenuItem>Option 3</FdMenuItem>
          <FdMenuItem>Option 4</FdMenuItem>
        </FdMenuList>
      </FdMenu>
    </FdPopover>

    <br /><br />

    <FdPopover title="Right Aligned" v-model="visibility.popover2" placement="right">
      <FdMenu @select="visibility.popover2 = false">
        <FdMenuList>
          <FdMenuItem>Option 1</FdMenuItem>
          <FdMenuItem>Option 2</FdMenuItem>
          <FdMenuItem>Option 3</FdMenuItem>
          <FdMenuItem>Option 4</FdMenuItem>
        </FdMenuList>
      </FdMenu>
    </FdPopover>

    <br /><br />

    <FdPopover title="No Arrow & Left Aligned" v-model="visibility.popover3" noArrow>
      <FdMenu @select="visibility.popover3 = false">
        <FdMenuList>
          <FdMenuItem>Option 1</FdMenuItem>
          <FdMenuItem>Option 2</FdMenuItem>
          <FdMenuItem>Option 3</FdMenuItem>
          <FdMenuItem>Option 4</FdMenuItem>
        </FdMenuList>
      </FdMenu>
    </FdPopover>

    <br /><br />

    <FdPopover title="No Arrow & Right Aligned" v-model="visibility.popover4" noArrow placement="right">
      <FdMenu @select="visibility.popover4 = false">
        <FdMenuList>
          <FdMenuItem>Option 1</FdMenuItem>
          <FdMenuItem>Option 2</FdMenuItem>
          <FdMenuItem>Option 3</FdMenuItem>
          <FdMenuItem>Option 4</FdMenuItem>
        </FdMenuList>
      </FdMenu>
    </FdPopover>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visibility: {
        popover1: false,
        popover2: false,
        popover3: false,
        popover4: false,
      }
    }
  }
}
</script>
