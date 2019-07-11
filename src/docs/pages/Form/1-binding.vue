<title>Binding</title>
<tip>`FdInput` supports `v-model` and thus you can easily create bi-directional bindings.</tip>

<template>
  <div>
    <fd-field-set>
      <FdFormItem label="First Name">
        <FdInput v-model="firstName" placeholder="First Name" />
      </FdFormItem>
      <FdFormItem label="First Name">
        <FdInput v-model="firstName" placeholder="First Name" />
      </FdFormItem>
      <FdFormItem label="First Name">
        <FdTextArea v-model="firstName" placeholder="First Name" />
      </FdFormItem>
    </fd-field-set>
    <FdButton @click="changeName">Set first name to 'Chris'</FdButton>
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
