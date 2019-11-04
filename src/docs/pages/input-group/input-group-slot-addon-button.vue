<template>
  <div>
    <FdFieldset>
      <FdFormItem>
        <FdFormLabel>Left Aligned Icon Button Add-on with Icon:</FdFormLabel>
        <fd-input-group>
          <template #before>
            <fd-input-group-addon-button>
              <fd-input-group-button icon="globe" />
            </fd-input-group-addon-button>
          </template>
          <template #input>
            <fd-input-group-input placeholder="Enter Amount…" />
          </template>
        </fd-input-group>
      </FdFormItem>
    </FdFieldset>

    <FdFieldset>
      <FdFormItem>
        <FdFormLabel>Right Aligned Icon Button Add-on with Icon:</FdFormLabel>
        <fd-input-group>
          <template #after>
            <fd-input-group-addon-button>
              <fd-input-group-button icon="globe" />
            </fd-input-group-addon-button>
          </template>
          <template #input>
            <fd-input-group-input placeholder="Enter Amount…" />
          </template>
        </fd-input-group>
      </FdFormItem>
    </FdFieldset>

    <FdFieldset>
      <FdFormItem>
        <FdFormLabel>Left Aligned Icon Button Add-on:</FdFormLabel>
        <fd-input-group>
          <template #before>
            <fd-input-group-addon-button>
              <fd-input-group-button>Submit</fd-input-group-button>
            </fd-input-group-addon-button>
          </template>
          <template #input>
            <fd-input-group-input placeholder="Enter Amount…" />
          </template>
        </fd-input-group>
      </FdFormItem>
    </FdFieldset>

    <FdFieldset>
      <FdFormItem>
        <FdFormLabel>Right Aligned Icon Button Add-on:</FdFormLabel>
        <fd-input-group>
          <template #after>
            <fd-input-group-addon-button>
              <fd-input-group-button>Submit</fd-input-group-button>
            </fd-input-group-addon-button>
          </template>
          <template #input>
            <fd-input-group-input placeholder="Enter Amount…" />
          </template>
        </fd-input-group>
      </FdFormItem>
    </FdFieldset>
  </div>
</template>
