<template>
  <div>
    <FdFieldset>
      <FdFieldsetLegend>Extra Small Toggles</FdFieldsetLegend>
      <FdFormItemToggle label="on">
        <FdToggle on size="xs" />
      </FdFormItemToggle>

      <FdFormItemToggle label="off">
        <FdToggle size="xs" />
      </FdFormItemToggle>

      <FdFormItemToggle label="on + disabled">
        <FdToggle disabled on size="xs" />
      </FdFormItemToggle>

      <FdFormItemToggle label="off + disabled">
        <FdToggle disabled size="xs" />
      </FdFormItemToggle>
    </FdFieldset>

    <FdFieldset>
      <FdFieldsetLegend>Small Toggles</FdFieldsetLegend>
      <FdFormItemToggle label="on">
        <FdToggle on size="s" />
      </FdFormItemToggle>

      <FdFormItemToggle label="off">
        <FdToggle size="s" />
      </FdFormItemToggle>

      <FdFormItemToggle label="on + disabled">
        <FdToggle disabled on size="s" />
      </FdFormItemToggle>

      <FdFormItemToggle label="off + disabled">
        <FdToggle disabled size="s" />
      </FdFormItemToggle>
    </FdFieldset>

    <FdFieldset>
      <FdFieldsetLegend>Large Toggles</FdFieldsetLegend>
      <FdFormItemToggle label="on">
        <FdToggle on size="l" />
      </FdFormItemToggle>

      <FdFormItemToggle label="off">
        <FdToggle size="l" />
      </FdFormItemToggle>

      <FdFormItemToggle label="on + disabled">
        <FdToggle disabled on size="l" />
      </FdFormItemToggle>

      <FdFormItemToggle label="off + disabled">
        <FdToggle disabled size="l" />
      </FdFormItemToggle>
    </FdFieldset>
  </div>
</template>
