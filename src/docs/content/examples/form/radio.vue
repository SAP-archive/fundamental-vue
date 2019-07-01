<template>
  <div>
    <fd-field-set>
      <fd-legend>Radio Buttons</fd-legend>
      <fd-form-item-radio label="Option One">
        <fd-radio value="1" />
      </fd-form-item-radio>
      <fd-form-item-radio label="Option Two">
        <fd-radio value="2" />
      </fd-form-item-radio>
      <fd-form-item-radio label="Option Three">
        <fd-radio value="3" />
      </fd-form-item-radio>
    </fd-field-set>
    <fd-field-set>
      <fd-legend>Inline Radio Buttons</fd-legend>
      <fd-form-group inline>
        <fd-form-item-radio label="Option One">
          <fd-radio value="1" />
        </fd-form-item-radio>
        <fd-form-item-radio label="Option Two">
          <fd-radio value="2" />
        </fd-form-item-radio>
        <fd-form-item-radio label="Option Three">
          <fd-radio value="3" />
        </fd-form-item-radio>
      </fd-form-group>
    </fd-field-set>
  </div>
</template>
