<template>
  <div>
    <FdDialog name="crew" ref="crew" :modal-style="{ width: '100vw', height: '100vh' }">
      <template #default="{close}">
        <FdDialogHeader>
          <FdDialogBar>
            <FdDialogElement>
              <FdDialogTitle>
                Nakama
              </FdDialogTitle>
            </FdDialogElement>
          </FdDialogBar>
        </FdDialogHeader>
        <FdDialogBody>
          <div>
            <p>Do you want to join my crew Jinbei?</p>
            <p>
              <fd-link href="#" @click="close">I can't do that now</fd-link>
              – I need to take care of something first.
            </p>
          </div>
        </FdDialogBody>

        <FdDialogFooter>
          <FdDialogBar aligment="right">
            <FdDialogElement>
              <FdDialogButton @click="close">Cancel</FdDialogButton>
            </FdDialogElement>
            <FdDialogElement>
              <FdDialogButton @click="close">Join</FdDialogButton>
            </FdDialogElement>
          </FdDialogBar>
        </FdDialogFooter>
      </template>
    </FdDialog>
    <fd-button v-fd-open-dialog:crew>Show Dialog</fd-button>
    <br />
    <br />
    <fd-button @click="$fdDialog.open('crew')">
      Show Modal using $fdModal.open(…)
    </fd-button>
  </div>
</template>
