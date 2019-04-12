<template>
  <FdComboboxBase class="fd-search-input">
    <template #input="{showCompletions, hideCompletions}">
      <FdInput
        :value="currentPredicate"
        :placeholder="placeholder"
        :compact="compact"
        @update="setCurrentPredicate"
        @change="$emit('change', $event)"
        @focus.native="showCompletions"
        @keyup.native.esc="hideCompletions"
      />
    </template>

    <template #after="{ toggleCompletions }">
      <FdButton
        @click="toggleCompletions"
        :compact="compact"
        icon="search"
        styling="light"
      />
    </template>

    <template #default="{ hideCompletions }">
      <FdCompletionList
        v-if="hasMatches"
        :completions="completionsMatchingPredicate"
        :predicate="currentPredicate"
        @select="
          completion => setCurrentPredicate(completion) || hideCompletions()
        "
      />
      <template v-else>
        <slot name="empty">
          <p class="fd-has-text-align-center" v-fd-type:-1 v-fd-padding:tiny>
            nothing here
          </p>
        </slot>
      </template>
    </template>
  </FdComboboxBase>
</template>

<script>
import { Uid } from "./../../mixins";
import FdButton from "./../Button/Button.vue";
import FdInput from "./../Form/Controls/Input.vue";
import FdCompletionList from "./CompletionList.vue";
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
    FdComboboxBase,
    FdCompletionList,
    FdButton,
    FdInput
  },
  props: {
    predicate: { type: String, default: null },
    completions: { type: Array, default: () => [] },
    placeholder: { type: String, default: "" },
    compact: { type: Boolean, default: false }
  },
  computed: {
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
      currentPredicate: this.predicate
    };
  }
};
</script>
