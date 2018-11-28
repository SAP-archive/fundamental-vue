import { Component, Prop } from 'vue-property-decorator';
import { componentName } from '@/util';
import { Api } from '@/api';
import TsxComponent from '@/vue-tsx';
import { Color, Colors, backgroundColorClassName } from '@/lib';

interface Props {
    media?: any | null;
    title?: string | null;
    description?: string | null;
    actions?: any | null;
    isButton?: boolean;
    rowSpan?: number | null;
    colSpan?: number | null;
    backgroundColor?: Color | null;
}

@Component({ name: componentName('Tile') })
@Api.Component('Tile')
@Api.slot('media', 'Tile Media')
@Api.slot('actions', 'Tile Actions')
export class Tile extends TsxComponent<Props> {
    @Api.Prop('title', prop => prop.type(String))
    @Prop({ type: String, default: null, required: false })
    public title!: string | null;

    @Api.Prop('description', prop => prop.type(String))
    @Prop({ type: String, default: null, required: false })
    public description!: string | null;

    @Api.Prop('row span', prop => prop.type(Number))
    @Prop({ type: Number, default: null, required: false })
    public rowSpan!: number | null;

    @Api.Prop('column span', prop => prop.type(Number))
    @Prop({ type: Number, default: null, required: false })
    public colSpan!: number | null;

    @Api.Prop('background color', prop => prop.type(String).acceptValues(...Colors))
    @Prop({ required: false, default: null, type: String })
    public backgroundColor!: Color | null;

    @Api.Prop('render tile as a button', prop => prop.type(Boolean))
    @Prop({ type: Boolean, default: false, required: false })
    public isButton!: boolean;

    @Api.Prop('disable tile', prop => prop.type(Boolean))
    @Prop({ type: Boolean, default: false, required: false })
    public disabled!: boolean;

    public render() {
        const media = this.$slots.media;
        const actions = this.$slots.actions;
        const title = this.title;
        const description = this.description;
        const isButton = this.isButton;
        const disabled = this.disabled;

        return (
            <div class={this.classObject} role={isButton ? 'button' : null} aria-disabled={disabled}>
                {media && <div class="fd-tile__media">{media}</div>}
                <div class="fd-tile__content">
                    {title && <h2 class="fd-tile__title">{title}</h2>}
                    {description && <p>{description}</p>}
                </div>
                {actions && <div class="fd-tile__actions">{actions}</div>}
            </div>
        );
    }

    get classObject() {
        const rowSpanObject = () => {
            const rowSpan = this.rowSpan;
            if (typeof rowSpan === 'number') {
                return { [`fd-has-grid-row-span-${rowSpan}`]: true };
            }
            return {};
        };

        const colSpanObject = () => {
            const colSpan = this.colSpan;
            if (typeof colSpan === 'number') {
                return { [`fd-has-grid-column-span-${colSpan}`]: true };
            }
            return {};
        };

        const backgroundColorClasses =
            this.backgroundColor == null ? {} : { [backgroundColorClassName(this.backgroundColor)]: true };

        return {
            ...rowSpanObject(),
            ...colSpanObject(),
            ...backgroundColorClasses,
            'fd-tile': true,
        };
    }
}
