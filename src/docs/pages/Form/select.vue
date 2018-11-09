<template>
  <div>
    <vf-form-set>
      <vf-form-item>
        <vf-form-label>Default Select</vf-form-label>
        <vf-select name="">
          <option value="1">Duis malesuada odio volutpat elementum</option>
          <option value="2">Suspendisse ante ligula</option>
          <option value="3">Sed bibendum sapien at posuere interdum</option>
        </vf-select>
      </vf-form-item>
    </vf-form-set>
    <vf-form-set>
      <vf-form-item>
        <vf-form-label>Disabled Select</vf-form-label>
        <vf-select disabled name="">
          <option value="1">Duis malesuada odio volutpat elementum</option>
          <option value="2">Suspendisse ante ligula</option>
          <option value="3">Sed bibendum sapien at posuere interdum</option>
        </vf-select>
      </vf-form-item>
    </vf-form-set>
  </div>
</template>