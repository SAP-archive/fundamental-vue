<template>
  <div class="fd-button-split" role="group">
    <!-- Provide a custom action button. The action button is bigger button with the text that should trigger some kind of action. You can use fd-split-button-action to render the default auxiliary-button and customize it. -->
    <slot v-bind="slotProps" name="action">
      <fd-split-button-action @click="$emit('click')">
        <!-- Provide a title. This is rendered inside the 'action' part of the split button (big area on the left). -->
        <slot />
      </fd-split-button-action>
    </slot>
    <!-- Provide a custom auxiliary button. The auxiliary button should bring up some kind of menu/popover. You can use fd-split-button-auxiliary to render the default auxiliary-button and customize it.  -->
    <slot v-bind="slotProps" name="auxiliary">
      <fd-split-button-auxiliary @click="$emit('click:auxiliary')" />
    </slot>
  </div>
</template>

<script>
import FdSplitButtonAuxiliary from "./../SplitButtonAuxiliary/SplitButtonAuxiliary.vue";
import FdSplitButtonAction from "./../SplitButtonAction/SplitButtonAction.vue";
import Vue from "vue";
import ButtonTypes from "./../Button/ButtonTypes";
import IconMixin from "./../../mixins/Icon";

export default {
  name: "FdSplitButton",
  mixins: [IconMixin],
  components: {
    FdSplitButtonAction,
    FdSplitButtonAuxiliary
  },
  provide() {
    return {
      splitButton: this.splitButton
    };
  },
  computed: {
    slotProps() {
      return this.splitButton;
    }
  },
  props: {
    compact: Boolean,
    styling: {
      type: String,
      default: null,
      validator: value => ["emphasized", "light"].indexOf(value) >= 0
    },
    state: {
      type: String,
      default: "normal",
      validator: value => ["normal", "selected", "disabled"].indexOf(value) >= 0
    },
    type: {
      type: String,
      default: null,
      validator: value => ButtonTypes.indexOf(value) >= 0
    }
  },
  watch: {
    state(state) {
      this.splitButton.state = state;
    },
    type(type) {
      this.splitButton.type = type;
    },
    styling(styling) {
      this.splitButton.styling = styling;
    },
    compact(compact) {
      this.splitButton.compact = compact;
    },
    icon(icon) {
      this.splitButton.icon = icon;
    }
  },
  data() {
    return {
      splitButton: Vue.observable({
        state: this.state,
        type: this.type,
        styling: this.styling,
        compact: this.compact,
        icon: this.icon
      })
    };
  }
};
</script>
