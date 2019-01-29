import { Component, Base } from '@/core';
import { TimeType } from '../Time/Time';

@Component('TimeRangeMixin')
export class TimeRangeMixin extends Base {

  private timeRange = {
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
  };
  public get range() {
    return (this.timeRange);
  }

  public checkValueRange(timeValue: string | number, timeType: TimeType) {
    return !isNaN(Number(timeValue)) && (Number(timeValue) >= Number(this.timeRange[timeType].min) && Number(timeValue) <= Number(this.timeRange[timeType].max));
  }
}
