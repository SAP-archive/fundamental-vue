<title>Dismiss when click outside</title>

<template>
  <div class="container">
    <FdButton id="3-target" styling="light">Click to show Popper</FdButton>
    <FdPopper
      target="3-target"
      placement="top"
      arrow-element=".popper-arrow"
      :show-on-create="true"
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
