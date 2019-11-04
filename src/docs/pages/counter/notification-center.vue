<template>
  <div>
    <FdButton icon="bell" styling="light" aria-label="Notifications">
      <FdCounter :value="1" notification label="Unread Notifications" />
    </FdButton>
    <FdButton icon="bell" styling="light" aria-label="Notifications">
      <FdCounter :value="30" notification label="Unread Notifications" />
    </FdButton>
    <FdButton icon="bell" styling="light" aria-label="Notifications">
      <FdCounter :value="300" notification label="Unread Notifications" />
    </FdButton>
    <FdButton icon="bell" styling="light" aria-label="Notifications">
      <FdCounter :value="998" notification label="Unread Notifications" />
    </FdButton>
    <FdButton icon="bell" styling="light" aria-label="Notifications">
      <FdCounter :value="1500" notification label="Unread Notifications" />
    </FdButton>
  </div>
</template>
