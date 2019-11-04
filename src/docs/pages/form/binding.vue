<template>
  <div>
    <FdFieldset>
      <FdFormItemText label="First Name">
        <FdTextInput v-model="firstName" placeholder="First Name" />
      </FdFormItemText>
    </FdFieldset>

    <FdFieldset>
      <FdFormItemText label="First Name">
        <FdTextInput v-model="firstName" placeholder="First Name" />
      </FdFormItemText>
    </FdFieldset>

    <FdFieldset>
      <FdFormItemText label="First Name">
        <FdTextarea v-model="firstName" placeholder="First Name" />
      </FdFormItemText>
    </FdFieldset>

    <FdButton @click="firstName = 'Max Mustermann'">Set first name to 'Max Mustermann'</FdButton>
    <br />
    <br />
    <br />
    <br />
    <br />
    <p>
      Current First Name:
      <strong>{{ firstName }}</strong>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: 'Chris'
    }
  }
}
</script>
