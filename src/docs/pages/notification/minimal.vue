<template>
  <div>
    <FdNotification>
      <FdNotificationHeader>
        <FdNotificationTitle>Notification only with Title</FdNotificationTitle>
        <FdNotificationCloseButton />
      </FdNotificationHeader>
    </FdNotification>

    <FdNotification>
      <FdNotificationHeader>
        <FdNotificationTitle>Notification with Title</FdNotificationTitle>
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
