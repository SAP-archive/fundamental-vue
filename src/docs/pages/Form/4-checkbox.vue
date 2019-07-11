<title>Checkboxes</title>
<tip>
Form items can be inlined. You can do this either by setting the `inline`-flag on each item or by simply setting it on the enclosing `FdFormGroup`.
</tip>
<docs>
You can bind multiple checkboxes to a single array. For each checked control it's corresponding value is added to the bound array.
</docs>
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
