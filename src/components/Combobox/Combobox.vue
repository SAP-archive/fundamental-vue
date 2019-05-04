<template>
  <FdComboboxBase
    ref="comboboxBase"
    :ignoredElements="ignoredElements"
    :compact="compact"
    class="fd-combobox-input"
  >
    <template #input="{showCompletions, hideCompletions}">
      <FdInput
        ref="input"
        :value="currentValue"
        :placeholder="placeholder"
        :compact="compact"
        @blur="handleBlur"
        @focus="showCompletions"
        @update="setCurrentValue"
        @click="showCompletions"
        @keyup.esc="hideCompletions"
      />
    </template>

    <template #after="{ toggleCompletions }">
      <FdButton
        @click="toggleCompletions"
        :compact="compact"
        icon="navigation-down-arrow"
        styling="light"
      />
    </template>

    <template #default>
      <slot name="menu">
        <FdMenu @select="selectItem">
          <FdMenuList>
            <slot />
          </FdMenuList>
        </FdMenu>
      </slot>
    </template>
  </FdComboboxBase>
</template>

<script>
import { Uid } from "./../../mixins";
import FdInput from "./../Form/Controls/Input.vue";
import FdButton from "./../Button/Button.vue";
import FdComboboxBase from "./../ComboboxBase/ComboboxBase.vue";
import FdMenu from "./../Menu/Menu.vue";
import FdMenuList from "./../Menu/MenuList.vue";

export default {
  name: "FdCombobox",
  mixins: [Uid],
  provide() {
    return {
      combobox: this
    };
  },
  model: {
    prop: "value",
    event: "update"
  },
  components: {
    FdMenu,
    FdMenuList,
    FdButton,
    FdComboboxBase,
    FdInput
  },
  props: {
    value: { type: String, default: null },
    placeholder: { type: String, default: "" },
    ariaLabel: { type: String, default: "Combobox" },
    compact: { type: Boolean, default: false }
  },
  data() {
    return {
      currentValue: this.value // string | number | null
    };
  },
  watch: {
    value: {
      immediate: true,
      handler(newValue) {
        this.currentValue = newValue;
      }
    }
  },
  methods: {
    handleBlur() {
      setTimeout(() => {
        this.$refs.comboboxBase.hide();
      });
    },
    selectItem(item) {
      this.setCurrentValue(item.value);
      this.$refs.comboboxBase.hide();
    },
    ignoredElements() {
      return [this.$refs.input.$el];
    },
    setCurrentValue(newValue) {
      this.currentValue = newValue;
      this.$emit("update", this.currentValue);
      this.$emit("update:value", this.currentValue);
    }
  }
};
</script>
