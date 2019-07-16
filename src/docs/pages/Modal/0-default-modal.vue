<title>Modal</title>
<docs>
Each slot (*footer*, *actions*, *default*, *close*, *title*) has access to the modal itself. This allows you to call any method or query any prop/data-value by using the slot's scope. A practical use case for this is shown in the example below. The modal's body (*default* slot) contains a link that, when clicked, closes the modal.
</docs>
<tip>
There are multiple ways to show a modal.

**Using `$fdModal.open(modalName)`**

You can use the `$fdModal.open(modalName)` to open modals from anywhere. Just give each modal a name (using the `name`-prop) and pass this to the `open`-function.

**Manually showing the modal**

Of course you can also manually show or close the modal by simply calling the corresponding methods in it:

- `show(event?)`: shows the modal.
- `close(event?)`: closes the modal.
</tip>
<template>
  <div>
    <FdModal name="party" ref="party" title="Modal Title">
      <template #default="{close}">
        <div>
          <p>Do you want to invite your friends to join the party?</p>
          <p>
            <FdLink @click="close">Nah…</FdLink>
            – maybe next time though.
          </p>
        </div>
      </template>
      <template #actions="{close}">
        <FdButton @click="close" styling="light">Cancel</FdButton>
        <FdButton @click="close" styling="emphasized">Invite</FdButton>
      </template>
    </FdModal>
    <FdButton v-fd-open-modal:party>Show Modal</FdButton>
    <br />
    <br />
    <FdButton @click="$fdModal.open('party')">
      Show Modal using $fdModal.open(…)
    </FdButton>
  </div>
</template>
