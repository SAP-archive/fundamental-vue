<template>
  <div class="fd-time">
    <Time
      :type="showMeridian ? 'hour12' : 'hour24'"
      :value="hour"
      @timeUpdate="updateHour"
      placeholder="hh"
    />

    <Time type="minute" :value="minute" @timeUpdate="updateMinute" placeholder="mm"/>

    <Time
      v-if="shouldRenderSeconds"
      type="second"
      :value="second"
      @timeUpdate="updateSecond"
      placeholder="ss"
    />

    <Time
      v-if="showMeridian"
      type="meridian"
      :value="meridian"
      @timeUpdate="updateMeridian"
      placeholder="am"
    />
  </div>
</template>

<script lang="ts">
import { mixins } from "@/mixins";
import TimeRange from "./mixins/TimeRange";
import { TimeType } from './Time/TimeType';
import Time  from './Time/Time.vue'

const timeUnitMapping = {
  hour: 'hour',
  minute: 'minute',
  second: 'second',
  meridian: 'meridian',
};

type TimeUnitType = keyof (typeof timeUnitMapping);
interface TimeUnitUpdateParams {
  timeUnitType: TimeUnitType;
  value: string;
  timeType: TimeType;
  upperTimeUnitType: TimeUnitType;
  upperTimeUnitUpdateHandler: (arg1: string) => void;
}

export default mixins(TimeRange).extend({
  name: "FdTimeItem",
  components: { Time },
  props: {
    ariaLabel: { type: String, default: "Time Item" },
    value: String, // validator needs to be added.
    showMeridian: { type: Boolean, default: false }
  },
  computed: {
    shouldRenderSeconds(): boolean {
      return this.second != null;
    }
  },
  watch: {
    timeValue: {
      immediate: true,
      handler(newTimeValue: string | null) {
        if (newTimeValue != null) {
          const time = newTimeValue.toString().split(' ');
          const timeValue = time[0].split(':');
          [this.hour, this.minute, this.second, this.meridian] = [timeValue[0], timeValue[1], timeValue[2], time[1]];
        }
      },
    }
  },
  methods: {
    updateHour(hour: string) {
      const hourType = this.showMeridian ? "hour12" : "hour24";
      if (
        (Number(this.hour) === Number(this.range[hourType].max) &&
          Number(hour) === Number(this.range[hourType].max) - 1) ||
        (Number(hour) === Number(this.range[hourType].max) &&
          Number(this.hour) === Number(this.range[hourType].max) - 1)
      ) {
        let meridian = this.meridian;
        meridian =
          this.meridian === this.range.meridian.min
            ? this.range.meridian.max
            : this.range.meridian.min;
        this.updateMeridian(meridian);
      }
      this.validateTimeUnit("hour", hour, hourType);
    },
    updateMinute(minute: string) {
      const minuteValue =
        this.minute === "00" && minute === "-1"
          ? this.range.minute.max
          : minute;
      const updateParameters: TimeUnitUpdateParams = {
        timeUnitType: "minute",
        value: minuteValue,
        timeType: "minute",
        upperTimeUnitType: "hour",
        upperTimeUnitUpdateHandler: this.updateHour
      };
      this.updateUnit(updateParameters);
    },
    updateSecond(second: string) {
      const updateParameters: TimeUnitUpdateParams = {
        timeUnitType: "second",
        value: second,
        timeType: "second",
        upperTimeUnitType: "minute",
        upperTimeUnitUpdateHandler: this.updateMinute
      };
      this.updateUnit(updateParameters);
    },
    updateMeridian(meridian: string) {
      this.meridian = meridian ? meridian : "--";
      this.updateTimeItem();
    },
    updateUnit(updateParameters: TimeUnitUpdateParams) {
      let dividend = 0;
      let remainder = 0;
      if (
        Number(this[updateParameters.timeUnitType]) ===
          Number(this.range[updateParameters.timeType].min) &&
        Number(updateParameters.value) ===
          Number(this.range[updateParameters.timeType].max)
      ) {
        dividend = -1;
        remainder = Number(this.range[updateParameters.timeType].max);
        this[updateParameters.timeUnitType] = updateParameters.value;
      } else if (
        Number(this[updateParameters.timeUnitType]) ===
          Number(this.range[updateParameters.timeType].max) &&
        Number(updateParameters.value) ===
          Number(this.range[updateParameters.timeType].min)
      ) {
        dividend = 1;
        remainder = Number(this.range[updateParameters.timeType].min);
        this[updateParameters.timeUnitType] = updateParameters.value;
      } else {
        if (
          this.validateTimeUnit(
            updateParameters.timeUnitType,
            updateParameters.value,
            updateParameters.timeType
          )
        ) {
          remainder =
            Number(updateParameters.value) %
            (Number(this.range[updateParameters.timeType].max) + 1);
          dividend = Math.floor(
            Number(updateParameters.value) /
              (Number(this.range[updateParameters.timeType].max) + 1)
          );
          this.validateTimeUnit(
            updateParameters.timeUnitType,
            remainder.toString().padStart(2, "0"),
            updateParameters.timeType
          );
        }
      }
      const upperValue = (
        Number(this[updateParameters.upperTimeUnitType]) + dividend
      )
        .toString()
        .padStart(2, "0");
      updateParameters.upperTimeUnitUpdateHandler(upperValue);
    },
    validateTimeUnit(unitType: TimeUnitType, value: string, type: TimeType) {
      let valueOutOfRange = false;
      if (this.checkValueRange(value, type)) {
        this[unitType] = value ? value : "--";
      } else if (!isNaN(Number(value))) {
        valueOutOfRange = true;
      } else {
        this[unitType] = "--";
      }
      this.updateTimeItem();
      return valueOutOfRange;
    },
    updateTimeItem() {
      const timeValue = [this.hour, this.minute, this.second].join(":");
      const time = [timeValue, this.meridian].join(" ");
      this.timeValue = time;
      this.$emit("timeItemUpdate", this.timeValue);
    }
  },
  data() {
    return {
      timeValue: this.value as string | number | null,
      hour: "--" as string | number,
      minute: "--" as string | number,
      second: "--" as string | number,
      meridian: "--" as string | number
    };
  }
});
</script>
