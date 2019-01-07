import { Component, Base, Prop } from "@/core";
import { TimeAction } from './TimeAction';
import { TimeInput } from './TimeInput';
import { Watch } from 'vue-property-decorator';

interface Props {
    type?: TimeItemType;
    value?: string | number;
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

    @Prop('Time Item Type', {
        type: String,
        required: true,
        acceptableValues: TimeItemTypeList,
        validator: TimeItemTypeList.includes,
    })
    public type!: TimeItemType;

    @Prop('Value in the TimeItem input field', {
        type: [String, Number],
        default: '--',
    })
    public value!: string | number;

    @Prop('Aria Label', {
        type: String,
        default: 'Time Item'
    })
    public ariaLabel!: string | null;

    public $tsxProps!: Readonly<{}> & Readonly<Props>;
    private inputValue: string | number = this.value;

    private getRange() {
        return {
            hour24: {
                min: '00',
                max: '23'
            },
            hour12: {
                min: '00',
                max: '12'
            },
            minute: {
                min: '00',
                max: '59'
            },
            second: {
                min: '00',
                max: '60'
            },
            period: {
                min: 'AM',
                max: 'PM'
            }
        };
    }

    private getPreviousValue() {
        let previousValue = Number(this.inputValue) > Number(this.getRange()[this.type].min) ? Number(this.inputValue) - 1 : this.getRange()[this.type].max;
        return previousValue.toString().padStart(2, '0');
    }


    private getNextValue() {
        let nextValue = Number(this.inputValue) < Number(this.getRange()[this.type].max) ? Number(this.inputValue) + 1 : this.getRange()[this.type].min;
        return nextValue.toString().padStart(2, '0');
    }

    private checkValueRange(timeValue) {
        return !isNaN(Number(timeValue)) && (Number(timeValue) >= Number(this.getRange()[this.type].min) && Number(timeValue) <= Number(this.getRange()[this.type].max));
    }

    private moveUp() {
        let value: string;
        let isValInRange: boolean;
        if (this.type === 'hour24' || this.type === 'hour12' || this.type === 'minute' || this.type === 'second') {
            value = !isNaN(Number(this.inputValue)) ? this.getPreviousValue() : this.getRange()[this.type].min;
            isValInRange = this.checkValueRange(value);
            value = isValInRange ? value : this.getRange()[this.type].min;
        } else if (this.type === 'period') {
            value = this.inputValue.toString().toUpperCase() === this.getRange()[this.type].min ? this.getRange()[this.type].max : this.getRange()[this.type].min;
        }
        else {
            value = '--';
        }
        this.inputValue = value;
        this.$emit('update:value', this.inputValue);
    }

    private moveDown() {
        let value: string;
        if (this.type === 'hour24' || this.type === 'hour12' || this.type === 'minute' || this.type === 'second') {
            value = !isNaN(Number(this.inputValue)) ? this.getNextValue() : this.getRange()[this.type].min;
        } else if (this.type === 'period') {
            value = this.inputValue.toString().toUpperCase() === this.getRange()[this.type].min ? this.getRange()[this.type].max : this.getRange()[this.type].min;
        } else {
            value = '--';
        }
        this.inputValue = value;
        this.$emit('update:value', this.inputValue);
    }

    @Watch('value')
    public handleNewValue(newValue: string) {
        this.inputValue = newValue;
        this.$emit('input', this.inputValue);
    }

    public render() {
        return (
            <div class='fd-time__item' aria-label={this.ariaLabel}>
                <TimeAction
                    icon='navigation-up-arrow'
                    type={'standard'}
                    on-click={this.moveUp}></TimeAction>
                <TimeInput value={this.inputValue} on-input={(newValue: string) => this.inputValue = newValue}></TimeInput>
                <TimeAction
                    icon='navigation-down-arrow'
                    type={'standard'}
                    on-click={this.moveDown}></TimeAction>
            </div>
        );
    }
}