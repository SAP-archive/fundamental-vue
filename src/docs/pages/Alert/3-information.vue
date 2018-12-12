<title>Information Alert</title>
<template>
  <div>
    <FdAlert type="information" dismissible>Information alert. Click on the close button.</FdAlert>
    <br>
    <FdAlert type="information" dismissible>
      <FdIcon name="message-information"/>Information Message.
      <FdLink href="#" @click="handleClick">Learn more</FdLink>
    </FdAlert>
  </div>
</template>
