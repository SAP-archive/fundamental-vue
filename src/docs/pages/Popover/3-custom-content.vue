<title>Popover with custom Body</title>
<tip>You can display almost anything inside the popover's body, not just menu items.</tip>

<template>
<div>
  <!-- div is needed: otherwise the popover will not be positioned correctly -->
  <FdPopover title="Show Custom Content">
    <div v-padding:large style="text-align:center;">
      <div v-type:6>Hello World</div>
      <hr />
      <FdIdentifier circle size="xxl" thumbnail url="https://placeimg.com/400/400/nature"/>
    </div>
  </FdPopover>
</div>
</template>
