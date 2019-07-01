---
fdRelatedComponents:
  - fd-calendar
---

# Calendar

The `fd-calendar` component is usually displayed inside an `fd-popover`. Scroll down to see an example if you are unsure how to do that. Even though the calendar is a very complex component getting started is as easy as pie. This

```html
<fd-calendar />
```

gets you the default calendar displayed below. `fd-calendar` has a lot of customization points. Please refer to the examples below for details.

## Default Calendar

::: tip

`fd-calendar` is still under heavy development. Things might break.

:::

<d-example name="default">
</d-example>

## Calendar Rangle Selection

By default you can only select a single date. To change that simply set the `selectionMode` to 'range'.

<d-example name="selection-range">
</d-example>

## Calendar with blocked Items

<d-example name="blocked-items">
</d-example>

## Calendar with Disabled Items

<d-example name="disabled-items">
</d-example>

## Calendar & `v-model`

`fd-calendar` supports `v-model`. The example below shows two calendars bound to the same model.

<d-example name="bindings">
</d-example>

## Calendar in a Popover

Calendars work best when displayed in a popover. You can use `fd-popover` for that.

<d-example name="popover">
</d-example>

## Calendar with custom Names

::: tip
You can customize the names (day of week and month of year)  displayed in the calendar by using the props `dayNames` and `monthNames`. This is also how you would implement i18n.
:::

<d-example name="custom-names">
</d-example>

## Controlling Calendar Buttons
The `hasNext` and `hasPrevious` props can be used to control the next and previous buttons in the calendar header. Those props are functions that return either `true` or `false`. Returning `false` disables the corresponding button. The calendar passes an object containing the `min` and `max` date of the currently displayed month.

::: tip
The example below let's you go three month into the future and past by using the previous and next buttons in the header. By using the year and month picker the user can still go to months/years that are not reachable with previous and next buttons.
:::

<d-example name="buttons">
</d-example>

## Controlling the First Day of Week

By default the first day of the week is **Sunday**. You can customize that by using the `first-day-of-week`-prop. `first-day-of-week` accepts a number between `0` (default) and `6`. By setting `first-day-of-week` to `1` you basically set the first day of the week to **Monday**.

::: tip
If you customize weekday names by using the `day-names`-prop you do that independently from `first-day-of-week`. This means that even though you may have set a different `first-day-of-week`, the first name specified in `day-names` is always and will always be the name for **Sunday**.
:::

<d-example name="first-day-of-week">
</d-example>

## Default Date

By default the calendar displays the current month. You can change that by setting  `default-value` to a custom date value.


::: tip
`default-value` accepts values of type `Number`, `String` and `Date`. The `Number` or `String` you pass to `default-value` simply be forwarded to the `Date`'s constructor.
:::

<d-example name="default-date">
</d-example>

## Calendar without the Header

You can hide the header by setting `header-visible` to `false`. Without a header it is hard to tell which date is displayed/selected. Thus it is a good idea to render the currently displayed/selected date separately.

<d-example name="no-header">
</d-example>
