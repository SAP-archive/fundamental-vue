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
      <FdInputGroupButton
        @click="toggleCompletions"
        :compact="compact"
        icon="navigation-down-arrow"
        styling="light"
      />
    </template>

    <template #default>
      <!-- Custom `fd-menu` -->
      <slot name="menu">
        <FdMenu @select="selectItem">
          <FdMenuList>
            <!-- Custom `fd-menu-item`s – can not me used together with the menu-slot -->
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
import FdComboboxBase from "./../ComboboxBase/ComboboxBase.vue";
import FdMenu from "./../Menu/Menu.vue";
import FdMenuList from "./../Menu/MenuList.vue";
import FdInputGroupButton from "./../InputGroup/InputGroupButton.vue";

// A typical combobox component
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
    FdComboboxBase,
    FdInput,
    FdInputGroupButton
  },
  props: {
    // Value
    value: {
      type: String,
      // `null`
      default: null
    },
    // Placeholder used by the input component
    placeholder: {
      type: String,
      // `""`
      default: ""
    },
    // Whether or not the combobox is compactable. A compactable combobox can become less tall on desktop if the view port is getting smaller.
    compact: Boolean
  },
  computed: {
    comboboxBase() {
      return this.$refs.comboboxBase;
    }
  },
  data() {
    return {
      // type: string | number | null
      currentValue: this.value
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
    // @vuese
    // Shows the combobox menu
    show() {
      this.comboboxBase.show();
    },
    // @vuese
    // Hides the combobox menu
    hide() {
      this.comboboxBase.hide();
    },
    // @vuese
    // Toggles the combobox menu
    toggle() {
      this.comboboxBase.toggle();
    },
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
      // Trigged when the current value changes
      // @arg the current value
      this.$emit("update", this.currentValue);
      // Trigged when the current value changes
      // @arg the current value
      this.$emit("update:value", this.currentValue);
    }
  }
};
</script>
