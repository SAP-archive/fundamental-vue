<template>
  <div>
    <FdFormSet>
      <FdFormItem>
        <FdFormLabel for="normal-input">Normal Input</FdFormLabel>
        <FdInput id="normal-input" placeholder="Field placeholder text"/>
        <FdFormMessage>Pellentesque metus lacus commodo eget justo ut rutrum varius nunc</FdFormMessage>
      </FdFormItem>
    </FdFormSet>
    <FdFormSet>
      <FdFormItem>
        <FdFormLabel for="valid-input">Valid Input</FdFormLabel>
        <FdInput id="valid-input" state="valid" placeholder="Field placeholder text"/>
      </FdFormItem>
    </FdFormSet>
    <FdFormSet>
      <FdFormItem>
        <FdFormLabel for="warning-input">Warning Input</FdFormLabel>
        <FdInput id="warning-input" state="warning" placeholder="Field placeholder text"/>
        <FdFormMessage
          type="warning"
        >Pellentesque metus lacus commodo eget justo ut rutrum varius nunc</FdFormMessage>
      </FdFormItem>
    </FdFormSet>
    <FdFormSet>
      <FdFormItem>
        <FdFormLabel for="invalid-input">Invalid Input</FdFormLabel>
        <FdInput id="invalid-input" state="invalid" placeholder="Field placeholder text"/>
        <FdFormMessage
          type="error"
        >Pellentesque metus lacus commodo eget justo ut rutrum varius nunc</FdFormMessage>
      </FdFormItem>
    </FdFormSet>
    <FdFormSet>
      <FdFormItem>
        <FdFormLabel for="question-input">Field Label</FdFormLabel>
        <FdInput id="question-input" placeholder="Field placeholder text"/>
        <FdFormMessage
          type="help"
        >Pellentesque metus lacus commodo eget justo ut rutrum varius nunc</FdFormMessage>
      </FdFormItem>
    </FdFormSet>
    <FdFormSet>
      <FdFormItem>
        <FdFormLabel for="disabled-input">Disabled Input</FdFormLabel>
        <FdInput is-disabled id="disabled-input" placeholder="Field placeholder text"/>
      </FdFormItem>
    </FdFormSet>
    <FdFormSet>
      <FdFormItem>
        <FdFormLabel for="readonly-input">Readonly Input</FdFormLabel>
        <FdInput
          is-readonly
          id="readonly-input"
          placeholder="Field placeholder text"
          value="Readonly Content"
        />
      </FdFormItem>
    </FdFormSet>
  </div>
</template>