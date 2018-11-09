<template>
  <div>
    <vf-input-group>
      <template slot="before">$</template>
        <vf-input value="1234567" />
    </vf-input-group>
    <br />
    <vf-input-group>
      <template slot="after">€</template>
        <vf-input value="1234567" />
    </vf-input-group>
  </div>
</template>
