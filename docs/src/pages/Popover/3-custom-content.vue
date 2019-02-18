<title>Popover with custom Body</title>
<tip>Use the `body`-slot to display custom content in a popover.</tip>

<template>
  <div>
    <!-- div is needed: otherwise the popover will not be positioned correctly -->
    <FdPopover title="Show Custom Content">
      <div slot="body" v-padding:large style="text-align:center;">
        <div v-type:6>Hello World</div>
        <hr />
        <FdIdentifier
          circle
          size="xxl"
          thumbnail
          url="https://placeimg.com/400/400/nature"
        />
      </div>
    </FdPopover>
  </div>
</template>
