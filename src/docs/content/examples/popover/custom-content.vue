<template>
  <fd-popover placement="bottom-start" with-arrow>
    <template #control="{toggle}">
      <fd-button @click="toggle">Custom Content</fd-button>
    </template>

    <template #default="{hide}">
      <div v-fd-padding:large style="text-align:center;">
        <div v-fd-type:6>Hello World</div>
        <hr />
        <fd-identifier circle size="xxl" thumbnail url="https://placeimg.com/400/400/nature" />
      </div>
    </template>
  </fd-popover>
</template>
