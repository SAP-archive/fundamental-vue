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
