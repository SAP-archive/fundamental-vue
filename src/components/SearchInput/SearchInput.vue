<template>
  <FdComboboxBase
    ref="combobox"
    :popoverClass="popoverClass"
    :ignoredElements="ignoredElements"
    :popoverControlClass="inputGroupClass"
    class="fd-search-input"
  >
    <template #input>
      <FdInput
        :value="currentPredicate"
        :placeholder="placeholder"
        :compact="compact"
        ref="input"
        @update="setCurrentPredicate"
        @change="$emit('change', $event)"
        @focus.native="showCompletions"
        @click="showCompletions"
        @keyup.esc="hideCompletions"
        @keyup.down="arrowDown"
        @keyup.up="arrowUp"
        @keyup.enter="confirmAndHide"
      />
    </template>

    <template #after>
      <FdButton
        @click="toggleCompletions"
        :compact="compact"
        icon="search"
        styling="light"
      />
    </template>

    <template #default>
      <FdMenu ref="menu">
        <FdCompletionList
          :completions="completionsMatchingPredicate"
          :predicate="currentPredicate"
        >
          <template #item="completion">
            <FdMenuItem @click="takePredicateAndHide(completion.value)">
              <FdMatchingCompletion
                :selected="isValueSelected(completion.value)"
                v-bind="completion"
              />
            </FdMenuItem>
          </template>
        </FdCompletionList>
      </FdMenu>
    </template>
  </FdComboboxBase>
</template>

<script>
import { Uid } from "./../../mixins";
import FdButton from "./../Button/Button.vue";
import FdMenu from "./../Menu/Menu.vue";
import FdMenuItem from "./../Menu/MenuItem.vue";
import FdCompletionList from "./CompletionList.vue";
import FdMatchingCompletion from "./MatchingCompletion.vue";
import FdInput from "./../Form/Controls/Input.vue";
import FdComboboxBase from "./../ComboboxBase/ComboboxBase.vue";
import { padding, type } from "./../../directives/design-system-utilities";

export default {
  name: "FdSearchInput",
  mixins: [Uid],
  model: {
    prop: "predicate",
    event: "update"
  },
  directives: {
    "fd-padding": padding,
    "fd-type": type
  },
  components: {
    FdMatchingCompletion,
    FdCompletionList,
    FdMenu,
    FdMenuItem,
    FdComboboxBase,
    FdButton,
    FdInput
  },
  props: {
    popoverClass: {
      type: [Array, Object, String],
      default: null
    },
    inputGroupClass: {
      type: [Array, Object, String],
      default: null
    },
    predicate: { type: String, default: null },
    completions: { type: Array, default: () => [] },
    placeholder: { type: String, default: "" },
    compact: { type: Boolean, default: false }
  },
  computed: {
    combobox() {
      return this.$refs.combobox;
    },
    hasMatches() {
      return this.completionsMatchingPredicate.length > 0;
    },
    normalizedPredicate() {
      return this.predicate != null ? this.predicate.toLowerCase() : null;
    },
    completionsMatchingPredicate() {
      const { completions, normalizedPredicate: predicate } = this;

      if (predicate == null) {
        return completions;
      }
      const matchesPredicate = completion =>
        completion.toLowerCase().startsWith(predicate);
      return completions.filter(matchesPredicate);
    }
  },
  methods: {
    showCompletions() {
      // This logic is a little complicated because there are two cases:
      // 1. We have completions: show the completion list
      // 2. We have no completions: show nothing
      if (this.completions.length === 0) {
        return;
      }
      this.combobox.show();
    },
    hideCompletions() {
      this.combobox.hide();
    },
    toggleCompletions() {
      this.combobox.togge();
    },
    isValueSelected(value) {
      return value === this.selectedValue;
    },
    confirmAndHide() {
      if (this.selectedValue != null) {
        this.setCurrentPredicate(this.selectedValue);
      }
      this.hideCompletions();
    },
    arrowDown() {
      const completions = this.completionsMatchingPredicate;
      const { selectedValue } = this;
      const index = completions.findIndex(completion => {
        return completion === selectedValue;
      });
      if (index < 0) {
        if (completions.length > 0) {
          this.selectedValue = completions[0];
        }
        return;
      }
      const max = completions.length - 1;
      if (index < max) {
        this.selectedValue = completions[index + 1];
      } else {
        this.selectedValue = completions[0];
      }
    },
    arrowUp() {
      const completions = this.completionsMatchingPredicate;
      const { selectedValue } = this;
      const index = completions.findIndex(completion => {
        return completion === selectedValue;
      });
      if (index < 0) {
        if (completions.length > 0) {
          this.selectedValue = completions[0];
        }
        return;
      }
      if (index === 0) {
        this.selectedValue = completions[completions.length - 1];
      } else {
        this.selectedValue = completions[index - 1];
      }
    },
    takePredicateAndHide(predicate) {
      this.setCurrentPredicate(predicate);
      this.hideCompletions();
    },
    ignoredElements() {
      return [this.$refs.input.$el];
    },
    setCurrentPredicate(newValue) {
      this.currentPredicate = newValue;
      this.$emit("update", this.currentPredicate);
      this.$emit("update:predicate", this.currentPredicate);
    }
  },
  watch: {
    predicate: {
      immediate: true,
      handler(newValue) {
        this.currentPredicate = newValue;
      }
    }
  },
  data() {
    return {
      selectedValue: null,
      currentPredicate: this.predicate
    };
  }
};
</script>
