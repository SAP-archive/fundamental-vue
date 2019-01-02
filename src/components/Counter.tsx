
import { Base, Component, Prop } from '@/core';


const typeMapping = {
    info: 'info',
    notification: 'notification',
};

type counterTypes = keyof (typeof typeMapping);
const counterTypeValues = Object.keys(typeMapping) as counterTypes[];

export interface Props {
    type?: counterTypes;
    ariaLabel?: string;
    value?: number;
}


@Component('Counter')
export class Counter extends Base {

    @Prop('built-in counter type', {
        type: String,
        default: 'info',
        required: false,
        acceptableValues: counterTypeValues,
    })
    public type!: counterTypes;

    @Prop('Aria Label', {
        type: String,
        default: 'Counter Value',
        required: false,
    })
    public ariaLabel!: string;

    @Prop('Counter Value', {
        type: Number,
        default: 1,
        required: true,
    })
    public value!: number;

    public render() {
        let counterType = 'fd-counter';
        counterType += this.type === 'notification' ? ' fd-counter--notification' : '';
        const counterValue = !isNaN(Number(this.value)) ? Number(this.value) <= 999 ? this.value : '999+' : 1;

        return (
            <span class={counterType} aria-label={this.ariaLabel}>{counterValue}</span>
        );

    }
}
