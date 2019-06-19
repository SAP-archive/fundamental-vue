<title>Default Date</title>
<docs>
By default the calendar displays the current month. You can change that by setting  `default-value` to a custom date value.
</docs>

<tip>
`default-value` accepts values of type `Number`, `String` and `Date`. The `Number` or `String` you pass to `default-value` simply be forwarded to the `Date`'s constructor.
</tip>

<template>
  <div>
    <fd-calendar default-value="2010-02-01" />
  </div>
</template>
