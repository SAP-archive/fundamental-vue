<title>Information Modal</title>

<template>
  <div>
    <FdButton @click="show">Show Modal</FdButton>
    <FdModal title="Modal Title" :active="active" @close="close">
      <p>Do you want to invite your friends to join the party?</p>
      <template #actions>
        <FdButton @click="close" styling="light">Cancel</FdButton>
        <FdButton @click="close" styling="emphasized">Invite</FdButton>
      </template>
    </FdModal>
  </div>
</template>

<script>
export default {
  data: () => ({ active: false }),
  methods: {
    close() {
      this.active = false;
    },
    show() {
      this.active = true;
    }
  }
};
</script>
