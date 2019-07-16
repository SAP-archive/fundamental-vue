<template>
  <FdMenuList v-if="hasMatches">
    <template v-for="completion in completions">
      <slot name="item" v-bind="matchingCompletionProps(completion)" />
    </template>
  </FdMenuList>
  <FdMenuList v-else>
    <slot name="no-results" />
  </FdMenuList>
</template>

<script>
import FdMenuList from "./../Menu/MenuList.vue";

export default {
  name: "FdSearchCompletionList",
  components: { FdMenuList },
  props: {
    completions: { type: Array, default: () => [] },
    predicate: { type: String, default: null }
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
      const matchesPredicate = completion => completion.toLowerCase().startsWith(predicate);
      return completions.filter(matchesPredicate);
    }
  },
  methods: {
    matchingCompletionProps(completion) {
      const { predicate } = this;
      if (predicate == null) {
        return {
          value: completion,
          matchingPrefix: "",
          remainingCompletion: completion
        };
      }
      const matchingPrefix = completion.slice(0, predicate.length);
      const remainingCompletion = completion.slice(predicate.length);
      return {
        matchingPrefix,
        remainingCompletion,
        value: completion
      };
    }
  }
};
</script>
