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
