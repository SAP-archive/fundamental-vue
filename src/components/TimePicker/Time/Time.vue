<template>
  <div class="fd-time__item" :aria-label="ariaLabel">
    <TimeAction icon="navigation-up-arrow" type="standard" @click="increaseValue" />
    <TimeInput
      :value="sanitizeInputValue"
      @input="timeUpdate"
      :placeholder="placeholder"
    />
    <TimeAction
      icon="navigation-down-arrow"
      type="standard"
      @click="decreaseValue"
    />
  </div>
</template>

<script lang="ts">
import { PropValidator } from "vue/types/options";
import { mixins } from "@/mixins2";
import TimeRange from "../mixins/TimeRange";
import TimeAction from './TimeAction.vue';
import TimeInput from './TimeInput.vue';



// Time type
const typeMapping = {
  hour24: "hour24",
  hour12: "hour12",
  minute: "minute",
  second: "second",
  meridian: "meridian"
};
export type TimeType = keyof (typeof typeMapping);
export const TimeTypeList = Object.keys(typeMapping) as TimeType[];
const isTimeType = (value: any) => TimeTypeList.indexOf(value) >= 0;

export default mixins(TimeRange).extend({
  name: "FdTime",
  components: { TimeAction, TimeInput },
  props: {
    type: {
      type: String,
      required: true,
      validator: isTimeType
    } as PropValidator<TimeType>,
    value: {
      type: [String, Number],
      default: ""
    },
    ariaLabel: {
      type: String,
      default: "Time Item"
    },
    placeholder: {
      type: String,
      default: ""
    }
  },
  computed: {
    sanitizeInputValue(): string | number {
      let value: string | number;
      let isValInRange: boolean;
      if (
        this.type === "hour24" ||
        this.type === "hour12" ||
        this.type === "minute" ||
        this.type === "second"
      ) {
        isValInRange = this.checkValueRange(this.inputValue, this.type);
        value = isValInRange ? this.inputValue : "";
      } else if (this.type === "meridian") {
        const meridian = this.inputValue.toString().toLowerCase();
        value =
          meridian === this.range[this.type].min ||
          meridian === this.range[this.type].max
            ? meridian
            : "";
      } else {
        value = "";
      }
      return value;
    },
    previousValue(): string {
      const inputValue = Number(this.inputValue);
      const range = this.range[this.type];
      const { min, max } = range;
      const previousValue = inputValue > Number(min) ? inputValue - 1 : max;
      return previousValue.toString().padStart(2, "0");
    },
    nextValue(): string {
      const inputValue = Number(this.inputValue);
      const range = this.range[this.type];
      const { min, max } = range;
      const nextValue = inputValue < Number(max) ? inputValue + 1 : min;
      return nextValue.toString().padStart(2, "0");
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(newValue: string) {
        this.inputValue = newValue;
        this.$emit("input", this.inputValue);
      }
    }
  },
  methods: {
    decreaseValue() {
      let value: string;
      let isValInRange: boolean;
      if (
        this.type === "hour24" ||
        this.type === "hour12" ||
        this.type === "minute" ||
        this.type === "second"
      ) {
        value = !isNaN(Number(this.inputValue))
          ? this.previousValue
          : this.range[this.type].min;
        isValInRange = this.checkValueRange(value, this.type);
        value = isValInRange ? value : this.range[this.type].min;
      } else if (this.type === "meridian") {
        value =
          this.inputValue.toString().toLowerCase() === this.range[this.type].min
            ? this.range[this.type].max
            : this.range[this.type].min;
      } else {
        value = "";
      }
      this.inputValue = value;
      this.$emit("update:value", this.inputValue);
      this.emitTimeUpdate();
    },
    increaseValue() {
      let value: string;
      if (
        this.type === "hour24" ||
        this.type === "hour12" ||
        this.type === "minute" ||
        this.type === "second"
      ) {
        value = !isNaN(Number(this.inputValue))
          ? this.nextValue
          : this.range[this.type].min;
      } else if (this.type === "meridian") {
        value =
          this.inputValue.toString().toLowerCase() === this.range[this.type].min
            ? this.range[this.type].max
            : this.range[this.type].min;
      } else {
        value = "";
      }
      this.inputValue = value;
      this.$emit("update:value", this.inputValue);
      this.emitTimeUpdate();
    },
    emitTimeUpdate() {
      this.$emit("timeUpdate", this.inputValue);
    },
    sanitizeValue() {
      let value: string | number;
      let isValInRange: boolean;
      if (
        this.type === "hour24" ||
        this.type === "hour12" ||
        this.type === "minute" ||
        this.type === "second"
      ) {
        isValInRange = this.checkValueRange(this.inputValue, this.type);
        value = isValInRange ? this.inputValue : "";
      } else if (this.type === "meridian") {
        const meridian = this.inputValue.toString().toLowerCase();
        value =
          meridian === this.range[this.type].min ||
          meridian === this.range[this.type].max
            ? meridian
            : "";
      } else {
        value = "";
      }
      this.inputValue = value;
      this.$emit("update:value", this.inputValue);
    },
    timeUpdate(newValue: string) {
      if (
        this.type === "meridian" &&
        (newValue !== this.range[this.type].min &&
          newValue !== this.range[this.type].max)
      ) {
        this.inputValue = "";
      } else {
        this.inputValue = newValue;
      }
      this.emitTimeUpdate();
    }
  },
  data() {
    return {
      inputValue: this.value as string | number
    };
  }
});
</script>
