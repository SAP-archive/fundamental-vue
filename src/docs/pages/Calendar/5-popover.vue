<title>Calendar in a Popover</title>
<docs>Calendars work best when displayed in a popover. You can use `FdPopover` for that.</docs>
<template>
  <div v-fd-padding:large>
    <FdPopover withArrow>
      <template #control="{toggle}">
        <FdButton @click="toggle">Pick Date</FdButton>
      </template>
      <div v-fd-padding:tiny>
        <FdCalendar />
      </div>
    </FdPopover>
  </div>
</template>
