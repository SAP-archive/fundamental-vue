<template>
  <div class="fd-combobox-input">
    <Popover
      @click="handleMenuItemClick"
      noArrow
      :popoverVisible="currentPopoverVisible"
      @visible="currentPopoverVisible = $event"
    >
    <template v-slot:control="{toggle}">
      <div class="fd-combobox-control">
        <InputGroup :compact="compact" afterClass="fd-input-group__addon--button">
          <Input
            :id="uid"
            :value="value"
            :compact="compact"
            :placeholder="placeholder"
            @click.native="toggle"
            @keyup.native="handleKeyup"
            @input="setCurrentValue"
          />
          <template #after>
          <Button
            @click="toggle"
            icon="navigation-down-arrow"
            styling="light"
          />
          </template>
        </InputGroup>
      </div>
    </template>
      <slot/>
    </Popover>
  </div>
</template>

<script lang="ts">
import { mixins, Uid } from "@/mixins";
import { Input, InputGroup } from "@/components/Form";
import { Button } from "@/components/Button";
import { Popover } from "@/components/Popover";
import { PropValidator } from "vue/types/options";
import MenuItem from './../Menu/MenuItem.vue';
type MenuItemType = InstanceType<typeof MenuItem>;

export default mixins(Uid).extend({
  name: "FdCombobox",
  components: { Button, Popover, Input, InputGroup },
  provide(): object {
    return {
      combobox: this as any
    };
  },
  props: {
    value: { type: String, default: null } as PropValidator<string | null>,
    placeholder: { type: String, default: "" } as PropValidator<string>,
    ariaLabel: { type: String, default: "Combobox" } as PropValidator<string>,
    popoverVisible: { type: Boolean, default: false } as PropValidator<boolean>,
    compact: { type: Boolean, default: false } as PropValidator<boolean>
  },
  data() {
    return {
      currentPopoverVisible: this.popoverVisible as boolean,
      currentValue: this.value as string | number | null
    };
  },
  methods: {
    handleKeyup({ keyCode }: KeyboardEvent): void {
      if (keyCode !== 13) {
        return;
      }
      if (this.currentPopoverVisible) {
        this.togglePopoverVisible();
      }
    },
    setCurrentValue(newValue: string | number | null): void {
      this.currentValue = newValue;
      this.$emit("input", this.currentValue);
      this.$emit("update:value", this.currentValue);
    },
    handleMenuItemClick(item: MenuItemType): void {
      this.setCurrentValue(item.value);
    },
    togglePopoverVisible(): void {
      this.currentPopoverVisible = !this.currentPopoverVisible;
    }
  }
});
</script>
