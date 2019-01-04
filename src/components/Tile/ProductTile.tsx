import { Slot, Component, Prop, Base } from '@/core';

interface Props {
    url?: string | null;
    title?: string | null;
    isButton?: boolean;
}

@Component('ProductTile')
@Slot('content', 'Product Content')
export class ProductTile extends Base<Props> {
    @Prop('image url', { type: String, default: null, required: true })
    public url!: string | null;

    @Prop({ type: String, default: null })
    public title!: string | null;

    @Prop('render product tile as a button', { type: Boolean, default: false })
    public isButton!: boolean;

    @Prop('disable product tile', { type: Boolean, default: false })
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
