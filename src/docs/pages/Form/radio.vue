<title>Radio Buttons</title>

<template>
  <div>
    <FdFieldSet>
      <FdLegend>Radio Buttons</FdLegend>
      <FdFormGroup>
        <FdFormItem check>
          <FdFormLabel for="radio-1">
            <FdInput value="1" checked={true} name="radio-1" id="radio-1" type="radio" />
            Option One
          </FdFormLabel>
        </FdFormItem>
        <FdFormItem check>
          <FdFormLabel for="radio-2">
            <FdInput value="2" name="radio-1" id="radio-2" type="radio" />
            Option Two
          </FdFormLabel>
        </FdFormItem>
        <FdFormItem check>
          <FdFormLabel for="radio-3">
            <FdInput value="3" name="radio-1" id="radio-3" type="radio" />
            Option Three
          </FdFormLabel>
        </FdFormItem>
      </FdFormGroup>
    </FdFieldSet>

    <FdFieldSet>
      <FdLegend>Inline Radio Buttons</FdLegend>
      <FdFormGroup>
        <FdFormItem check inline>
          <FdFormLabel for="inline-radio-1">
            <FdInput checked={true} name="inline-radio-1" id="inline-radio-1" type="radio" />
            Option One
          </FdFormLabel>
        </FdFormItem>
        <FdFormItem check inline>
          <FdFormLabel for="inline-radio-2">
            <FdInput name="inline-radio-1" id="inline-radio-2" type="radio" />
            Option Two
          </FdFormLabel>
        </FdFormItem>
        <FdFormItem check inline>
          <FdFormLabel for="inline-radio-3">
            <FdInput name="inline-radio-1" id="inline-radio-3" type="radio" />
            Option Three
          </FdFormLabel>
        </FdFormItem>
      </FdFormGroup>
    </FdFieldSet>
  </div>
</template>