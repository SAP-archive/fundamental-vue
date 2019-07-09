---
fdRelatedComponents:
  - fd-time
  - fd-time-item
  - fd-time-picker
---

# Time Picker

## Default Time Picker

::: example default
:::

## Time

The `FdTime` component is used for a single time value. Multiple components can be used in the time-picker to assemble a clock time. A max of four will account for hours, minutes, seconds and period of the day.
```
<FdTime />
```
It will be rare to see this component used outside of it being composed in the time-picker component.

::: example time
:::

## Time Item as a set of Time

This shows a composition of four `FdTime` components to create a TimeItem. If this is the plan, it is suggested to use the TimeItem component instead.

::: example multiple-times
:::
