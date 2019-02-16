<title>Toggle Sizes</title>
<docs>
`FdToggle` supports three different size classes:

1. `xs`: renderes an extra small toggle
2. `s`: renderes a small toggle
3. `l`: renderes a large toggle

If you omit the size class, the toggle will be rendered with a default size.
</docs>

<template>
  <div>
    <FdFieldSet>
      <FdLegend>Extra Small Toggles</FdLegend>
      <FdFormGroup inline>
        <FdFormItem label="on">
          <FdToggle on size="xs" />
        </FdFormItem>

        <FdFormItem label="off">
          <FdToggle size="xs" />
        </FdFormItem>

        <FdFormItem label="on + disabled">
          <FdToggle disabled on size="xs" />
        </FdFormItem>

        <FdFormItem label="off + disabled">
          <FdToggle disabled size="xs" />
        </FdFormItem>
      </FdFormGroup>
    </FdFieldSet>

    <FdFieldSet>
      <FdLegend>Small Toggles</FdLegend>
      <FdFormGroup inline>
        <FdFormItem label="on">
          <FdToggle on size="s" />
        </FdFormItem>

        <FdFormItem label="off">
          <FdToggle size="s" />
        </FdFormItem>

        <FdFormItem label="on + disabled">
          <FdToggle disabled on size="s" />
        </FdFormItem>

        <FdFormItem label="off + disabled">
          <FdToggle disabled size="s" />
        </FdFormItem>
      </FdFormGroup>
    </FdFieldSet>

    <FdFieldSet>
      <FdLegend>Large Toggles</FdLegend>
      <FdFormGroup inline>
        <FdFormItem label="on">
          <FdToggle on size="l" />
        </FdFormItem>

        <FdFormItem label="off">
          <FdToggle size="l" />
        </FdFormItem>

        <FdFormItem label="on + disabled">
          <FdToggle disabled on size="l" />
        </FdFormItem>

        <FdFormItem label="off + disabled">
          <FdToggle disabled size="l" />
        </FdFormItem>
      </FdFormGroup>
    </FdFieldSet>
  </div>
</template>
