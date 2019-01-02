import { Color, Colors, backgroundColorClassName } from '@/lib';
import { Component, DefaultSlot, Prop, Base } from '@/core';

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

@Component('Identifier')
@DefaultSlot('Text displayed by the Identifier.')
export class Identifier extends Base<Props> {
    @Prop('icon name', { type: String, default: null })
    public icon!: string | null;

    @Prop('image url', { type: String, default: null })
    public url!: string | null;

    @Prop({ acceptableValues: IdentifierSizes, type: String, default: 'm' })
    public size!: IdentifierSize;

    @Prop('is displayed as circle', { default: false, type: Boolean })
    public circle!: boolean;

    @Prop('is displayed without background', { default: false, type: Boolean })
    public transparent!: boolean;

    @Prop('is displayed with background image', { default: false, type: Boolean })
    public thumbnail!: boolean;

    @Prop('background color', { acceptableValues: Colors, default: null, type: String })
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
