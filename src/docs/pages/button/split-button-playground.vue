<template>
  <div>
    <div class="fdv-d-button-split-button__preview">
      <FdSplitButton
        :compact="compact"
        :state="state"
        :styling="styling_"
        :type="type_"
        :icon="icon_"
      >
        {{ text }}
      </FdSplitButton>
    </div>

    <FdFieldset>
      <FdFormItemText label="Text">
        <FdTextInput v-model="text" placeholder="Enter Button Text" />
      </FdFormItemText>
    </FdFieldset>

    <FdFieldset>
      <FdFormItem>
        <FdFormLabel>Styling</FdFormLabel>
        <FdSelect v-model="styling">
          <option value="">none</option>
          <option value="emphasized">emphasized</option>
          <option value="light">light</option>
        </FdSelect>
      </FdFormItem>
    </FdFieldset>

    <FdFieldset>
      <FdFormItem>
        <FdFormLabel>Type</FdFormLabel>
        <FdSelect v-model="type">
          <option value="">none</option>
          <option value="standard">standard</option>
          <option value="positive">positive</option>
          <option value="negative">negative</option>
          <option value="medium">medium</option>
        </FdSelect>
      </FdFormItem>
    </FdFieldset>

    <FdFieldset>
      <FdFormItem>
        <FdFormLabel>Icon</FdFormLabel>
        <FdSelect v-model="icon">
          <option value="">none</option>
          <option value="cart">cart</option>
          <option value="menu">menu</option>
        </FdSelect>
      </FdFormItem>
    </FdFieldset>

    <FdFieldset>
      <FdFormItem>
        <FdFormLabel>State</FdFormLabel>
        <FdSelect v-model="state">
          <option value="normal">normal</option>
          <option value="selected">selected</option>
          <option value="disabled">disabled</option>
        </FdSelect>
      </FdFormItem>
    </FdFieldset>

    <FdFieldset>
      <FdFormItemCheckbox label="Compact">
        <FdCheckbox v-model="compact" />
      </FdFormItemCheckbox>
    </FdFieldset>
  </div>
</template>

<script>
export default {
  computed: {
    styling_() {
      return this.styling === '' ? null : this.styling
    },
    icon_() {
      return this.icon === '' ? null : this.icon
    },
    type_() {
      return this.type === '' ? null : this.type
    }
  },
  data() {
    return {
      type: '',
      state: 'normal',
      styling: '',
      compact: false,
      text: 'Button with Text',
      icon: ''
    }
  }
}
</script>

<style>
.fdv-d-button-split-button__preview {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #efefef;
  margin-bottom: 20px;
}
</style>
