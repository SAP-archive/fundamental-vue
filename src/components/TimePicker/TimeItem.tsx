import { Component, Prop, Event } from '@/core';
import { Time } from './Time/Time';
import { mixins } from 'vue-class-component';
import { DateRangeMixin } from './mixins/DateRange';

interface Props {
  value?: string | null;
  ariaLabel?: string | null;
  showMeridian?: boolean;
}

const TimeItemBase = mixins(DateRangeMixin);
@Component('TimeItem')
@Event('timeItemUpdate', 'Event triggered whenever the time value is updated.')
export class TimeItem extends TimeItemBase<Props> {
  @Prop('Aria Label for TimeItem', {
    type: String,
    default: 'Time Item',
  })
  public ariaLabel!: string | null;

  @Prop('Value of Time to be set in the time Item. This has to be in the format "hh:mm:ss" / "hh:mm" for the 24 hour clock or "hh:mm:ss a" / "hh:mm a" for the 12 hour clock', {
    type: String,
    // validator needs to be added.
  })
  public value!: string | null;

  @Prop('If Meridian should be shown', {
    type: Boolean,
    default: false,
  })
  public showMeridian!: boolean;

  public $tsxProps!: Readonly<{}> & Readonly<Props>;
  private timeValue: string | number | null = this.value;
  private hour: string | number | null = '--';
  private minute: string | number = '--';
  private second: string | number = '--';
  private meridian: string | number = '--';

  private splitTime() {
    if (this.timeValue) {
      const time = this.timeValue.toString().split(' ');
      const timeValue = time[0].split(':');
      [this.hour, this.minute, this.second, this.meridian] = [timeValue[0], timeValue[1], timeValue[2], time[1]];
    }
  }

  private updateHour(hour: string) {
    this.hour = hour;
    this.updateTime();
  }

  private updateMinute(minute: string) {
    this.minute = minute;
    this.updateTime();
  }

  private updateSecond(second: string) {
    this.second = second;
    this.updateTime();
  }

  private updateMeridian(meridian: string) {
    this.meridian = meridian;
    this.updateTime();
  }

  private updateTime() {
    const timeValue = [this.hour, this.minute, this.second].join(':');
    const time = [timeValue, this.meridian].join(' ');
    this.timeValue = time;
    this.$emit('timeItemUpdate', this.timeValue);
  }

  public render() {
    this.splitTime();
    return (
      <div class='fd-time'>
        <Time type={this.showMeridian ? 'hour12' : 'hour24'} value={this.hour} on-timeUpdate={this.updateHour}></Time>
        <Time type='minute' value={this.minute} on-timeUpdate={this.updateMinute}></Time>
        {this.second ? (<Time type='second' value={this.second} on-timeUpdate={this.updateSecond}></Time>) : ''}
        {this.showMeridian ? (
          <Time type='meridian' value={this.meridian} on-timeUpdate={this.updateMeridian}></Time>
        ) : ''}
      </div>
    );
  }
}
