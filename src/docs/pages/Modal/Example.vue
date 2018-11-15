<title>Information Modal</title>

<template>
  <div>
    <FdButton @click="showModal">Show Modal</FdButton>
    <FdModal title="Modal Title" :active.sync="isModalActive">
      <p>Do you want to invite your friends to join the party?</p>
      <template slot="actions">
        <FdButton @click="closeModal" styling="light">Cancel</FdButton>
        <FdButton @click="closeModal" styling="emphasized">Invite Friends</FdButton>
      </template>
    </FdModal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModalActive: false,
    };
  },
  methods: {
    closeModal() {
      this.isModalActive = false;
    },
    showModal() {
      this.isModalActive = true;
    },
  },
};
</script>
