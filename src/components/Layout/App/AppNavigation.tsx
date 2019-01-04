import { Component, DefaultSlot, Prop, Base } from '@/core';

const orientationMapping = {
  horizontal: 'Horizontal Navigation (default)',
  vertical: 'Vertical Navigation',
};
type Orientation = keyof typeof orientationMapping;
const Orientations = Object.keys(orientationMapping) as Orientation[];

interface Props {
  orientation?: Orientation;
}

@Component('AppNavigation')
@DefaultSlot('Navigation Content')
export class AppNavigation extends Base<Props> {
  @Prop({ type: String, default: 'horizontal', validator: value => Orientations.includes(value) })
  public orientation!: Orientation;

  private get classes() {
    return ['fd-app__navigation', `fd-app__navigation--${this.orientation}`];
  }

  public render() {
    return <div class={this.classes}>{this.$slots.default}</div>;
  }
}
