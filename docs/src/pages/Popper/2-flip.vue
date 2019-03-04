<title>Flip Behavior</title>

<template>
  <div class="container">
    <div class="scrollbox">
      <FdButton id="2-target" styling="light">Scroll Me</FdButton>
      <FdPopper
        target="2-target"
        placement="top"
        arrow-element=".popper-arrow"
        :show-on-create="true"
        :outside-dismiss="false"
      >
        <div class="popover">
          <div class="popper-arrow"></div>
          <div>
            <b>Top Placement</b>
            <br />Flips when outside boundary
          </div>
        </div>
      </FdPopper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$popper-color: #ffc107;
$arrow-size: 10px;
$border-radius: 3px;

.container {
  height: 200px;
  width: 400px;
  padding: 0 !important;
  margin: auto;
  overflow: auto;
}
.scrollbox {
  background-color: #f2f2f2;
  height: 200%;
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
