<template>
  <FdNotification>
    <FdNotificationHeader>
      <FdNotificationTitle>Notification Title</FdNotificationTitle>
      <FdNotificationCloseButton />
    </FdNotificationHeader>

    <FdNotificationBody>
      <FdNotificationContent>
        <FdNotificationText>
          <FdNotificationDescription>
            Notification Description
          </FdNotificationDescription>
          <FdNotificationMeta>
            Default Notification Metadata
          </FdNotificationMeta>
        </FdNotificationText>
      </FdNotificationContent>
      <FdNotificationFooter>
        <FdButton styling="light">More Info</FdButton>
        <FdNotificationActions>
          <FdButton type="positive">Approve</FdButton>
          <FdButton type="negative">Reject</FdButton>
        </FdNotificationActions>
      </FdNotificationFooter>
    </FdNotificationBody>
  </FdNotification>
</template>

<script>
export default {}
</script>
