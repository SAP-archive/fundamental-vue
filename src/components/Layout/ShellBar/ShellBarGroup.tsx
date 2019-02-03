import { Component, Prop, Base } from '@/core';

const positionMapping = {
  start: 'start',
  middle: 'middle',
  end: 'end',
};
type Position = keyof typeof positionMapping;
const Positions = Object.keys(positionMapping) as Position[];

interface Props {
  position?: Position;
}

@Component('ShellBarGroup')

export class ShellBarGroup extends Base<Props> {
  @Prop('position in the shell bar', { acceptableValues: Positions, type: String, validator: value => Positions.includes(value) })
  position!: Position;

  render() {
    const classes = `fd-shellbar__group fd-shellbar__group--${this.position}`;
    return <div class={classes}>{this.$slots.default}</div>;
  }
}
