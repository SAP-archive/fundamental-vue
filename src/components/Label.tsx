import { Component, Prop } from 'vue-property-decorator';
import { componentName } from '@/util';
import { Api } from '@/api';
import TsxComponent from '@/vue-tsx';

const typeMapping = {
    warning: 'Warning',
    error: 'Error',
    success: 'Success',
};
type LabelType = keyof (typeof typeMapping);
const LabelTypes = Object.keys(typeMapping) as LabelType[];

interface Props {
    type?: LabelType | null;
}

@Component({ name: componentName('Label') })
@Api.Component('Label')
@Api.defaultSlot('Text displayed inside the label.')
export class Label extends TsxComponent<Props> {
    @Api.Prop('label type', prop => prop.type(String).acceptValues(...LabelTypes))
    @Prop({ type: String, required: false, default: null })
    public type!: LabelType | null;

    public render() {
        return <span class={this.classes}>{this.$slots.default}</span>;
    }

    private get classes() {
        return {
            'fd-label': true,
            'fd-label--success': this.type === 'success',
            'fd-label--warning': this.type === 'warning',
            'fd-label--error': this.type === 'error',
        };
    }
}
