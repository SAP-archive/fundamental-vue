# Message Strip
Message Strip provide inline messages within the application that are color-coded to emphasize the level of urgency.

## Default Message Strip
The Message Strip provides information that is useful and relevant, but not critical. It can also provide feedback that an action has been executed. In most cases, the user should be able to dismiss the Message Strip so include the modifier class fd-message-strip--dismissible and include the close button.


<d-example name="default">
</d-example>

## Error Message Strip

<d-example name="error">
</d-example>

## Warning Message Strip

<d-example name="warning">
</d-example>

## Success Message Strip

<d-example name="success">
</d-example>

## Information Message Strip

<d-example name="information">
</d-example>

## Using `@dismiss`
The example below shows a message strip that uses the `dismiss`–event in order to hide it when the *close button* is clicked.

<d-example name="dismiss">
</d-example>

## Customize
You can use `FdMessageStripText` in the `content`–slot in order to customize the rendering of the text inside the message strip.

The `close-button`–slot can be used to render a custom close button.

<d-example name="customized">
</d-example>