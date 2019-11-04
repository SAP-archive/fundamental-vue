<template>
  <div>
    <FdContainer>
      <FdButton @click="$fdNotify('hi mom')">Activate Notification</FdButton>
    </FdContainer>
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
