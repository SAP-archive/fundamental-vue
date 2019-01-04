<title>Controlling the First Day of Week</title>
<docs>By default the first day of the week is **Sunday**. You can customize that by using the `firstDayOfWeek`-prop. `firstDayOfWeek` accepts a number between `0` (default) and `6`. By setting `firstDayOfWeek` to `1` you basically set the first day of the week to **Monday**.</docs>
<tip>If you customize weekday names by using the `dayNames`-prop you do that independently from `firstDayOfWeek`. This means that even though you may have set a different `firstDayOfWeek`, the first name specified in `dayNames` is always and will always be the name for **Sunday**.</tip>
<template>
  <div>
    <FdCalendar :firstDayOfWeek=1 />
  </div>
</template>
