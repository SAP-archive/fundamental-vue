<template>
  <div>
    <FdFormSet>
      <FdFormItem>
        <FdFormLabel>First Name</FdFormLabel>
        <FdInput v-model="firstName" placeholder="First Name"/>
      </FdFormItem>
    </FdFormSet>
    <FdButton @click="changeName">Set first name to 'Chris'</FdButton>
    <br /><br /><br /><br /><br />
    <p>Current First Name: <strong>{{firstName}}</strong></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: 'Chris',
    };
  },
  methods: {
    changeName() {
      this.firstName = '😇 Chris 😇';
    },
  },
};
</script>