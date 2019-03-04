<title>Fits for any content</title>

<template>
  <div class="container">
    <FdButton id="5-target" styling="light">Click to show Calendar</FdButton>
    <FdPopper target="5-target" placement="bottom">
      <div class="popover">
        <FdCalendar />
      </div>
    </FdPopper>

    <FdButton id="5-target2" styling="light">Click to show List Group</FdButton>
    <FdPopper target="5-target2" placement="bottom">
      <div class="popover">
        <FdListGroup>
          <FdListGroupItem>
            <FdFormItem label="List item 1">
              <FdCheckbox />
            </FdFormItem>
          </FdListGroupItem>

          <FdListGroupItem>
            <FdFormItem label="List item 2">
              <FdCheckbox />
            </FdFormItem>
          </FdListGroupItem>

          <FdListGroupItem>
            <FdFormItem
              label="List item 3 — Lorem ipsum dolor sit amet, consectetur sed do"
            >
              <FdCheckbox />
            </FdFormItem>
          </FdListGroupItem>

          <FdListGroupItem>
            <FdFormItem
              label="List item 4 — Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            >
              <FdCheckbox />
            </FdFormItem>
          </FdListGroupItem>
        </FdListGroup>
      </div>
    </FdPopper>

    <FdButton id="5-target3" styling="light">Click to show Panel</FdButton>
    <FdPopper target="5-target3" placement="bottom">
      <div class="popover popover-panel">
        <FdPanel title="Title" description="Description">
          <p slot="actions">Actions</p>
          <p slot="filters">Filters</p>
          <p>Body</p>
          <p slot="footer">Footer</p>
        </FdPanel>
      </div>
    </FdPopper>
  </div>
</template>

<style lang="scss" scoped>
$popper-color: white;
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

.popover-panel {
  width: 350px;
  text-align: left;
}
</style>
