<template>
  <div>
    <fd-modal
      name="crew"
      ref="crew"
      :modal-style="{ width: '100vw', height: '100vh' }"
      title="Nakama"
    >
      <template #default="{close}">
        <div>
          <p>Do you want to join my crew Jinbei?</p>
          <p>
            <fd-link @click="close">I can't do that now</fd-link>
            – I need to take care of something first.
          </p>
        </div>
      </template>
      <template #actions="{close}">
        <fd-button @click="close" styling="light">Cancel</fd-button>
        <fd-button @click="close" styling="emphasized">Join</fd-button>
      </template>
    </fd-modal>
    <fd-button v-fd-open-modal:crew>Show Modal</fd-button>
    <br />
    <br />
    <fd-button @click="$fdModal.open('crew')">
      Show Modal using $fdModal.open(…)
    </fd-button>
  </div>
</template>
