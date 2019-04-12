<title>Checkboxes</title>
<tip>
Form items can be inlined. You can do this either by setting the `inline`-flag on each item or by simply setting it on the enclosing `FdFormGroup`.
</tip>
<docs>
You can bind multiple checkboxes to a single array. For each checked control it's corresponding value is added to the bound array.
</docs>
<template>
  <div>
    <FdSection>
      <FdFieldSet>
        <FdLegend>Favorite Colors</FdLegend>
        <FdFormGroup>
          <FdFormItem label="Red">
            <FdCheckbox value="red" v-model="favoriteColors" />
          </FdFormItem>
          <FdFormItem label="Green">
            <FdCheckbox value="green" v-model="favoriteColors" />
          </FdFormItem>
          <FdFormItem label="Blue">
            <FdCheckbox value="blue" v-model="favoriteColors" />
          </FdFormItem>
        </FdFormGroup>
      </FdFieldSet>
    </FdSection>
    <FdSection>
      <FdFieldSet>
        <FdLegend>Favorite Colors (inline)</FdLegend>
        <FdFormGroup inline>
          <FdFormItem label="Red">
            <FdCheckbox value="red" v-model="favoriteColors" />
          </FdFormItem>
          <FdFormItem label="Green">
            <FdCheckbox value="green" v-model="favoriteColors" />
          </FdFormItem>
          <FdFormItem label="Blue">
            <FdCheckbox value="blue" v-model="favoriteColors" />
          </FdFormItem>
        </FdFormGroup>
      </FdFieldSet>
    </FdSection>
    <FdSection>
      <strong>Favorite Colors: {{ favoriteColors }}</strong>
    </FdSection>
  </div>
</template>

<script>
export default {
  data: () => ({
    favoriteColors: ["red"]
  })
};
</script>
