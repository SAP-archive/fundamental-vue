// import { Component, Prop } from '@/core';
// import { Time, TimeType } from './Time/Time';
// import { mixins } from 'vue-class-component';
// import { TimeRangeMixin } from './mixins/TimeRange';
// interface Props {
//   value?: string | null;
//   ariaLabel?: string | null;
//   showMeridian?: boolean;
// }

// interface TimeUnitUpdateParams {
//   timeUnitType: TimeUnitType;
//   value: string;
//   timeType: TimeType;
//   upperTimeUnitType: TimeUnitType;
//   upperTimeUnitUpdateHandler: (arg1: string) => void;
// }

// // Time type
// const timeUnitMapping = {
//   hour: 'hour',
//   minute: 'minute',
//   second: 'second',
//   meridian: 'meridian',
// };
// type TimeUnitType = keyof (typeof timeUnitMapping);

// const TimeItemBase = mixins(TimeRangeMixin);

// @Component('TimeItem')
// export class TimeItem extends TimeItemBase<Props> {
//   @Prop('Aria Label for TimeItem', {
//     type: String,
//     default: 'Time Item',
//   })
//   ariaLabel!: string | null;

//   @Prop('Value of Time to be set in the time Item. This has to be in the format "hh:mm:ss" / "hh:mm" for the 24 hour clock or "hh:mm:ss a" / "hh:mm a" for the 12 hour clock', {
//     type: String,
//     // validator needs to be added.
//   })
//   value!: string | null;

//   @Prop('If Meridian should be shown', {
//     type: Boolean,
//     default: false,
//   })
//   showMeridian!: boolean;

//   $tsxProps!: Readonly<{}> & Readonly<Props>;
//   private timeValue: string | number | null = this.value;
//   private hour: string | number = '--';
//   private minute: string | number = '--';
//   private second: string | number = '--';
//   private meridian: string | number = '--';

//   private splitTime() {
//     if (this.timeValue) {
//       const time = this.timeValue.toString().split(' ');
//       const timeValue = time[0].split(':');
//       [this.hour, this.minute, this.second, this.meridian] = [timeValue[0], timeValue[1], timeValue[2], time[1]];
//     }
//   }

//   private updateHour(hour: string) {
//     const hourType = this.showMeridian ? 'hour12' : 'hour24';

//     if ((Number(this.hour) === Number(this.range[hourType].max) && Number(hour) === Number(this.range[hourType].max) - 1) || (Number(hour) === Number(this.range[hourType].max) && Number(this.hour) === Number(this.range[hourType].max) - 1)) {
//       let meridian = this.meridian;
//       meridian = this.meridian === this.range.meridian.min ? this.range.meridian.max : this.range.meridian.min;
//       this.updateMeridian(meridian);
//     }
//     this.validateTimeUnit('hour', hour, hourType);

//   }

//   private updateMinute(minute: string) {
//     const minuteValue = this.minute === '00' && minute === '-1' ? this.range.minute.max : minute;
//     const updateParameters: TimeUnitUpdateParams = {
//       timeUnitType: 'minute',
//       value: minuteValue,
//       timeType: 'minute',
//       upperTimeUnitType: 'hour',
//       upperTimeUnitUpdateHandler: this.updateHour,
//     };
//     this.updateUnit(updateParameters);
//   }

//   private updateSecond(second: string) {
//     const updateParameters: TimeUnitUpdateParams = {
//       timeUnitType: 'second',
//       value: second,
//       timeType: 'second',
//       upperTimeUnitType: 'minute',
//       upperTimeUnitUpdateHandler: this.updateMinute,
//     };
//     this.updateUnit(updateParameters);
//   }

//   private updateMeridian(meridian: string) {
//     this.meridian = meridian ? meridian : '--';
//     this.updateTimeItem();
//   }

//   private updateUnit(updateParameters: TimeUnitUpdateParams) {
//     let dividend = 0;
//     let remainder = 0;
//     if (Number(this[updateParameters.timeUnitType]) === Number(this.range[updateParameters.timeType].min) && Number(updateParameters.value) === Number(this.range[updateParameters.timeType].max)) {
//       dividend = -1;
//       remainder = Number(this.range[updateParameters.timeType].max);
//       this[updateParameters.timeUnitType] = updateParameters.value;
//     } else if (Number(this[updateParameters.timeUnitType]) === Number(this.range[updateParameters.timeType].max) && Number(updateParameters.value) === Number(this.range[updateParameters.timeType].min)) {
//       dividend = 1;
//       remainder = Number(this.range[updateParameters.timeType].min);
//       this[updateParameters.timeUnitType] = updateParameters.value;
//     } else {
//       if (this.validateTimeUnit(updateParameters.timeUnitType, updateParameters.value, updateParameters.timeType)) {
//         remainder = Number(updateParameters.value) % (Number(this.range[updateParameters.timeType].max) + 1);
//         dividend = Math.floor((Number(updateParameters.value) / (Number(this.range[updateParameters.timeType].max) + 1)));
//         this.validateTimeUnit(updateParameters.timeUnitType, remainder.toString().padStart(2, '0'), updateParameters.timeType);
//       }
//     }
//     const upperValue = (Number(this[updateParameters.upperTimeUnitType]) + dividend).toString().padStart(2, '0');
//     updateParameters.upperTimeUnitUpdateHandler(upperValue);
//   }

//   private validateTimeUnit(unitType: TimeUnitType, value: string, type: TimeType) {
//     let valueOutOfRange = false;
//     if (this.checkValueRange(value, type)) {
//       this[unitType] = value ? value : '--';
//     } else if (!isNaN(Number(value))) {
//       valueOutOfRange = true;
//     } else {
//       this[unitType] = '--';
//     }
//     this.updateTimeItem();
//     return valueOutOfRange;
//   }

//   private updateTimeItem() {
//     const timeValue = [this.hour, this.minute, this.second].join(':');
//     const time = [timeValue, this.meridian].join(' ');
//     this.timeValue = time;
//     this.$emit('timeItemUpdate', this.timeValue);
//   }

//   render() {
//     this.splitTime();
//     return (
//       <div class='fd-time'>
//         <Time type={this.showMeridian ? 'hour12' : 'hour24'} value={this.hour} on-timeUpdate={this.updateHour} placeholder='hh'></Time>
//         <Time type='minute' value={this.minute} on-timeUpdate={this.updateMinute} placeholder='mm'></Time>
//         {(this.second !== null && this.second !== undefined) ? (<Time type='second' value={this.second} on-timeUpdate={this.updateSecond} placeholder='ss'></Time>) : ''}
//         {this.showMeridian ? (
//           <Time type='meridian' value={this.meridian} on-timeUpdate={this.updateMeridian} placeholder='am'></Time>
//         ) : ''}
//       </div>
//     );
//   }
// }
