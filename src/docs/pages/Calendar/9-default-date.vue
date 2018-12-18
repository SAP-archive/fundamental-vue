<title>Default Date</title>
<docs>By default the calendar displays the current month. You can change that by setting  `defaultValue` to a custom date value.</docs>
<tip>`defaultValue` accepts values of type `Number`, `String` and `Date`. The `Number` or `String` you pass to `defaultValue` simply be forwarded to the `Date`'s constructor.</tip>

<template>
  <div>
    <FdCalendar defaultValue="2010-2-1" />
  </div>
</template>
