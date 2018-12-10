<title>Checkboxes</title>

<template>
  <div>
    <FdFieldSet>
      <FdLegend>Checkboxes</FdLegend>
      <FdFormGroup>
        <FdFormItem check>
          <FdFormLabel for="check-1">
          <FdInput  value="1" checked={true} name="checkbox-1" id="check-1" type="checkbox" />
            Option One
          </FdFormLabel>
        </FdFormItem>
        <FdFormItem check>
          <FdFormLabel for="check-2">
            <FdInput value="2" name="checkbox-1" id="check-2" type="checkbox" />
            Option Two
          </FdFormLabel>
        </FdFormItem>
        <FdFormItem check>
          <FdFormLabel for="check-3">
            <FdInput value="3" name="checkbox-1" id="check-3" type="checkbox" />
            Option Three
          </FdFormLabel>
        </FdFormItem>
      </FdFormGroup>
    </FdFieldSet>

    <FdFieldSet>
      <FdLegend>Inline Checkboxes</FdLegend>
      <FdFormGroup>
        <FdFormItem check inline>
          <FdFormLabel for="inline-check-1">
            <FdInput checked={true} name="inline-check-1" id="inline-check-1" type="checkbox" />
            Option One
          </FdFormLabel>
        </FdFormItem>
        <FdFormItem check inline>
          <FdFormLabel for="inline-check-2">
            <FdInput name="inline-check-1" id="inline-check-2" type="checkbox" />
            Option Two
          </FdFormLabel>
        </FdFormItem>
        <FdFormItem check inline>
          <FdFormLabel for="inline-check-3">
            <FdInput name="inline-check-1" id="inline-check-3" type="checkbox" />
            Option Three
          </FdFormLabel>
        </FdFormItem>
      </FdFormGroup>
    </FdFieldSet>
  </div>
</template>