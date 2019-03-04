<title>Placement Options</title>

<template>
  <div class="container">
    <FdButton id="1-target" styling="light">Click to show Popper</FdButton>
    <FdPopper
      target="1-target"
      placement="top"
      arrow-element=".popper-arrow"
      :show-on-create="true"
      :outside-dismiss="false"
    >
      <div class="popover">
        <div class="popper-arrow"></div>
        <div>Top Placement</div>
      </div>
    </FdPopper>
    <FdPopper
      target="1-target"
      placement="bottom"
      arrow-element=".popper-arrow"
      :show-on-create="true"
      :outside-dismiss="false"
    >
      <div class="popover">
        <div class="popper-arrow"></div>
        <div>Bottom Placement</div>
      </div>
    </FdPopper>
    <FdPopper
      target="1-target"
      placement="left"
      arrow-element=".popper-arrow"
      :show-on-create="true"
      :outside-dismiss="false"
    >
      <div class="popover">
        <div class="popper-arrow"></div>
        <div>Left Placement</div>
      </div>
    </FdPopper>
    <FdPopper
      target="1-target"
      placement="right"
      arrow-element=".popper-arrow"
      :show-on-create="true"
      :outside-dismiss="false"
    >
      <div class="popover">
        <div class="popper-arrow"></div>
        <div>Right Placement</div>
      </div>
    </FdPopper>
  </div>
</template>

<style lang="scss" scoped>
$popper-color: #ffc107;
$arrow-size: 10px;
$border-radius: 3px;

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}
.popover {
  background-color: $popper-color;
  color: black;
  border-radius: $border-radius;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  padding: 10px;
  text-align: center;

  .popper-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: $border-radius;
  }
}
</style>

<style lang="scss">
/**
 * temporary defined as global styles
 * while waiting for the fundamental design team for the arrows in multiple directions
 */
$popper-color: #ffc107;
$arrow-size: 10px;

[x-placement="left"],
[x-placement="left-start"],
[x-placement="left-end"] {
  margin-right: $arrow-size;
  .popover .popper-arrow {
    border-width: $arrow-size 0 $arrow-size $arrow-size;
    border-color: transparent transparent transparent $popper-color;
    right: -$arrow-size;
    top: calc(50% - #{$arrow-size});
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
}
[x-placement="top"],
[x-placement="top-start"],
[x-placement="top-end"] {
  margin-bottom: $arrow-size;
  .popover .popper-arrow {
    border-width: $arrow-size $arrow-size 0 $arrow-size;
    border-color: $popper-color transparent transparent transparent;
    bottom: -$arrow-size;
    left: calc(50% - #{$arrow-size});
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
}
[x-placement="right"],
[x-placement="right-start"],
[x-placement="right-end"] {
  margin-left: $arrow-size;
  .popover .popper-arrow {
    border-width: $arrow-size $arrow-size $arrow-size 0;
    border-color: transparent $popper-color transparent transparent;
    left: -$arrow-size;
    top: calc(50% - #{$arrow-size});
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
}
[x-placement="bottom"],
[x-placement="bottom-start"],
[x-placement="bottom-end"] {
  margin-top: $arrow-size;
  .popover .popper-arrow {
    border-width: 0 $arrow-size $arrow-size $arrow-size;
    border-color: transparent transparent $popper-color transparent;
    top: -$arrow-size;
    left: calc(50% - #{$arrow-size});
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
}
</style>
