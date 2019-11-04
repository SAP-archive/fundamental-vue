<template>
  <div>
    <FdFieldset>
      <FdFormItemText label="Normal Input">
        <FdTextInput placeholder="Field placeholder text" />
        <template #message>
          <FdFormMessage>
            Pellentesque metus lacus commodo eget justo ut rutrum varius nunc
          </FdFormMessage>
        </template>
      </FdFormItemText></FdFieldset
    >

    <FdFieldset>
      <FdFormItemText label="Valid Input">
        <FdTextInput state="valid" placeholder="Field placeholder text" /> </FdFormItemText
    ></FdFieldset>

    <FdFieldset>
      <FdFormItemText label="Warning Input">
        <FdTextInput state="warning" placeholder="Field placeholder text" />
        <template #message>
          <FdFormMessage type="warning">
            Pellentesque metus lacus commodo eget justo ut rutrum varius nunc
          </FdFormMessage>
        </template>
      </FdFormItemText></FdFieldset
    >

    <FdFieldset>
      <FdFormItemText label="Invalid Input">
        <FdTextInput state="invalid" placeholder="Field placeholder text" />
        <template #message>
          <FdFormMessage type="error">
            Pellentesque metus lacus commodo eget justo ut rutrum varius nunc
          </FdFormMessage>
        </template>
      </FdFormItemText></FdFieldset
    >

    <FdFieldset>
      <FdFormItemText label="Field Label">
        <FdTextInput placeholder="Field placeholder text" />
        <FdFormMessage slot="message" type="help">
          Pellentesque metus lacus commodo eget justo ut rutrum varius nunc
        </FdFormMessage>
      </FdFormItemText></FdFieldset
    >

    <FdFieldset>
      <FdFormItemText label="Disabled Input">
        <FdTextInput disabled placeholder="Field placeholder text" /> </FdFormItemText
    ></FdFieldset>

    <FdFieldset>
      <FdFormItemText label="Readonly Input">
        <FdTextInput
          readonly
          placeholder="Field placeholder text"
          value="Readonly Content"
        /> </FdFormItemText
    ></FdFieldset>
  </div>
</template>
