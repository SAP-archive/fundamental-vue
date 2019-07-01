<template>
  <fd-field-set>
    <fd-form-item label="Normal Input">
      <fd-input placeholder="Field placeholder text" />
      <fd-form-message slot="message">
        Pellentesque metus lacus commodo eget justo ut rutrum varius nunc
      </fd-form-message>
    </fd-form-item>
    <fd-form-item label="Valid Input">
      <fd-input state="valid" placeholder="Field placeholder text" />
    </fd-form-item>
    <fd-form-item label="Warning Input">
      <fd-input state="warning" placeholder="Field placeholder text" />
      <fd-form-message slot="message" type="warning">
        Pellentesque metus lacus commodo eget justo ut rutrum varius nunc
      </fd-form-message>
    </fd-form-item>
    <fd-form-item label="Invalid Input">
      <fd-input state="invalid" placeholder="Field placeholder text" />
      <fd-form-message slot="message" type="error">
        Pellentesque metus lacus commodo eget justo ut rutrum varius nunc
      </fd-form-message>
    </fd-form-item>
    <fd-form-item label="Field Label">
      <fd-input placeholder="Field placeholder text" />
      <fd-form-message slot="message" type="help">
        Pellentesque metus lacus commodo eget justo ut rutrum varius nunc
      </fd-form-message>
    </fd-form-item>
    <fd-form-item label="Disabled Input">
      <fd-input disabled placeholder="Field placeholder text" />
    </fd-form-item>
    <fd-form-item label="Readonly Input">
      <fd-input readonly placeholder="Field placeholder text" value="Readonly Content" />
    </fd-form-item>
  </fd-field-set>
</template>
