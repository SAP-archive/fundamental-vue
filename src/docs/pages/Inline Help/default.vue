<title>Inline Help</title>

<template>
  <div class='example-container'>
    <div>
      <span class='label'>Bottom Right (Default):</span>
      <FdInlineHelp>
        Lorem ipsum dolor sit amet, consectetur adipiscing.
      </FdInlineHelp>
    </div>
    <div>
      <span class='label'>Bottom Left:</span>
      <FdInlineHelp position='left'>
        Lorem ipsum dolor sit amet, consectetur adipiscing.
      </FdInlineHelp>
    </div>
    <div>
      <span class='label'>Right:</span>
      <FdInlineHelp inline position='right'>
        Lorem ipsum dolor sit amet, consectetur adipiscing.
      </FdInlineHelp>
    </div>
    <div>
      <span class='label'>Left:</span>
      <FdInlineHelp inline position='left'>
        Lorem ipsum dolor sit amet, consectetur adipiscing.
      </FdInlineHelp>
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


