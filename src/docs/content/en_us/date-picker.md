---
fdRelatedComponents:
  - fd-date-picker
---

# Date Picker

`fd-date-picker` supports `v-model` and two different modes:

1. `single`: Allows the user to only pick/enter a single date.
2. `range`: Allows the user to pick/enter a date range.

::: tip

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

:::

## Default Date Pickers

<d-example name="date-picker-default">
</d-example>

## Customized Date Pickers

`fd-date-picker` has two slots that can be used to customize the calendar and input.

The `input`-slot must render a `fd-date-picker-input`-component.

The `calendar`-slot must render a `fd-date-picker-calendar`-component.

<d-example name="date-picker-custom">
</d-example>
