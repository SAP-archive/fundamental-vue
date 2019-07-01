<template>
  <div>
    <div class="fdv-d-button-split-button__preview">
      <fd-split-button
        :compact="compact"
        :state="state"
        :styling="styling_"
        :type="type_"
        :icon="icon_"
      >
        {{ text }}
      </fd-split-button>
    </div>
    <fd-form-item label="Text">
      <fd-input v-model="text" placeholder="Enter Button Text" />
    </fd-form-item>
    <fd-form-item>
      <fd-form-label>Styling</fd-form-label>
      <fd-select v-model="styling">
        <option value="">none</option>
        <option value="emphasized">emphasized</option>
        <option value="light">light</option>
      </fd-select>
    </fd-form-item>
    <fd-form-item>
      <fd-form-label>Type</fd-form-label>
      <fd-select v-model="type">
        <option value="">none</option>
        <option value="standard">standard</option>
        <option value="positive">positive</option>
        <option value="negative">negative</option>
        <option value="medium">medium</option>
      </fd-select>
    </fd-form-item>
    <fd-form-item>
      <fd-form-label>Icon</fd-form-label>
      <fd-select v-model="icon">
        <option value="">none</option>
        <option value="cart">cart</option>
        <option value="menu">menu</option>
      </fd-select>
    </fd-form-item>
    <fd-form-item>
      <fd-form-label>State</fd-form-label>
      <fd-select v-model="state">
        <option value="normal">normal</option>
        <option value="selected">selected</option>
        <option value="disabled">disabled</option>
      </fd-select>
    </fd-form-item>
    <fd-form-item>
      <fd-form-label for="hrhr">
        <fd-checkbox id="hrhr" v-model="compact" />
        Compact
      </fd-form-label>
    </fd-form-item>
  </div>
</template>

<script>
export default {
  computed: {
    styling_() {
      return this.styling === "" ? null : this.styling;
    },
    icon_() {
      return this.icon === "" ? null : this.icon;
    },
    type_() {
      return this.type === "" ? null : this.type;
    }
  },
  data() {
    return {
      type: "",
      state: "normal",
      styling: "",
      compact: false,
      text: "Button with Text",
      icon: ""
    };
  }
};
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
