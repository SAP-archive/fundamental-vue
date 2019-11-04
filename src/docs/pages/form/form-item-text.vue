<template>
  <div>
    <FdFieldset>
      <FdFormItemText label="Label for Text Input">
        <FdTextInput placeholder="Text Input Placeholder" />
      </FdFormItemText>
    </FdFieldset>

    <FdFieldset>
      <FdFormItemText horizontal label="Label for horizonal Text Input">
        <FdTextInput placeholder="Text Input Placeholder" />
      </FdFormItemText>
    </FdFieldset>

    <FdFieldset>
      <FdFormItemText label="Label for compact Text Input">
        <FdTextInput compact placeholder="Text Input Placeholder" />
      </FdFormItemText>
    </FdFieldset>

    <FdFieldset>
      <FdFormItemText required label="First Name (req)">
        <FdTextInput compact placeholder="Text Input Placeholder" />
      </FdFormItemText>
    </FdFieldset>
  </div>
</template>
