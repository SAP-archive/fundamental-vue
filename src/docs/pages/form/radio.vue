<template>
  <div>
    <FdFieldset>
      <FdFieldsetLegend>Favorite Color</FdFieldsetLegend>

      <FdFormItemRadio id="examples-form-radio-red" label="red">
        <FdRadio compact value="red" id="examples-form-radio-red" v-model="color" />
      </FdFormItemRadio>

      <FdFormItemRadio id="examples-form-radio-green" label="Green">
        <FdRadio compact id="examples-form-radio-green" value="green" v-model="color" />
      </FdFormItemRadio>

      <FdFormItemRadio id="examples-form-radio-yellow" label="Yellow">
        <FdRadio compact id="examples-form-radio-yellow" value="yellow" v-model="color" />
      </FdFormItemRadio>
    </FdFieldset>

    <FdFieldset>
      <FdFieldsetLegend>Inline Favorite Color</FdFieldsetLegend>

      <FdFormItemRadio inline label="red">
        <FdRadio compact value="red" v-model="color" />
      </FdFormItemRadio>

      <FdFormItemRadio inline label="Green">
        <FdRadio compact value="green" v-model="color" />
      </FdFormItemRadio>

      <FdFormItemRadio inline label="Yellow">
        <FdRadio compact value="yellow" v-model="color" />
      </FdFormItemRadio>
    </FdFieldset>
  </div>
</template>

<script>
export default {
  data: () => ({
    color: 'red'
  })
}
</script>
