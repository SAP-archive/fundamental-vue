import { Component, Prop } from 'vue-property-decorator';
import { Api } from '@/api';
import { componentName } from '@/util';
import { Color, Colors, backgroundColorClassName } from '@/lib';
import TsxComponent from '@/vue-tsx';

const sizeMapping = {
    xxs: 'Extra Extra Small',
    xs: 'Extra Small',
    s: 'Small',
    m: 'Medium (default)',
    l: 'Large',
    xl: 'Extra Large',
    xxl: 'Extra Extra Large',
};
type IdentifierSize = keyof (typeof sizeMapping);
const IdentifierSizes = Object.keys(sizeMapping) as IdentifierSize[];

interface Props {
    icon?: string | null;
    url?: string | null;
    size?: IdentifierSize;
    circle?: boolean;
    transparent?: boolean;
    thumbnail?: boolean;
    backgroundColor?: Color | null;
}

@Component({ name: componentName('Identifier') })
@Api.Component('Identifier')
@Api.defaultSlot('Text displayed by the Identifier.')
export class Identifier extends TsxComponent<Props> {
    @Api.Prop('icon name', prop => prop.type(String))
    @Prop({ type: String, default: null, required: false })
    public icon!: string | null;

    @Api.Prop('image url', prop => prop.type(String))
    @Prop({ type: String, default: null, required: false })
    public url!: string | null;

    @Api.Prop('size', prop => prop.type(String).acceptValues(...IdentifierSizes))
    @Prop({ type: String, default: 'm', required: false })
    public size!: IdentifierSize;

    @Api.Prop('is displayed as circle', prop => prop.type(Boolean))
    @Prop({ required: false, default: false, type: Boolean })
    public circle!: boolean;

    @Api.Prop('is displayed without background', prop => prop.type(Boolean))
    @Prop({ required: false, default: false, type: Boolean })
    public transparent!: boolean;

    @Api.Prop('is displayed with background image', prop => prop.type(Boolean))
    @Prop({ required: false, default: false, type: Boolean })
    public thumbnail!: boolean;

    @Api.Prop('background color', prop => prop.type(String).acceptValues(...Colors))
    @Prop({ required: false, default: null, type: String })
    public backgroundColor!: Color | null;

    public render() {
        return (
            <span class={this.classes} role='presentation' style={this.style}>
                {this.$slots.default}
            </span>
        );
    }

    private get style() {
        const url = this.url;
        if (url == null || !this.thumbnail) {
            return {};
        }
        return {
            'background-image': `url(${this.url})`,
        };
    }

    private get classes() {
        const backgroundColorClasses =
            this.backgroundColor == null ? {} : { [backgroundColorClassName(this.backgroundColor)]: true };
        const iconClass = this.icon == null ? {} : { [`sap-icon--${this.icon}`]: true };
        return {
            ...iconClass,
            ...backgroundColorClasses,
            'fd-identifier--xxs': this.size === 'xxs',
            'fd-identifier--xs': this.size === 'xs',
            'fd-identifier--s': this.size === 's',
            'fd-identifier--m': this.size === 'm',
            'fd-identifier--l': this.size === 'l',
            'fd-identifier--xl': this.size === 'xl',
            'fd-identifier--xxl': this.size === 'xxl',
            'fd-identifier--transparent': this.transparent,
            'fd-identifier--circle': this.circle,
            'fd-identifier--thumbnail': this.thumbnail,
        };
    }
}
