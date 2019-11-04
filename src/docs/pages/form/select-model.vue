<template>
  <div>
    <FdFieldset>
      <FdFormItem>
        <FdFormLabel>Favorite Color</FdFormLabel>
        <fd-select v-model="color">
          <option disabled>no color</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
        </fd-select>
      </FdFormItem>
    </FdFieldset>
    <div style="margin-bottom: 20px;">
      <p>
        Selected Color:
        <code class="fd-has-font-weight-bold">{{ color }}</code>
      </p>
    </div>
    <fd-button @click="color = 'green'">Set Color to 'green'</fd-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: 'yellow'
    }
  }
}
</script>
