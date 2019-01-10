import { Component, Base, Prop, Event } from '@/core';
import { TimeAction } from './TimeAction';
import { TimeInput } from './TimeInput';
import { Watch } from 'vue-property-decorator';

interface Props {
    type?: TimeType;
    value?: string | number | null;
    ariaLabel?: string | null;
}

// Time type
const typeMapping = {
    hour24: '24 Hour range',
    hour12: '12 Hour range',
    minute: 'Minute range',
    second: 'Second range',
    period: 'AM/PM period range',
};
export type TimeType = keyof (typeof typeMapping);
export const TimeTypeList = Object.keys(typeMapping) as TimeType[];

@Component('Time')
@Event('timeUpdate','Event triggered whenever the time value is updated.')
export class Time extends Base<Props> {

    @Prop('Time Item Type', {
        type: String,
        required: true,
        acceptableValues: TimeTypeList,
        validator: TimeTypeList.includes,
    })
    public type!: TimeType;

    @Prop('Value in the Time input field', {
        type: [String, Number],
        default: '--',
    })
    public value!: string | number;

    @Prop('Aria Label', {
        type: String,
        default: 'Time Item',
    })
    public ariaLabel!: string | null;

    public $tsxProps!: Readonly<{}> & Readonly<Props>;
    private inputValue: string | number = this.value;

    private getRange() {
        return {
            hour24: {
                min: '00',
                max: '23',
            },
            hour12: {
                min: '00',
                max: '12',
            },
            minute: {
                min: '00',
                max: '59',
            },
            second: {
                min: '00',
                max: '60',
            },
            period: {
                min: 'AM',
                max: 'PM',
            },
        };
    }

    private getPreviousValue() {
        const previousValue = Number(this.inputValue) > Number(this.getRange()[this.type].min) ? Number(this.inputValue) - 1 : this.getRange()[this.type].max;
        return previousValue.toString().padStart(2, '0');
    }


    private getNextValue() {
        const nextValue = Number(this.inputValue) < Number(this.getRange()[this.type].max) ? Number(this.inputValue) + 1 : this.getRange()[this.type].min;
        return nextValue.toString().padStart(2, '0');
    }

    private checkValueRange(timeValue: string | number) {
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
        } else {
            value = '--';
        }
        this.inputValue = value;
        this.$emit('update:value', this.inputValue);
        this.emitTimeUpdate();
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
        this.emitTimeUpdate();
    }

    @Watch('value')
    public handleNewValue(newValue: string) {
        this.inputValue = newValue;
        this.$emit('input', this.inputValue);
    }

    private sanitizeValue() {
        let value: string | number;
        let isValInRange: boolean;
        if (this.type === 'hour24' || this.type === 'hour12' || this.type === 'minute' || this.type === 'second') {
            isValInRange = this.checkValueRange(this.inputValue);
            value = isValInRange ? this.inputValue : this.getRange()[this.type].min;
        } else if (this.type === 'period') {
            const period = this.inputValue.toString().toUpperCase();
            value = (period === this.getRange()[this.type].min || period === this.getRange()[this.type].max) ? period : this.getRange()[this.type].min;
        } else {
            value = '--';
        }
        this.inputValue = value;
        this.$emit('update:value', this.inputValue);
    }

    private emitTimeUpdate(){
        this.$emit('timeUpdate', this.inputValue);
    }

    private timeUpdate(newValue : string){
        this.inputValue = newValue;
        this.emitTimeUpdate();
    }

    public render() {
        this.sanitizeValue();
        return (
            <div class='fd-time__item' aria-label={this.ariaLabel}>
                <TimeAction
                    icon='navigation-up-arrow'
                    type={'standard'}
                    on-click={this.moveUp}></TimeAction>
                <TimeInput value={this.inputValue} on-input={this.timeUpdate}></TimeInput>
                <TimeAction
                    icon='navigation-down-arrow'
                    type={'standard'}
                    on-click={this.moveDown}></TimeAction>
            </div>
        );
    }
}
