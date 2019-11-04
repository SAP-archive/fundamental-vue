<template>
  <div>
    <FdFieldset>
      <fd-input-group>
        <template #before>
          <fd-input-group-addon>
            <fd-icon name="accelerated" />
          </fd-input-group-addon>
        </template>
        <template #input>
          <fd-input-group-input placeholder="Enter Amount…" />
        </template>
      </fd-input-group>
    </FdFieldset>

    <FdFieldset>
      <fd-input-group>
        <template #after>
          <fd-input-group-addon>$</fd-input-group-addon>
        </template>
        <template #input>
          <fd-input-group-input placeholder="Enter Amount…" />
        </template>
      </fd-input-group>
    </FdFieldset>
  </div>
</template>
