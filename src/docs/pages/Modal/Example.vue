<template>
  <div>
    <vf-button @click="showModal">Show Modal</vf-button>
    <vf-modal title="Modal Title" :active.sync="isModalActive">
      <p>Do you want to invite your friends to join the party?</p>
      <template slot="actions">
        <vf-button @click="closeModal" styling="light">Cancel</vf-button>
        <vf-button @click="closeModal" styling="emphasized">Invite Friends</vf-button>
      </template>
    </vf-modal>
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
