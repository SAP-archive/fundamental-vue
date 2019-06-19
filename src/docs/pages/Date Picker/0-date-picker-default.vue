<title>Default Date Pickers</title>
<docs>
`fd-date-picker` supports `v-model` and two different modes:

1. `single`: Allows the user to only pick/enter a single date.
2. `range`: Allows the user to pick/enter a date range.
</docs>

<tip>
`fd-date-picker` has a `value`-prop that holds the current date/date range. This object always has the same structure – no matter the current `mode`.

The general structure of the expected `value`s looks like this:

```typescript
interface DateValue {
  from?: Date;
  to?: Date;
}
```

If `mode` is set to `"single"` only the `from`-date is relevant.
If `mode` is set to `"range"` both properties represent the range.
</tip>

<template>
  <div>
    <fd-form-item>
      <fd-form-label>Simple Date Picker</fd-form-label>
      <fd-date-picker v-model="date" />
    </fd-form-item>

    <fd-form-item>
      <fd-form-label>Range Date Picker</fd-form-label>
      <fd-date-picker mode="range" v-model="range" />
    </fd-form-item>
  </div>
</template>

<script>
export default {
  data() {
    const today = () => new Date(Date.now());
    const dayAfterTomorrow = today();
    dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 3);

    return {
      range: { from: today(), to: dayAfterTomorrow },
      date: { from: today(), to: null }
    };
  }
};
</script>
