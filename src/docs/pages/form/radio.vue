<template>
  <div>
    <FdFieldset>
      <FdFieldsetLegend>Favorite Color</FdFieldsetLegend>

      <FdFormItemRadio label="red">
        <FdRadio compact value="red" v-model="color" />
      </FdFormItemRadio>

      <FdFormItemRadio label="Green">
        <FdRadio compact value="green" v-model="color" />
      </FdFormItemRadio>

      <FdFormItemRadio label="Yellow">
        <FdRadio compact value="yellow" v-model="color" />
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
