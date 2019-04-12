<template>
  <div class="fd-time-picker">
    <FdPopover placement="bottom-start">
      <template #control="{toggle, show, hide}">
        <InputGroup
          :compact="compact"
          afterClass="fd-input-group__addon--button"
        >
          <Input
            :value="timeValue"
            :compact="compact"
            :placeholder="placeholder"
          />
          <Button
            @click="toggle"
            styling="light"
            slot="after"
            icon="fob-watch"
          />
        </InputGroup>
      </template>
      <TimeItem
        :value="timeValue"
        :showMeridian="showMeridian"
        @timeItemUpdate="updateTimeItem"
      />
    </FdPopover>
  </div>
</template>

<script>
import FdPopover from "./../Popover/Popover.vue";
import { InputGroup } from "./../Form";
import Input from "./../Form/Controls/Input.vue";
import { Button } from "./../Button";
import TimeItem from "./TimeItem.vue";

export default {
  name: "FdTimePicker",
  components: { FdPopover, Input, InputGroup, Button, TimeItem },
  props: {
    id: String, // FIXME
    placeholder: String,
    value: String, // FIXME: Add Validator
    ariaLabel: String,
    compact: { type: Boolean, default: false },
    showMeridian: { type: Boolean, default: false }
  },
  methods: {
    updateTimeItem(time) {
      this.timeValue = time;
      this.$emit("timePickerUpdate", this.timeValue);
    }
  },
  data() {
    return {
      timeValue: this.value
    };
  }
};
</script>
