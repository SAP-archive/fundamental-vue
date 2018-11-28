import { Component, Prop } from 'vue-property-decorator';
import { Api } from '@/api';
import { componentName } from '@/util';
import TsxComponent from '@/vue-tsx';

const colMapping = {
    2: '2-Column Grid',
    3: '3-Column Grid',
    4: '4-Column Grid',
    5: '5-Column Grid',
    6: '6-Column Grid',
};
type Col = keyof typeof colMapping;
const Cols = Object.keys(colMapping).map(value => Number(value)) as Col[];

interface Props {
    col?: number | null;
}

@Component({ name: componentName('TileGrid') })
@Api.Component('Tile Grid')
@Api.defaultSlot('Tiles displayed by the grid.')
export class TileGrid extends TsxComponent<Props> {
    @Api.Prop('number of columns', prop => prop.type(Number).acceptValues(...Cols))
    @Prop({ type: Number, default: null, required: false })
    public col!: Col | null;

    public render() {
        return <div class={this.classes}>{this.$slots.default}</div>;
    }

    private get classes() {
        const col = this.col;
        const colClass = col == null ? {} : { [`fd-tile-grid--${col}col`]: true };
        return {
            'fd-tile-grid': true,
            ...colClass,
        };
    }
}
