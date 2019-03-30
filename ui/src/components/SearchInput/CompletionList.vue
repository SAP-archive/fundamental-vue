<template>
  <FdMenuList>
    <FdMatchingCompletion
      v-for="completion in completions"
      :key="completion"
      @click="$emit('select', completion)"
      v-bind="matchingCompletionProps(completion)"
    />
  </FdMenuList>
</template>

<script>
import FdMenuList from "./../Menu/MenuList.vue";
import FdMatchingCompletion from "./MatchingCompletion.vue";

export default {
  components: { FdMatchingCompletion, FdMenuList },
  props: {
    completions: { type: Array, default: () => [] },
    predicate: { type: String, default: null }
  },
  methods: {
    matchingCompletionProps(completion) {
      const { predicate } = this;
      if (predicate == null) {
        return { matchingPrefix: "", remainingCompletion: completion };
      }
      const matchingPrefix = completion.slice(0, predicate.length);
      const remainingCompletion = completion.slice(predicate.length);
      return {
        matchingPrefix,
        remainingCompletion
      };
    }
  }
};
</script>
