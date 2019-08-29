export interface NewNotificationOpts {
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

export type NotificationTypes = "default" | "warning" | "error" | "information" | "success";