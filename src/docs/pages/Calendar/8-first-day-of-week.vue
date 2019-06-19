<title>Controlling the First Day of Week</title>

<docs>
By default the first day of the week is **Sunday**. You can customize that by using the `first-day-of-week`-prop. `first-day-of-week` accepts a number between `0` (default) and `6`. By setting `first-day-of-week` to `1` you basically set the first day of the week to **Monday**.
</docs>

<tip>
If you customize weekday names by using the `day-names`-prop you do that independently from `first-day-of-week`. This means that even though you may have set a different `first-day-of-week`, the first name specified in `day-names` is always and will always be the name for **Sunday**.
</tip>
<template>
  <div>
    <fd-calendar :first-day-of-week="1" />
  </div>
</template>
