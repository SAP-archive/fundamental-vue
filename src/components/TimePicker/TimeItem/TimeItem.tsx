import { Component, Base, Prop } from "@/core";
import { TimeAction } from './TimeAction';
import { TimeInput } from './TimeInput';

interface Props {
    cyclic?: boolean;
    type?: TimeItemType;
    value?: string | number | null;
    ariaLabel?: string | null;
};

// TimeItem type
const typeMapping = {
    hour24: '24 Hour range',
    hour12: '12 Hour range',
    minute: 'Minute range',
    second: 'Second range',
    period: 'AM/PM period range'
};
export type TimeItemType = keyof (typeof typeMapping);
export const TimeItemTypeList = Object.keys(typeMapping) as TimeItemType[];

@Component('TimeItem')
export class TimeItem extends Base<Props>{
    @Prop('If the values in the time item range should cycle back', {
        type: Boolean,
        default: true,
    })
    public cyclic!: boolean;

    @Prop('Time Item Type', {
        type: String,
        required: true,
        acceptableValues: TimeItemTypeList,
        validator: TimeItemTypeList.includes,
    })
    public type!: TimeItemType;

    @Prop('Value in the TimeItem input field', {
        type: String,
        default: '--',
    })
    public value!: string | number | null;

    @Prop('Aria Label', {
        type: String,
        default: 'Time Item'
    })
    public ariaLabel!: string | null;

    public render() {
        return (
            <div class='fd-time__item' aria-label={this.ariaLabel}>
                <TimeAction
                    icon='navigation-up-arrow'
                    type={'standard'}
                    on-click={() => this.$emit('moveUp')}></TimeAction>
                <TimeInput value={this.value}></TimeInput>
                <TimeAction
                    icon='navigation-down-arrow'
                    type={'standard'}
                    pon-click={() => this.$emit('moveDown')}></TimeAction>
            </div>
        );
    }
}