<template>
  <div class='example-container'>
    <div>
      <span class='label'>Bottom Right (Default):</span>
      <vf-inline-help>
        Lorem ipsum dolor sit amet, consectetur adipiscing.
      </vf-inline-help>
    </div>
    <div>
      <span class='label'>Bottom Left:</span>
      <vf-inline-help position='left'>
        Lorem ipsum dolor sit amet, consectetur adipiscing.
      </vf-inline-help>
    </div>
    <div>
      <span class='label'>Right:</span>
      <vf-inline-help inline position='right'>
        Lorem ipsum dolor sit amet, consectetur adipiscing.
      </vf-inline-help>
    </div>
    <div>
      <span class='label'>Left:</span>
      <vf-inline-help inline position='left'>
        Lorem ipsum dolor sit amet, consectetur adipiscing.
      </vf-inline-help>
    </div>
  </div>
</template>
<style scoped>
  .example-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .label {
    margin: 0 0.5rem 0 2rem;
  }
</style>


