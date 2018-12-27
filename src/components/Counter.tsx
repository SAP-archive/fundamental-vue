import { Component, Prop } from 'vue-property-decorator';
import { componentName } from '@/util';
import { Api } from '@/api';
import TsxComponent from '@/vue-tsx';

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

@Component({ name: componentName('Counter') })
@Api.Component('Counter')
@Api.defaultSlot('Text displayed inside the counter.')
export class Counter extends TsxComponent<Props> {

    @Api.Prop('built-in counter type', prop => prop.type(String).acceptValues(...counterTypeValues))
    @Prop({ type: String, required: false, default: 'info' })
    public type!: counterTypes;

    @Api.Prop('Aria Label', prop => prop.type(String))
    @Prop({ type: String, default: 'Counter Value', required: false })
    public ariaLabel!: string;

    @Api.Prop('Counter Value', prop => prop.type(Number))
    @Prop({ type: Number, default: 1, required: true })
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
