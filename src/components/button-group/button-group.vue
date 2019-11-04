<template>
  <div class="fd-button-group" role="group">
    <!-- multiple `fd-button-group-button`'s -->
    <slot />
  </div>
</template>

<script>
import CompactableContainer from './../../mixins/compactable-container'
import SingleSelectionMode from './selection/single'
import MultipleSelectionMode from './selection/multiple'
import normalizeValue from './normalize-value'

// Group a series of buttons together on a single line with the button group. You use this in combincation with `fd-button-group-button`.
export default {
  name: 'FdButtonGroup',
  mixins: [CompactableContainer],
  props: {
    // Value/Values of selected buttons inside this group.
    // If
    value: {
      type: [String, Number, Boolean, Array],
      // `[]`
      default: () => []
    },
    // Whether or not a selection handler/mode should allow empty selections
    allowsEmptySelection: {
      type: Boolean,
      default: true
    },
    // A custom selection mode
    selectionMode: {
      // Either a string (`single`: only one button can be selected; `multiple`: multiple buttons can be selected) or a selection-mode-function: `selectionMode(value: any[], clickedButtonValue: any): any[]`
      type: [String, Function],
      // `single`
      default: 'single',
      validate: value => {
        if (value == null) {
          return false
        }
        if (typeof value === 'string') {
          return value === 'single' || value === 'multiple'
        }
        return true
      }
    }
  },
  provide() {
    return {
      group: this
    }
  },
  computed: {
    selectionHandlerOptions() {
      return {
        allowsEmptySelection: this.allowsEmptySelection
      }
    },
    selectionHandler() {
      const { selectionMode } = this
      if (typeof selectionMode === 'function') {
        return selectionMode
      }
      switch (selectionMode) {
        case 'single': {
          return SingleSelectionMode
        }
        case 'multiple': {
          return MultipleSelectionMode
        }
        default:
          return SingleSelectionMode
      }
    }
  },
  methods: {
    didClickButton(buttonValue) {
      const normalizedValue = normalizeValue(this.value)

      const newValue = this.selectionHandler(
        normalizedValue,
        buttonValue,
        this.selectionHandlerOptions
      )

      // Fired when the value changes
      // @arg new values (array of button values (multiple mode) or a single value)
      this.$emit('input', newValue)
    }
  }
}
</script>
