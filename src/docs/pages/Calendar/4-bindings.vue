<title>Calendar & `v-model`</title>
<docs>
`fd-calendar` supports `v-model`. The example below shows two calendars bound to the same model.
</docs>
<template>
  <div>
    <div style="display:flex;">
      <fd-calendar mode="range" v-model="date" />
      <fd-calendar mode="range" v-model="date" />
    </div>
    <p>
      <strong>From:</strong>
      {{ date.from }}
    </p>
    <p>
      <strong>To:</strong>
      {{ date.to }}
    </p>
  </div>
</template>

<script>
export default {
  data: () => ({
    date: {
      from: null,
      to: null
    }
  })
};
</script>
