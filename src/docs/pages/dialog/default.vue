<template>
  <div>
    <FdDialog name="party" ref="party" title="Modal Title">
      <template #default="{close}">
        <FdDialogHeader>
          <FdDialogBar>
            <FdDialogElement>
              <FdDialogTitle>
                Title
              </FdDialogTitle>
            </FdDialogElement>
          </FdDialogBar>
        </FdDialogHeader>
        <FdDialogBody>
          Do you want to invite your friends to join the party?
        </FdDialogBody>

        <FdDialogFooter>
          <FdDialogBar aligment="right">
            <FdDialogElement>
              <FdDialogButton @click="close">Cancel</FdDialogButton>
            </FdDialogElement>
            <FdDialogElement>
              <FdDialogButton @click="close">Invite</FdDialogButton>
            </FdDialogElement>
          </FdDialogBar>
        </FdDialogFooter>
      </template>
    </FdDialog>
    <fd-button v-fd-open-modal:party>Show Dialog</fd-button>
    <br />
    <br />
    <fd-button @click="$fdDialog.open('party')">
      Show Dialog using $fdDialog.open(…)
    </fd-button>
  </div>
</template>
