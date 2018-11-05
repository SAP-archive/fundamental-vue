<template>
  <div>
    <FdFormSet>
      <FdFormItem>
        <FdFormLabel>Default Input</FdFormLabel>
        <FdInput placeholder="Field placeholder text"/>
      </FdFormItem>
    </FdFormSet>
    <FdFormSet>
      <FdFormItem>
        <FdFormLabel required>Required Input</FdFormLabel>
        <FdInput required placeholder="Field placeholder text"/>
      </FdFormItem>
    </FdFormSet>
    <FdFormSet>
      <FdFormItem>
        <FdFormLabel required>Password Input</FdFormLabel>
        <FdInput required type="password" placeholder="Field placeholder text" />
      </FdFormItem>
    </FdFormSet>
    <FdFormSet>
      <FdFormItem>
        <FdFormLabel required>Text Input</FdFormLabel>
        <FdTextArea required placeholder="Text placeholder"/>
      </FdFormItem>
    </FdFormSet>
  </div>
</template>