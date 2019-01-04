import { Component, DefaultSlot, Prop, Base } from '@/core';

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

@Component('TileGrid')
@DefaultSlot('Tiles displayed by the grid.')
export class TileGrid extends Base<Props> {
    @Prop('number of columns', { acceptableValues: Cols, type: Number, default: null })
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
