<template>
  <div>
    <fd-button @click="$fdDialog.open('outer')" styling="emphasized">
      Open Modal
    </fd-button>

    <FdDialog name="outer">
      <template #default="{close}">
        <FdDialogHeader>
          <FdDialogBar>
            <FdDialogElement>
              <FdDialogTitle>
                Outer Dialog
              </FdDialogTitle>
            </FdDialogElement>
          </FdDialogBar>
        </FdDialogHeader>
        <FdDialogBody>
          This is the first modal! Click the button below to open the second modal.
        </FdDialogBody>

        <FdDialogFooter>
          <FdDialogBar aligment="right">
            <FdDialogElement>
              <FdDialogButton @click="close">Cancel</FdDialogButton>
            </FdDialogElement>
            <FdDialogElement>
              <FdDialogButton @click="$fdDialog.open('nested')">Open Nested Dialog</FdDialogButton>
            </FdDialogElement>
          </FdDialogBar>
        </FdDialogFooter>
      </template>
    </FdDialog>

    <FdDialog name="nested">
      <template #default="{close}">
        <FdDialogHeader>
          <FdDialogBar>
            <FdDialogElement>
              <FdDialogTitle>
                Nested Dialog
              </FdDialogTitle>
            </FdDialogElement>
          </FdDialogBar>
        </FdDialogHeader>
        <FdDialogBody>
          This is a nested Dialog.
        </FdDialogBody>
        <FdDialogFooter>
          <FdDialogBar aligment="right">
            <FdDialogElement>
              <FdDialogButton @click="close">Cancel</FdDialogButton>
            </FdDialogElement>
            <FdDialogElement>
              <FdDialogButton @click="close">Close Nested Dialog</FdDialogButton>
            </FdDialogElement>
          </FdDialogBar>
        </FdDialogFooter>
      </template>
    </FdDialog>
  </div>
</template>
