<title>Manual Triggers</title>

<template>
  <div class="container">
    <FdButton id="6-target" styling="light">Popper Target Reference</FdButton>
    <FdPopper
      ref="popper"
      target="6-target"
      placement="bottom"
      triggers="manual"
      arrow-element=".popper-arrow"
      :outside-dismiss="false"
    >
      <div class="popover">
        <div class="popper-arrow"></div>
        <div>
          <b>Manually trigger the popper</b>
          <br />This can be used for the use case of autocomplete input
        </div>
      </div>
    </FdPopper>

    <FdButton @click="$refs.popper.toggle()">Manual trigger Popper hide/show</FdButton>
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
