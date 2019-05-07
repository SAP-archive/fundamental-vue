<template>
  <FdComboboxBase
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
        @focus.native="showCompletions"
        @blur.native="hideCompletions"
        @update="setCurrentValue"
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

    <template #default="{ hideCompletions }">
      <FdMenu @select="item => handleClickOnAndThen(item, hideCompletions)">
        <FdMenuList>
          <slot />
        </FdMenuList>
      </FdMenu>
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
    popoverVisible: { type: Boolean, default: false },
    compact: { type: Boolean, default: false }
  },
  data() {
    return {
      currentPopoverVisible: this.popoverVisible,
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
    ignoredElements() {
      const input = this.$refs.input.$el;
      return [input];
    },
    setCurrentValue(newValue) {
      this.currentValue = newValue;
      this.$emit("update", this.currentValue);
      this.$emit("update:value", this.currentValue);
    },
    handleClickOnAndThen(item, executeCb) {
      this.setCurrentValue(item.value);
      executeCb();
    }
  }
};
</script>
