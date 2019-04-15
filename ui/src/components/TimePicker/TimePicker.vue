<template>
  <div class="fd-time-picker">
    <Popover :uid="uid" noArrow :popoverVisible="false">
      <div class="fd-popover__control" slot="control">
        <InputGroup
          :compact="compact"
          afterClass="fd-input-group__addon--button"
        >
          <Input
            :value="timeValue"
            :compact="compact"
            :placeholder="placeholder"
          />
          <Button styling="light" slot="after" icon="fob-watch" />
        </InputGroup>
      </div>
      <TimeItem
        :value="timeValue"
        :showMeridian="showMeridian"
        @timeItemUpdate="updateTimeItem"
      />
    </Popover>
  </div>
</template>

<script>
import { Uid } from "@/mixins";
import { Popover } from "@/components/Popover";
import { InputGroup } from "@/components/Form";
import Input from "@/components/Form/Controls/Input.vue";
import { Button } from "@/components/Button";
import TimeItem from "./TimeItem.vue";

export default {
  name: "FdTimePicker",
  mixins: [Uid],
  components: { Popover, Input, InputGroup, Button, TimeItem },
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
