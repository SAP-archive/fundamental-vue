<title>Toggle Sizes</title>
<docs>`FdToggle` supports three different size classes:

1. `xs`: renderes an extra small toggle
2. `s`: renderes a small toggle
3. `l`: renderes a large toggle

If you omit the size class, the toggle will be rendered with a default size.</docs>
<template>
  <div>
    <FdToggle size="xs" label="Extra Small Toggle" />
    <FdToggle :on=true size="xs" label="Extra Small Toggle" />
    <br />
    <FdToggle size="s" label="Small Toggle" />
    <FdToggle :on=true size="s" label="Small Toggle" />
    <br />
    <FdToggle size="l" label="Large Toggle" />
    <FdToggle :on=true size="l" label="Large Toggle" />
  </div>
</template>
