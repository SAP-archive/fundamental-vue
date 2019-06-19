<title>Calendar in a Popover</title>
<docs>Calendars work best when displayed in a popover. You can use `fd-popover` for that.</docs>
<template>
  <div v-fd-padding:large>
    <fd-popover withArrow>
      <template #control="{toggle}">
        <fd-button @click="toggle">Pick Date</fd-button>
      </template>
      <div v-fd-padding:tiny>
        <fd-calendar />
      </div>
    </fd-popover>
  </div>
</template>
