<template>
  <div>
    <fd-field-set>
      <fd-form-item label="First Name">
        <fd-input v-model="firstName" placeholder="First Name" />
      </fd-form-item>
      <fd-form-item label="First Name">
        <fd-input v-model="firstName" placeholder="First Name" />
      </fd-form-item>
      <fd-form-item label="First Name">
        <fd-text-area v-model="firstName" placeholder="First Name" />
      </fd-form-item>
    </fd-field-set>
    <fd-button @click="changeName">Set first name to 'Chris'</fd-button>
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
