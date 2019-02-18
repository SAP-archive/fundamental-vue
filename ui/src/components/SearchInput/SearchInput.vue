<template>
  <div class="fd-search-input">
    <Popover noArrow v-if="suggestionsAvailable">
      <div class="fd-combobox-control" slot="control">
        <InputGroup
          afterClass="fd-input-group__addon--button"
          :compact="compact"
        >
          <Input
            :value="searchValue"
            :placeholder="placeholder"
            :compact="compact"
            @keyup.native="handleKeyboardSearch"
            @input="setCurrentValue"
            @change="setCurrentValue"
          />
          <Button
            styling="light"
            slot="after"
            icon="search"
            @click="handleSearchClick"
          />
        </InputGroup>
      </div>
      <slot />
    </Popover>
    <div v-else class="fd-combobox-control" slot="control">
      <InputGroup afterClass="fd-input-group__addon--button" :compact="compact">
        <Input
          :value="searchValue"
          :placeholder="placeholder"
          :compact="compact"
          @keyup.native="handleKeyboardSearch"
          @input="setCurrentValue"
          @change="setCurrentValue"
        />
        <Button
          styling="light"
          slot="after"
          icon="search"
          @click="handleSearchClick"
        />
      </InputGroup>
    </div>
  </div>
</template>

<script lang="ts">
import { Uid, mixins } from "@/mixins";
import { Popover } from "@/components/Popover";
import { Button } from "@/components/Button";
import { Input, InputGroup } from "@/components/Form";

export default mixins(Uid).extend({
  name: "FdSearchInput",
  components: { Popover, Button, InputGroup, Input },
  props: {
    value: { type: String, default: "" },
    placeholder: { type: String, default: "" },
    ariaLabel: { type: String, default: "Search Input" },
    compact: { type: Boolean, default: false }
  },
  computed: {
    suggestionsAvailable(): boolean {
      const list = this.$slots.default || [];
      return list.length > 0;
    }
  },
  methods: {
    handleSearchClick() {
      this.emitSearch();
    },
    setCurrentValue(newValue: string) {
      this.searchValue = newValue;
      this.emitSearch();
      this.$emit("update:value", this.searchValue);
    },
    handleKeyboardSearch({ keyCode }: KeyboardEvent) {
      if (keyCode === 13) {
        this.emitSearch();
      } else if (this.$slots.default && this.$slots.default.length > 0) {
        this.emitAutoComplete();
      }
    },
    emitSearch() {
      this.$emit("search", this.searchValue);
    },
    emitAutoComplete() {
      this.$emit("autoComplete", this.searchValue);
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(newValue: string) {
        this.searchValue = newValue;
        this.$emit("input", this.searchValue);
      }
    }
  },
  data() {
    return {
      searchValue: this.value as string
    };
  }
});
</script>
