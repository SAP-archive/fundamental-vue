<template>
  <div class="fd-time-picker">
    <fd-popover body-size-mode="equal-trigger" placement="bottom-start">
      <template #control="{toggle, show, hide}">
        <fd-input-group :compact="compact">
          <template #input>
            <fd-input :value="timeValue" :compact="compact" :placeholder="placeholder" />
          </template>
          <template #after>
            <fd-input-group-addon>
              <fd-input-group-button @click="toggle" styling="light" icon="fob-watch" />
            </fd-input-group-addon>
          </template>
        </fd-input-group>
      </template>

      <fd-time-item
        :value="timeValue"
        :showMeridian="showMeridian"
        @timeItemUpdate="updateTimeItem"
      />
    </fd-popover>
  </div>
</template>

<script>
import FdPopover from "./../Popover/Popover.vue";
import FdInputGroup from "./../InputGroup/InputGroup.vue";
import FdInputGroupButton from "./../InputGroup/InputGroupButton.vue";
import FdInputGroupAddon from "./../InputGroup/InputGroupAddon.vue";
import FdInput from "./../Form/Controls/Input.vue";
import FdTimeItem from "./TimeItem.vue";

export default {
  name: "FdTimePicker",
  components: {
    FdPopover,
    FdInput,
    FdInputGroup,
    FdInputGroupButton,
    FdInputGroupAddon,
    FdTimeItem
  },
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
