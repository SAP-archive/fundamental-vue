<title>Checkboxes</title>
<tip>
Form items can be inlined. You can do this either by setting the `inline`-flag on each item or by simply setting it on the enclosing `FdFormGroup`.
</tip>
<template>
  <div>
    <FdFieldSet>
      <FdLegend>Checkboxes</FdLegend>
      <FdFormGroup>
        <FdFormItem label="Option One"><FdCheckbox value="1" /></FdFormItem>
        <FdFormItem label="Option Two"><FdCheckbox value="2" /></FdFormItem>
        <FdFormItem label="Option Three"><FdCheckbox value="3" /></FdFormItem>
      </FdFormGroup>
    </FdFieldSet>
    <FdFieldSet>
      <FdLegend>Inline Checkboxes</FdLegend>
      <FdFormGroup inline>
        <FdFormItem label="Option One"><FdCheckbox value="1" /></FdFormItem>
        <FdFormItem label="Option Two"><FdCheckbox value="2" /></FdFormItem>
        <FdFormItem label="Option Three"><FdCheckbox value="3" /></FdFormItem>
      </FdFormGroup>
    </FdFieldSet>
  </div>
</template>