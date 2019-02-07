import { TimeType } from './../Time/TimeType';

import Vue from 'vue';

const makeDefaultRange = () => ({
  hour24: {
    min: '00',
    max: '23',
  },
  hour12: {
    min: '01',
    max: '12',
  },
  minute: {
    min: '00',
    max: '59',
  },
  second: {
    min: '00',
    max: '59',
  },
  meridian: {
    min: 'am',
    max: 'pm',
  },
});

type RangeType = ReturnType<typeof makeDefaultRange>

export default Vue.extend({
  methods: {
    checkValueRange(timeValue: string | number, timeType: TimeType): boolean {
      return !isNaN(Number(timeValue)) && (Number(timeValue) >= Number(this.range[timeType].min) && Number(timeValue) <= Number(this.range[timeType].max));
    },
  },
  data() {
    return {
      range: makeDefaultRange() as RangeType,
    };
  },
});
