---
fdRelatedComponents:
  - fd-alert
  - fd-notifications
---

# Alert

## Default Alert
<d-example name="default">
</d-example>

## Warning Alert
<d-example name="warning">
</d-example>

## Error Alert
<d-example name="error">
</d-example>

## Success Alert
<d-example name="success">
</d-example>

## Information Alert
<d-example name="information">
</d-example>

## Alert and `v-model`

::: tip
`fd-alert` supports `v-model`. You can use `v-model` to control the visibility of the alert.
:::

<d-example name="vmodel">
</d-example>

# Notifications Service

When you use `FundamentalVue` we automatically register `fdNotifications` on the vue instance and `$fdNotifications` on the prototype. This service contains functions which will allow you to show/hide notifications from any component.
To use it, you have to first create an instance of `fd-notifications` component and then you can call the functions on `this.$fdNotifications`.
The tree available functions are:
- **hideAll(group?)**: dismisses all the notifications from `<group>` if a group name was passed as a param, otherwise dismisses all notifications from all the groups
- **hide({group?, id})**: dismisses the notification from group `<group>` with id `<id>`
- **show(opts)**: creates a new notification and returns the created notification's `id`

::: tip
it is recommended to put the `fd-notifications` component on the highest level possible so that all subcomponents can use it. If notifications will be used across all of your app then place it in your root app component.
:::

Below is the type definition of the **show(opts)** function.
 
```js
interface NewNotificationOpts {
    // if not provided then a random one will be automatically generated
    id?: string;
    // specifies the target group, in case the user has multiple named 
    // notifications groups defined.
    group?: string;
    // can be html content
    title?: string;
    // can be an html content
    content: string;
    // the type that will be forwarded to the underlying alert component
    type: NotificationTypes;
    // determines whether the user can dismiss a notification by clicking on it
    // default value: true
    dismissible?: boolean;
    // determines whether the notification should be dismissed automatically or not
    // default value: false
    permanent: boolean;
    // if set, the notification will be automatically cleared after <timeout>ms
    // in case `permanent` was set to `true` and a timeout was set, then the 
    // `permanent` property will be ignored
    // default value (in case `permanent: false` and no value assigned): 2000
    timeout?: number;
    // optional callback function that will receive the notification opts object
    // as a param and will be called once the notification has been removed from the list
    onDismiss?: Function;
}

type NotificationTypes = "default" | "warning" | "error" | "information" | "success";
```


## Defaults
<d-example fullscreen-only name="notifications-default">
</d-example>

## Multiple Groups and Positions
You can create multiple instances of `fd-notifications` component each with a different configuration. Using the `group` prop you can set the name of the underlying notifications group so that you could target it when calling the **fdNotifications.show(opts)** method. You would most likely want to set a different position for each group, which can be done using the `position` prop. This prop accepts an array of 2 strings to set the location and orientation. The default value is `["top", "right"]` (possible values are: `["bottom", "top"]` for the first element and `["left", "right", "center"]` for the second).

::: tip

You can also pass in a `custom-styles` prop to the `fd-notifications` to control some of the css properties. By default the property `maxWidth: 400px` is set, and you can override it with the aforementioned prop.

:::

<d-example fullscreen-only name="notifications-group">
</d-example>

 