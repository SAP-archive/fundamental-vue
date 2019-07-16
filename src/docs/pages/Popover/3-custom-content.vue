<title>Popover with custom Content</title>
<template>
  <FdPopover placement="bottom-start" with-arrow>
    <template #control="{toggle}">
      <FdButton @click="toggle">Custom Content</FdButton>
    </template>

    <template #default="{hide}">
      <div v-fd-padding:large style="text-align:center;">
        <div v-fd-type:6>Hello World</div>
        <hr />
        <FdIdentifier circle size="xxl" thumbnail url="https://placeimg.com/400/400/nature" />
      </div>
    </template>
  </FdPopover>
</template>
