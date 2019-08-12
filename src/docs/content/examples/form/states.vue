<template>
  <fd-field-set>
    <fd-form-item>
      <fd-form-label>Normal Input</fd-form-label>
      <fd-input placeholder="Field placeholder text" />
      <template #message>
        <fd-form-message>
          Pellentesque metus lacus commodo eget justo ut rutrum varius nunc
        </fd-form-message>
      </template>
    </fd-form-item>

    <fd-form-item>
      <fd-form-label>Valid Input</fd-form-label>
      <fd-input state="valid" placeholder="Field placeholder text" />
    </fd-form-item>

    <fd-form-item>
      <fd-form-label>Warning Input</fd-form-label>
      <fd-input state="warning" placeholder="Field placeholder text" />
      <template #message>
        <fd-form-message type="warning">
          Pellentesque metus lacus commodo eget justo ut rutrum varius nunc
        </fd-form-message>
      </template>
    </fd-form-item>

    <fd-form-item>
      <fd-form-label>Invalid Input</fd-form-label>
      <fd-input state="invalid" placeholder="Field placeholder text" />
      <template #message>
        <fd-form-message type="error">
          Pellentesque metus lacus commodo eget justo ut rutrum varius nunc
        </fd-form-message>
      </template>
    </fd-form-item>

    <fd-form-item>
      <fd-form-label>Field Label</fd-form-label>
      <fd-input placeholder="Field placeholder text" />
      <fd-form-message slot="message" type="help">
        Pellentesque metus lacus commodo eget justo ut rutrum varius nunc
      </fd-form-message>
    </fd-form-item>

    <fd-form-item>
      <fd-form-label>Disabled Input</fd-form-label>
      <fd-input disabled placeholder="Field placeholder text" />
    </fd-form-item>

    <fd-form-item>
      <fd-form-label>Readonly Input</fd-form-label>
      <fd-input readonly placeholder="Field placeholder text" value="Readonly Content" />
    </fd-form-item>
  </fd-field-set>
</template>
