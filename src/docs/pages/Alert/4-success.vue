<title>success Alert</title>
<template>
  <div>
    <FdAlert type="success" dismissible>Success alert. Click on the close button.</FdAlert>
    <br>
    <FdAlert type="success" dismissible>
      <FdIcon name="message-success"/>Success Message.
      <FdLink href="#" @click="handleClick">Learn more</FdLink>
    </FdAlert>
  </div>
</template>
