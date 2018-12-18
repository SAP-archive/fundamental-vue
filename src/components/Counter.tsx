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

interface Props {
    type?: counterTypes;
}

@Component({ name: componentName('Counter') })
@Api.Component('Counter')
@Api.defaultSlot('Text displayed inside the counter.')
export class Counter extends TsxComponent<Props> {

    @Api.Prop('built-in counter type', prop => prop.type(String).acceptValues(...counterTypeValues))
    @Prop({ type: String, required: false, default: 'info' })
    public type!: counterTypes;

    public render() {
        return (
            this.type === 'info' ? <span class='fd-counter'>{this.$slots.default}</span> :
                (
                    <button class='fd-button--light sap-icon--bell'>
                        <span class='fd-counter fd-counter--notification'>{this.$slots.default}</span>
                    </button>
                )
        );
    }
}
