<template>
  <div>
    <fd-input-group>
      <template #before>
        <fd-input-group-addon>
          <fd-icon name="accelerated" />
        </fd-input-group-addon>
      </template>
      <template #input>
        <fd-input placeholder="Enter Amount…" />
      </template>
    </fd-input-group>
    <br />
    <fd-input-group>
      <template #after>
        <fd-input-group-addon>$</fd-input-group-addon>
      </template>
      <template #input>
        <fd-input placeholder="Enter Amount…" />
      </template>
    </fd-input-group>
  </div>
</template>
