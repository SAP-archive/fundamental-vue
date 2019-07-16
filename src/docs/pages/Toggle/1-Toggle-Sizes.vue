<title>Toggle Sizes</title>
<docs>
`fd-toggle` supports three different size classes:

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
        <fd-form-item-toggle label="on">
          <fd-toggle on size="xs" />
        </fd-form-item-toggle>

        <fd-form-item-toggle label="off">
          <fd-toggle size="xs" />
        </fd-form-item-toggle>

        <fd-form-item-toggle label="on + disabled">
          <fd-toggle disabled on size="xs" />
        </fd-form-item-toggle>

        <fd-form-item-toggle label="off + disabled">
          <fd-toggle disabled size="xs" />
        </fd-form-item-toggle>
      </FdFormGroup>
    </FdFieldSet>

    <FdFieldSet>
      <FdLegend>Small Toggles</FdLegend>
      <FdFormGroup inline>
        <fd-form-item-toggle label="on">
          <fd-toggle on size="s" />
        </fd-form-item-toggle>

        <fd-form-item-toggle label="off">
          <fd-toggle size="s" />
        </fd-form-item-toggle>

        <fd-form-item-toggle label="on + disabled">
          <fd-toggle disabled on size="s" />
        </fd-form-item-toggle>

        <fd-form-item-toggle label="off + disabled">
          <fd-toggle disabled size="s" />
        </fd-form-item-toggle>
      </FdFormGroup>
    </FdFieldSet>

    <FdFieldSet>
      <FdLegend>Large Toggles</FdLegend>
      <FdFormGroup inline>
        <fd-form-item-toggle label="on">
          <fd-toggle on size="l" />
        </fd-form-item-toggle>

        <fd-form-item-toggle label="off">
          <fd-toggle size="l" />
        </fd-form-item-toggle>

        <fd-form-item-toggle label="on + disabled">
          <fd-toggle disabled on size="l" />
        </fd-form-item-toggle>

        <fd-form-item-toggle label="off + disabled">
          <fd-toggle disabled size="l" />
        </fd-form-item-toggle>
      </FdFormGroup>
    </FdFieldSet>
  </div>
</template>
