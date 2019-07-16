<title>Input States</title>

<template>
  <fd-field-set>
    <fd-form-item label="Normal Input">
      <FdInput placeholder="Field placeholder text" />
      <FdFormMessage slot="message">
        Pellentesque metus lacus commodo eget justo ut rutrum varius nunc
      </FdFormMessage>
    </fd-form-item>
    <fd-form-item label="Valid Input">
      <FdInput state="valid" placeholder="Field placeholder text" />
    </fd-form-item>
    <fd-form-item label="Warning Input">
      <FdInput state="warning" placeholder="Field placeholder text" />
      <FdFormMessage slot="message" type="warning">
        Pellentesque metus lacus commodo eget justo ut rutrum varius nunc
      </FdFormMessage>
    </fd-form-item>
    <fd-form-item label="Invalid Input">
      <FdInput state="invalid" placeholder="Field placeholder text" />
      <FdFormMessage slot="message" type="error">
        Pellentesque metus lacus commodo eget justo ut rutrum varius nunc
      </FdFormMessage>
    </fd-form-item>
    <fd-form-item label="Field Label">
      <FdInput placeholder="Field placeholder text" />
      <FdFormMessage slot="message" type="help">
        Pellentesque metus lacus commodo eget justo ut rutrum varius nunc
      </FdFormMessage>
    </fd-form-item>
    <fd-form-item label="Disabled Input">
      <FdInput disabled placeholder="Field placeholder text" />
    </fd-form-item>
    <fd-form-item label="Readonly Input">
      <FdInput readonly placeholder="Field placeholder text" value="Readonly Content" />
    </fd-form-item>
  </fd-field-set>
</template>
