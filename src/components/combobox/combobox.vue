<template>
  <FdComboboxBase ref="comboboxBase" :ignoredElements="ignoredElements" :compact="compact">
    <template #input="{showCompletions, hideCompletions}">
      <FdInputGroupInput
        ref="input"
        :value="displayValue"
        :placeholder="placeholder"
        :compact="compact"
        @blur="handleBlur"
        @focus="showCompletions"
        @update="handleUpdate"
        @keyup.esc="hideCompletions"
      />
    </template>
    <template #after="{ toggleCompletions }">
      <FdInputGroupAddonButton :compact="compact">
        <FdInputGroupButton
          @mousedown="preventIfInputHasFocus"
          @mouseup="toggleCompletions"
          :compact="compact"
          icon="navigation-down-arrow"
        />
      </FdInputGroupAddonButton>
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
import Uid from './../../mixins/uid'
import FdComboboxBase from './../combobox-base/combobox-base.vue'
import FdMenu from './../menu/menu.vue'
import FdMenuList from './../menu/menu-list.vue'
import FdInputGroupInput from './../input-group/input.vue'
import FdInputGroupButton from './../input-group/button.vue'
import FdInputGroupAddonButton from './../input-group/addon-button.vue'

// A typical combobox component
export default {
  name: 'FdCombobox',
  mixins: [Uid],
  provide() {
    return {
      combobox: this
    }
  },
  model: {
    prop: 'value',
    event: 'update'
  },
  components: {
    FdInputGroupInput,
    FdInputGroupAddonButton,
    FdMenu,
    FdMenuList,
    FdComboboxBase,
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
      default: ''
    },
    // Whether or not the combobox is compactable. A compactable combobox can become less tall on desktop if the view port is getting smaller.
    compact: Boolean
  },
  computed: {
    comboboxBase() {
      return this.$refs.comboboxBase
    },
    displayValue() {
      return this.currentLabel ?? this.currentValue
    }
  },
  data() {
    return {
      // type: string | number | null
      currentValue: this.value,
      // type: string | number | null
      currentLabel: null
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(newValue) {
        this.currentValue = newValue
      }
    }
  },
  methods: {
    /**
     * @param {MouseEvent} event
     */
    preventIfInputHasFocus(event) {
      const { input } = this.$refs
      const hasFocus = document.activeElement === input.$el
      if (hasFocus === true) {
        event.preventDefault()
      }
    },
    // @vuese
    // Shows the combobox menu
    show() {
      this.comboboxBase.show()
    },
    // @vuese
    // Hides the combobox menu
    hide() {
      this.comboboxBase.hide()
    },
    // @vuese
    // Toggles the combobox menu
    toggle() {
      this.comboboxBase.toggle()
    },
    handleBlur() {
      setTimeout(() => {
        this.$refs.comboboxBase.hide()
      })
    },
    selectItem(item) {
      this.setCurrentValue(item.value)
      this.setCurrentLabel(item.label)
      this.$refs.comboboxBase.hide()
    },
    ignoredElements() {
      return [this.$refs.input.$el]
    },
    setCurrentValue(newValue) {
      this.currentValue = newValue
      // Trigged when the current value changes
      // @arg the current value
      this.$emit('update', this.currentValue)
      // Trigged when the current value changes
      // @arg the current value
      this.$emit('update:value', this.currentValue)
    },
    setCurrentLabel(newLabel) {
      this.currentLabel = newLabel
    },
    handleUpdate(newValue) {
      this.setCurrentValue(newValue)
      this.setCurrentLabel(null) // reset the current label as a new value is being set
    }
  }
}
</script>
