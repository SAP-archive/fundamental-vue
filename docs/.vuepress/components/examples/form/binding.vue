<template>
  <div>
    <FdFormSet>
      <FdFormItem label="First Name">
        <FdInput v-model="firstName" placeholder="First Name" />
      </FdFormItem>
      <FdFormItem label="First Name">
        <FdInput v-model="firstName" placeholder="First Name" />
      </FdFormItem>
      <FdFormItem label="First Name">
        <FdTextArea v-model="firstName" placeholder="First Name" />
      </FdFormItem>
    </FdFormSet>
    <fd-button @click="changeName">Set first name to 'Chris'</fd-button>
    <br /><br /><br /><br /><br />
    <p>
      Current First Name: <strong>{{ firstName }}</strong>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "Chris"
    };
  },
  methods: {
    changeName() {
      this.firstName = "😇 Chris 😇";
    }
  }
};
</script>
