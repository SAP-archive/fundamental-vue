<title>Inputs</title>
<tip>If you omit <code>id</code>- and <code>for</code>-attributes of a <code>vf-input</code> and/or a <code>vf-label</code> then automatically generated ids will be used. As soon a  <code>vf-input</code> or <code>vf-label</code> is a descendant of an <code>vf-input-item</code> this *magic* happens. <code>vf-input-item</code> generates the unique id and injects it in it's descendants.</tip>

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