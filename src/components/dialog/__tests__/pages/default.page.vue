<template>
  <div style="width: 1000px; height: 1000px; padding: 100px;">
    <fd-modal data-cy-modal name="party" title="Hello World" ref="party">
      <template #default="{close}">
        <div data-cy-modal-body>
          <button data-cy-close-via-fdModal @click="closeParty">
            close
          </button>
          <FdLink data-cy-close-via-slot-prop href="#" @click="close">Nah…</FdLink>
        </div>
      </template>
      <template #actions="{close}">
        <FdButton @click="close" styling="light">Cancel</FdButton>
        <FdButton @click="close" styling="emphasized">Invite</FdButton>
      </template>
    </fd-modal>
    <FdButton v-fd-open-modal:party>Show Modal</FdButton>

    <FdButton data-cy-open-modal-button @click="$fdModal.open('party')">
      Show Modal
    </FdButton>
  </div>
</template>

<script>
export default {
  methods: {
    closeParty() {
      this.$fdModal.close('party')
    }
  }
}
</script>
