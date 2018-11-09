<template>
  <div>
    <vf-field-set>
      <vf-legend>Checkboxes</vf-legend>
      <vf-form-group>
        <vf-form-item check>
          <vf-form-label for="check-1">
          <vf-input  value="1" checked={true} name="checkbox-1" id="check-1" type="checkbox" />
            Option One
          </vf-form-label>
        </vf-form-item>
        <vf-form-item check>
          <vf-form-label for="check-2">
            <vf-input value="2" name="checkbox-1" id="check-2" type="checkbox" />
            Option Two
          </vf-form-label>
        </vf-form-item>
        <vf-form-item check>
          <vf-form-label for="check-3">
            <vf-input value="3" name="checkbox-1" id="check-3" type="checkbox" />
            Option Three
          </vf-form-label>
        </vf-form-item>
      </vf-form-group>
    </vf-field-set>

    <vf-field-set>
      <vf-legend>Inline Checkboxes</vf-legend>
      <vf-form-group>
        <vf-form-item check inline>
          <vf-form-label for="inline-check-1">
            <vf-input checked={true} name="inline-check-1" id="inline-check-1" type="checkbox" />
            Option One
          </vf-form-label>
        </vf-form-item>
        <vf-form-item check inline>
          <vf-form-label for="inline-check-2">
            <vf-input name="inline-check-1" id="inline-check-2" type="checkbox" />
            Option Two
          </vf-form-label>
        </vf-form-item>
        <vf-form-item check inline>
          <vf-form-label for="inline-check-3">
            <vf-input name="inline-check-1" id="inline-check-3" type="checkbox" />
            Option Three
          </vf-form-label>
        </vf-form-item>
      </vf-form-group>
    </vf-field-set>
  </div>
</template>