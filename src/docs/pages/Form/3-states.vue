<title>Input States</title>

<template>
    <FdFormSet>
      <FdFormItem label="Normal Input">
        <FdInput placeholder="Field placeholder text"/>
        <FdFormMessage slot="message">Pellentesque metus lacus commodo eget justo ut rutrum varius nunc</FdFormMessage>
      </FdFormItem>
      <FdFormItem label="Valid Input">
        <FdInput state="valid" placeholder="Field placeholder text"/>
      </FdFormItem>
      <FdFormItem label="Warning Input">
        <FdInput state="warning" placeholder="Field placeholder text"/>
        <FdFormMessage slot="message" type="warning">Pellentesque metus lacus commodo eget justo ut rutrum varius nunc</FdFormMessage>
      </FdFormItem>
      <FdFormItem label="Invalid Input">
        <FdInput state="invalid" placeholder="Field placeholder text"/>
        <FdFormMessage slot="message" type="error">Pellentesque metus lacus commodo eget justo ut rutrum varius nunc</FdFormMessage>
      </FdFormItem>
      <FdFormItem label="Field Label">
        <FdInput placeholder="Field placeholder text"/>
        <FdFormMessage slot="message" type="help" >Pellentesque metus lacus commodo eget justo ut rutrum varius nunc</FdFormMessage>
      </FdFormItem>
      <FdFormItem label="Disabled Input">
        <FdInput disabled placeholder="Field placeholder text"/>
      </FdFormItem>
      <FdFormItem label="Readonly Input">
        <FdInput readonly placeholder="Field placeholder text" value="Readonly Content"/>
      </FdFormItem>
    </FdFormSet>
</template>
