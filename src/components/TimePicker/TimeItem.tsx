import { Component, Base, Prop } from '@/core';
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
    private timeValue: string | number = this.value;
    // private time: object | null = {
    //     hour : '--',
    //     minute : '--',
    //     second : '--',
    //     period : '--'
    // };

    public render() {
        return (
            <div>
                <Time type={this.type}></Time>
            </div>
        );
    }
}