<template>
  <div>
    <fd-modal name="party" ref="party" title="Modal Title">
      <template #default="{close}">
        <div>
          <p>Do you want to invite your friends to join the party?</p>
          <p>
            <fd-link @click="close">Nah…</fd-link>
            – maybe next time though.
          </p>
        </div>
      </template>
      <template #actions="{close}">
        <fd-button @click="close" styling="light">Cancel</fd-button>
        <fd-button @click="close" styling="emphasized">Invite</fd-button>
      </template>
    </fd-modal>
    <fd-button v-fd-open-modal:party>Show Modal</fd-button>
    <br />
    <br />
    <fd-button @click="$fdModal.open('party')">
      Show Modal using $fdModal.open(…)
    </fd-button>
  </div>
</template>
