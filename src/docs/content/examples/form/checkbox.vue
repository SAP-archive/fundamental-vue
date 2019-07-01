<template>
  <div>
    <fd-field-set>
      <fd-legend>Checkboxes</fd-legend>
      <fd-form-item-checkbox label="Option One">
        <fd-checkbox value="1" />
      </fd-form-item-checkbox>
      <fd-form-item-checkbox label="Option Two">
        <fd-checkbox value="2" />
      </fd-form-item-checkbox>
      <fd-form-item-checkbox label="Option Three">
        <fd-checkbox value="3" />
      </fd-form-item-checkbox>
    </fd-field-set>
    <fd-field-set>
      <fd-legend>Inline Checkboxes</fd-legend>
      <fd-form-group inline>
        <fd-form-item-checkbox label="Option One">
          <fd-checkbox value="1" />
        </fd-form-item-checkbox>
        <fd-form-item-checkbox label="Option Two">
          <fd-checkbox value="2" />
        </fd-form-item-checkbox>
        <fd-form-item-checkbox label="Option Three">
          <fd-checkbox value="3" />
        </fd-form-item-checkbox>
      </fd-form-group>
    </fd-field-set>
  </div>
</template>

<script>
export default {
  data: () => ({
    favoriteColors: ["red"]
  })
};
</script>
