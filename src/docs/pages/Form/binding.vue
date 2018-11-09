<template>
  <div>
    <vf-form-set>
      <vf-form-item>
        <vf-form-label>First Name</vf-form-label>
        <vf-input v-model="firstName" placeholder="First Name"/>
      </vf-form-item>
    </vf-form-set>
    <vf-button @click="changeName">Set first name to 'Chris'</vf-button>
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