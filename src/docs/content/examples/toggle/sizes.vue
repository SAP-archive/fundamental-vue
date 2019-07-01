<template>
  <div>
    <fd-field-set>
      <fd-legend>Extra Small Toggles</fd-legend>
      <fd-form-group inline>
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
      </fd-form-group>
    </fd-field-set>

    <fd-field-set>
      <fd-legend>Small Toggles</fd-legend>
      <fd-form-group inline>
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
      </fd-form-group>
    </fd-field-set>

    <fd-field-set>
      <fd-legend>Large Toggles</fd-legend>
      <fd-form-group inline>
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
      </fd-form-group>
    </fd-field-set>
  </div>
</template>
