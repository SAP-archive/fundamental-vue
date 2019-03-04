<title>Triggers Options</title>

<template>
  <div class="container">
    <FdButton id="4-target" styling="light">Click to show Popper</FdButton>
    <FdPopper
      target="4-target"
      placement="bottom"
      arrow-element=".popper-arrow"
    >
      <div class="popover">
        <div class="popper-arrow"></div>
        <div>Popper</div>
      </div>
    </FdPopper>

    <FdButton id="4-target2" styling="light">Hover to show Popper</FdButton>
    <FdPopper
      target="4-target2"
      placement="bottom"
      arrow-element=".popper-arrow"
      triggers="hover"
    >
      <div class="popover">
        <div class="popper-arrow"></div>
        <div>Popper</div>
      </div>
    </FdPopper>

    <FdButton id="4-target3" styling="light">Focus to show Popper</FdButton>
    <FdPopper
      target="4-target3"
      placement="bottom"
      arrow-element=".popper-arrow"
      triggers="focus"
    >
      <div class="popover">
        <div class="popper-arrow"></div>
        <div>Popper</div>
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
}

button {
  margin-right: 10px;
}

.popover {
  background-color: $popper-color;
  color: black;
  width: 150px;
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
