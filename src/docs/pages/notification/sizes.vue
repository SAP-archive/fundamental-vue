<template>
  <div>
    <FdNotification>
      <FdNotificationHeader>
        <FdNotificationTitle>Large (default) Standard Notification</FdNotificationTitle>
        <FdNotificationCloseButton />
      </FdNotificationHeader>
      <FdNotificationContent>
        <FdNotificationText>
          <FdNotificationDescription>
            And a Notification Description
          </FdNotificationDescription>
        </FdNotificationText>
      </FdNotificationContent>
    </FdNotification>

    <FdNotification size="m">
      <FdNotificationHeader>
        <FdNotificationTitle>Medium Standard Notification</FdNotificationTitle>
        <FdNotificationCloseButton />
      </FdNotificationHeader>
      <FdNotificationContent>
        <FdNotificationText>
          <FdNotificationDescription>
            And a Notification Description
          </FdNotificationDescription>
        </FdNotificationText>
      </FdNotificationContent>
    </FdNotification>

    <FdNotification size="s">
      <FdNotificationHeader>
        <FdNotificationTitle>Small Standard Notification</FdNotificationTitle>
        <FdNotificationCloseButton />
      </FdNotificationHeader>
      <FdNotificationContent>
        <FdNotificationText>
          <FdNotificationDescription>
            And a Notification Description
          </FdNotificationDescription>
        </FdNotificationText>
      </FdNotificationContent>
    </FdNotification>
  </div>
</template>

<script>
export default {}
</script>
