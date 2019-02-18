<title>Slot add-on</title>

<template>
  <div>
    <FdInputGroup>
      <template slot="before"
        >$</template
      >
      <FdInput value="1234567" />
    </FdInputGroup>
    <br />
    <FdInputGroup>
      <template slot="after"
        >€</template
      >
      <FdInput value="1234567" />
    </FdInputGroup>
  </div>
</template>
