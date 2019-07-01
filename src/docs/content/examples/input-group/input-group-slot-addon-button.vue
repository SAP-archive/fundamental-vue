<template>
  <div>
    <fd-form-item>
      <fd-form-label>Left Aligned Icon Button Add-on with Icon:</fd-form-label>
      <fd-input-group>
        <template #before>
          <fd-input-group-addon>
            <fd-input-group-button icon="globe" />
          </fd-input-group-addon>
        </template>
        <template #input>
          <fd-input placeholder="Enter Amount…" />
        </template>
      </fd-input-group>
    </fd-form-item>

    <fd-form-item>
      <fd-form-label>Right Aligned Icon Button Add-on with Icon:</fd-form-label>
      <fd-input-group>
        <template #after>
          <fd-input-group-addon>
            <fd-input-group-button icon="globe" />
          </fd-input-group-addon>
        </template>
        <template #input>
          <fd-input placeholder="Enter Amount…" />
        </template>
      </fd-input-group>
    </fd-form-item>

    <fd-form-item>
      <fd-form-label>Left Aligned Icon Button Add-on:</fd-form-label>
      <fd-input-group>
        <template #before>
          <fd-input-group-addon>
            <fd-input-group-button>Submit</fd-input-group-button>
          </fd-input-group-addon>
        </template>
        <template #input>
          <fd-input placeholder="Enter Amount…" />
        </template>
      </fd-input-group>
    </fd-form-item>

    <fd-form-item>
      <fd-form-label>Right Aligned Icon Button Add-on:</fd-form-label>
      <fd-input-group>
        <template #after>
          <fd-input-group-addon>
            <fd-input-group-button>Submit</fd-input-group-button>
          </fd-input-group-addon>
        </template>
        <template #input>
          <fd-input placeholder="Enter Amount…" />
        </template>
      </fd-input-group>
    </fd-form-item>
  </div>
</template>
