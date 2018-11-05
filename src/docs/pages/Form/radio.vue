<template>
  <div>
    <vf-field-set>
      <vf-legend>Radio Buttons</vf-legend>
      <vf-form-group>
        <vf-form-item check>
          <vf-form-label for="radio-1">
            <vf-input value="1" checked={true} name="radio-1" id="radio-1" type="radio" />
            Option One
          </vf-form-label>
        </vf-form-item>
        <vf-form-item check>
          <vf-form-label for="radio-2">
            <vf-input value="2" name="radio-1" id="radio-2" type="radio" />
            Option Two
          </vf-form-label>
        </vf-form-item>
        <vf-form-item check>
          <vf-form-label for="radio-3">
            <vf-input value="3" name="radio-1" id="radio-3" type="radio" />
            Option Three
          </vf-form-label>
        </vf-form-item>
      </vf-form-group>
    </vf-field-set>

    <vf-field-set>
      <vf-legend>Inline Radio Buttons</vf-legend>
      <vf-form-group>
        <vf-form-item check inline>
          <vf-form-label for="inline-radio-1">
            <vf-input checked={true} name="inline-radio-1" id="inline-radio-1" type="radio" />
            Option One
          </vf-form-label>
        </vf-form-item>
        <vf-form-item check inline>
          <vf-form-label for="inline-radio-2">
            <vf-input name="inline-radio-1" id="inline-radio-2" type="radio" />
            Option Two
          </vf-form-label>
        </vf-form-item>
        <vf-form-item check inline>
          <vf-form-label for="inline-radio-3">
            <vf-input name="inline-radio-1" id="inline-radio-3" type="radio" />
            Option Three
          </vf-form-label>
        </vf-form-item>
      </vf-form-group>
    </vf-field-set>
  </div>
</template>