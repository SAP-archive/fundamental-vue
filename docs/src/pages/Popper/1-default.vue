<title>Popper</title>

<template>
  <div>
    <FdPopper placement="bottom">
      <template #trigger="{toggle}">
        <FdButton @click="toggle">Show/Hide</FdButton>
      </template>

      <template #default="{show, hide}">
        <FdPanel title="Welcome Stranger" tabindex="0">
          <p>Do you like popcorn?</p>
          <p>🍿</p>
          <div slot="footer">
            <FdButton @click="hide">Hide Popover</FdButton>
          </div>
        </FdPanel>
      </template>
    </FdPopper>
  </div>
</template>
