<template>
  <div>
    <FdContainer>
      <FdButton @click="active = !active">Activate Notification</FdButton>
    </FdContainer>

    <FdNotification :active="active">
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
export default {
  data() {
    return {
      active: true
    }
  }
}
</script>
