<template>
  <div>
    <fd-field-set>
      <fd-form-item>
        <fd-form-label>First Name</fd-form-label>
        <fd-input v-model="firstName" placeholder="First Name" />
      </fd-form-item>
      <fd-form-item>
        <fd-form-label>First Name</fd-form-label>
        <fd-input v-model="firstName" placeholder="First Name" />
      </fd-form-item>
      <fd-form-item>
        <fd-form-label>First Name</fd-form-label>
        <fd-text-area v-model="firstName" placeholder="First Name" />
      </fd-form-item>
    </fd-field-set>
    <fd-button @click="firstName = 'Max Mustermann'">Set first name to 'Max Mustermann'</fd-button>
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
  }
};
</script>
