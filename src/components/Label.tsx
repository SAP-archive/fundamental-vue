import { Component, DefaultSlot, Prop, Base } from '@/core';

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

@Component('Label')
@DefaultSlot('Text displayed inside the label.')
export class Label extends Base<Props> {
    @Prop('label type', { acceptableValues: LabelTypes, type: String, default: null })
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
