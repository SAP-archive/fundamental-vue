<template>
  <div class="fd-search-input">
    <fd-combobox-base
      ref="combobox"
      :popoverClass="popoverClass"
      :ignoredElements="ignoredElements"
    >
      <template #input>
        <fd-input
          ref="input"
          :value="currentPredicate"
          :placeholder="placeholder"
          :compact="compact"
          @update="setCurrentPredicateAndShowCompletions"
          @change="$emit('change', $event)"
          @focus="showCompletions"
          @click="showCompletions"
          @keyup.esc="hideCompletions"
          @keydown.down.native.prevent="highlightNext"
          @keydown.up.native.prevent="highlightPrevious"
          @keyup.enter="handleEnter"
          @keyup.tab="handleTab"
          @keydown.tab="handleKeydownTab"
        />
      </template>

      <template #after>
        <slot name="search-button">
          <fd-input-group-button
            @click="toggleCompletions"
            :compact="compact"
            icon="search"
            styling="light"
          />
        </slot>
      </template>

      <template #default>
        <fd-menu ref="menu">
          <fd-completion-list
            :completions="completionsMatchingPredicate"
            :predicate="currentPredicate"
          >
            <template #no-results>
              <slot name="no-results">
                <fd-menu-item>No Results</fd-menu-item>
              </slot>
            </template>
            <template #item="completion">
              <fd-menu-item @click="selectCompletion(completion.value)">
                <fd-matching-completion
                  :selected="isValueSelected(completion.value)"
                  v-bind="completion"
                />
              </fd-menu-item>
            </template>
          </fd-completion-list>
        </fd-menu>
      </template>
    </fd-combobox-base>
  </div>
</template>

<script>
import { Uid } from "./../../mixins";
import FdInputGroupButton from "./../InputGroup/InputGroupButton.vue";
import FdMenu from "./../Menu/Menu.vue";
import FdMenuItem from "./../Menu/MenuItem.vue";
import FdCompletionList from "./CompletionList.vue";
import FdMatchingCompletion from "./MatchingCompletion.vue";
import FdInput from "./../Form/Controls/Input.vue";
import FdComboboxBase from "./../ComboboxBase/ComboboxBase.vue";

const EVENT_SELECT = "select";
const EVENT_UPDATE = "update";

export default {
  name: "FdSearchInput",
  mixins: [Uid],
  model: {
    prop: "predicate",
    event: "update"
  },
  components: {
    FdMatchingCompletion,
    FdCompletionList,
    FdMenu,
    FdMenuItem,
    FdComboboxBase,
    FdInputGroupButton,
    FdInput
  },
  props: {
    popoverClass: {
      type: [Array, Object, String],
      default: null
    },
    predicate: { type: String, default: null },
    completions: { type: Array, default: () => [] },
    placeholder: { type: String, default: "" },
    compact: { type: Boolean, default: false },
    confirmOn: {
      type: String,
      default: "keyup.enter",
      validator: value => ["keyup.enter", "keyup.tab"].indexOf(value) >= 0
    }
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
      const matchesPredicate = completion => completion.toLowerCase().startsWith(predicate);
      return completions.filter(matchesPredicate);
    }
  },
  methods: {
    handleKeydownTab(event) {
      if (this.confirmOn === "keyup.tab") {
        const combobox = this.$refs.combobox;
        const popover = combobox.$refs.popover;
        const { visible_ } = popover.kpop;
        if (visible_) {
          event.preventDefault();
        }
      }
    },
    handleTab() {
      if (this.selectedValue == null || this.confirmOn !== "keyup.tab") {
        return;
      }
      this.selectCompletion(this.selectedValue);
    },
    handleEnter() {
      if (this.selectedValue == null || this.confirmOn !== "keyup.enter") {
        return;
      }
      this.selectCompletion(this.selectedValue);
    },
    showCompletions() {
      if (this.completions.length === 0) {
        return;
      }
      this.combobox.show();
    },
    hideCompletions() {
      this.combobox.hide();
    },
    toggleCompletions() {
      if (this.completions.length === 0) {
        return;
      }
      this.combobox.toggle();
    },
    isValueSelected(value) {
      return value === this.selectedValue;
    },
    highlightNext() {
      const completions = this.completionsMatchingPredicate;
      if (completions.length === 0) {
        return;
      }
      const { selectedValue } = this;
      const index = completions.indexOf(selectedValue);

      if (index < 0) {
        this.selectedValue = completions[0];
        return;
      }
      const maxIndex = completions.length - 1;
      const nextIndex = Math.min(maxIndex, index + 1);
      const nextValue = completions[nextIndex];
      this.selectedValue = nextValue;
    },
    highlightPrevious() {
      const completions = this.completionsMatchingPredicate;
      if (completions.length === 0) {
        return;
      }
      const { selectedValue } = this;
      const index = completions.indexOf(selectedValue);
      if (index < 0) {
        return;
      }
      const newIndex = Math.max(0, index - 1);
      this.selectedValue = completions[newIndex];
    },
    selectCompletion(value) {
      this.setCurrentPredicate(value);
      this.hideCompletions();
      if (value != null) {
        this.$emit(EVENT_SELECT, value);
      }
    },
    ignoredElements() {
      // @ts-ignore
      return [this.$refs.input.$el];
    },
    setCurrentPredicate(newValue) {
      this.currentPredicate = newValue;
      this.$emit(EVENT_UPDATE, this.currentPredicate);
    },
    setCurrentPredicateAndShowCompletions(newValue) {
      this.setCurrentPredicate(newValue);
      this.showCompletions();
    }
  },
  watch: {
    // We observe the completions that currently match the predicate and if there are any matches
    // and the input element is focused we show the completion list.
    // TODO: Add tests
    // TODO: Make activeElement and "isFocusedAndHasMatchingCompletions" reactive and
    //       bind the visibility of the completions list to isFocusedAndHasMatchingCompletions
    completionsMatchingPredicate(completionsMatchingPredicate) {
      if (completionsMatchingPredicate != null && completionsMatchingPredicate.length > 0) {
        if (document.activeElement === this.$refs.input.$el) {
          this.showCompletions();
        }
      }
    },
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
