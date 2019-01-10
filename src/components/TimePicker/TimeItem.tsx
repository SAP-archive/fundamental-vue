import { Component, Base, Prop, Event } from '@/core';
import { Time } from './Time/Time';

interface Props {
    type?: TimeItemType;
    value?: string | null;
    ariaLabel?: string | null;
}

// Time Item type
const typeMapping = {
    hour24: '24 Hour clock', // in the format hh:mm:ss or hh:mm
    hour12: '12 Hour clock', // in the format hh:mm:ss a or hh:mm a'
};
export type TimeItemType = keyof (typeof typeMapping);
const TimeItemTypeList = Object.keys(typeMapping) as TimeItemType[];

@Component('TimeItem')
@Event('timeItemUpdate', 'Event triggered whenever the time value is updated.')
export class TimeItem extends Base<Props>{
    @Prop('Aria Label for TimeItem', {
        type: String,
        default: 'Time Item'
    })
    public ariaLabel!: string | null;

    @Prop('Value of Time to be set in the time Item. This has to be in the format "hh:mm:ss" / "hh:mm" for the 24 hour clock or "hh:mm:ss a" / "hh:mm a" for the 12 hour clock', {
        type: String
        // validator needs to be added.
    })
    public value!: string | null;

    @Prop('Type of TimeItem i.e., 24 hour clock or 12 hour clock', {
        acceptableValues: TimeItemTypeList,
        type: String,
        required: true
    })
    public type!: TimeItemType;

    public $tsxProps!: Readonly<{}> & Readonly<Props>;
    private timeValue: string | number | null = this.value;
    private hour: string | number | null = '--';
    private minute: string | number = '--';
    private second: string | number = '--';
    private period: string | number = '--';

    private splitTime() {
        if (this.timeValue) {
            const time = this.timeValue.toString().split(" ");
            const timeValue = time[0].split(":");
            [this.hour, this.minute, this.second, this.period] = [timeValue[0], timeValue[1], timeValue[2], time[1]];
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

    private updatePeriod(period: string) {
        this.period = period;
        this.updateTime();
    }


    private updateTime() {
        const timeValue = [this.hour, this.minute, this.second].join(':');
        const time = [timeValue, this.period].join(" ");
        this.timeValue = time;
        this.$emit('timeItemUpdate',this.timeValue);
    }



    public render() {
        this.splitTime();
        return (
            <div id={this.id}>
                <Time type={this.type} value={this.hour} on-timeUpdate={this.updateHour}></Time>
                <Time type='minute' value={this.minute} on-timeUpdate={this.updateMinute}></Time>
                {this.second ? (<Time type='second' value={this.second} on-timeUpdate={this.updateSecond}></Time>) : ''}
                {this.type === 'hour12' ? (
                    <Time type='period' value={this.period} on-timeUpdate={this.updatePeriod}></Time>
                ) : ''}
            </div>
        );
    }
}