import { Component, Prop } from 'vue-property-decorator';
import { componentName } from '@/util';
import { Api } from '@/api';
import TsxComponent from '@/vue-tsx';

interface Props {
    url?: string | null;
    title?: string | null;
    isButton?: boolean;
}

@Component({ name: componentName('ProductTile') })
@Api.Component('Product Tile')
@Api.slot('content', 'Product Content')
export class ProductTile extends TsxComponent<Props> {
    @Api.Prop('image url', prop => prop.type(String))
    @Prop({ type: String, default: null, required: true })
    public url!: string | null;

    @Api.Prop('title', prop => prop.type(String))
    @Prop({ type: String, default: null, required: false })
    public title!: string | null;

    @Api.Prop('render product tile as a button', prop => prop.type(Boolean))
    @Prop({ type: Boolean, default: false, required: false })
    public isButton!: boolean;

    @Api.Prop('disable product tile', prop => prop.type(Boolean))
    @Prop({ type: Boolean, default: false, required: false })
    public disabled!: boolean;

    private get style() {
        const url = this.url;
        if (url == null) {
            return {};
        }
        return {
            'background-image': `url(${this.url})`,
        };
    }

    public render() {
        const content = this.$slots.content;
        const title = this.title;
        const isButton = this.isButton;
        const disabled = this.disabled;

        return (
            <div class='fd-product-tile' role={isButton ? 'button' : null} aria-disabled={disabled}>
                <div class='fd-product-tile__media' style={this.style} />
                <div class='fd-product-tile__content'>
                    {title && <h2 class='fd-product-tile__title'>{title}</h2>}
                    {content}
                </div>
            </div>
        );
    }
}
