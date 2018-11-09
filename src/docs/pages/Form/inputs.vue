<template>
  <div>
    <vf-form-set>
      <vf-form-item>
        <vf-form-label>Default Input</vf-form-label>
        <vf-input placeholder="Field placeholder text"/>
      </vf-form-item>
    </vf-form-set>
    <vf-form-set>
      <vf-form-item>
        <vf-form-label required>Required Input</vf-form-label>
        <vf-input required placeholder="Field placeholder text"/>
      </vf-form-item>
    </vf-form-set>
    <vf-form-set>
      <vf-form-item>
        <vf-form-label required>Password Input</vf-form-label>
        <vf-input required type="password" placeholder="Field placeholder text" />
      </vf-form-item>
    </vf-form-set>
    <vf-form-set>
      <vf-form-item>
        <vf-form-label required>Text Input</vf-form-label>
        <vf-text-area required placeholder="Text placeholder"/>
      </vf-form-item>
    </vf-form-set>
  </div>
</template>