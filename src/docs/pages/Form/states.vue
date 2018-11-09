<template>
  <div>
    <vf-form-set>
      <vf-form-item>
        <vf-form-label for="normal-input">Normal Input</vf-form-label>
        <vf-input id="normal-input" placeholder="Field placeholder text"/>
        <vf-form-message>Pellentesque metus lacus commodo eget justo ut rutrum varius nunc</vf-form-message>
      </vf-form-item>
    </vf-form-set>
    <vf-form-set>
      <vf-form-item>
        <vf-form-label for="valid-input">Valid Input</vf-form-label>
        <vf-input id="valid-input" state="valid" placeholder="Field placeholder text"/>
      </vf-form-item>
    </vf-form-set>
    <vf-form-set>
      <vf-form-item>
        <vf-form-label for="warning-input">Warning Input</vf-form-label>
        <vf-input id="warning-input" state="warning" placeholder="Field placeholder text"/>
        <vf-form-message
          type="warning"
        >Pellentesque metus lacus commodo eget justo ut rutrum varius nunc</vf-form-message>
      </vf-form-item>
    </vf-form-set>
    <vf-form-set>
      <vf-form-item>
        <vf-form-label for="invalid-input">Invalid Input</vf-form-label>
        <vf-input id="invalid-input" state="invalid" placeholder="Field placeholder text"/>
        <vf-form-message
          type="error"
        >Pellentesque metus lacus commodo eget justo ut rutrum varius nunc</vf-form-message>
      </vf-form-item>
    </vf-form-set>
    <vf-form-set>
      <vf-form-item>
        <vf-form-label for="question-input">Field Label</vf-form-label>
        <vf-input id="question-input" placeholder="Field placeholder text"/>
        <vf-form-message
          type="help"
        >Pellentesque metus lacus commodo eget justo ut rutrum varius nunc</vf-form-message>
      </vf-form-item>
    </vf-form-set>
    <vf-form-set>
      <vf-form-item>
        <vf-form-label for="disabled-input">Disabled Input</vf-form-label>
        <vf-input is-disabled id="disabled-input" placeholder="Field placeholder text"/>
      </vf-form-item>
    </vf-form-set>
    <vf-form-set>
      <vf-form-item>
        <vf-form-label for="readonly-input">Readonly Input</vf-form-label>
        <vf-input
          is-readonly
          id="readonly-input"
          placeholder="Field placeholder text"
          value="Readonly Content"
        />
      </vf-form-item>
    </vf-form-set>
  </div>
</template>