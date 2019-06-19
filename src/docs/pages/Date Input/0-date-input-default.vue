<title>Default Date Input</title>
<docs>
`fd-date-input` can be used to get date + date range inputs from a user. Currently `fd-date-input` is used by `fd-date-picker` but you can also use it on it's own if you want.
</docs>
<template>
  <div>
    <fd-date-input v-model="date" />
  </div>
</template>

<script>
export default {
  data: () => ({ date: { from: new Date(2019, 1, 13), to: null } })
};
</script>
