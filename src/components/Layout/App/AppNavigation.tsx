import { Component, Prop, Base } from '@/core';

const orientationMapping = {
  horizontal: 'horizontal', // default
  vertical: 'vertical',
};
type Orientation = keyof typeof orientationMapping;
const Orientations = Object.keys(orientationMapping) as Orientation[];
const isOrientation = (value: any) => Orientations.indexOf(value) >= 0;

interface Props {
  orientation?: Orientation;
}

@Component('AppNavigation')

export class AppNavigation extends Base<Props> {
  @Prop({ type: String, default: 'horizontal', validator: isOrientation })
  orientation!: Orientation;

  private get classes() {
    return ['fd-app__navigation', `fd-app__navigation--${this.orientation}`];
  }

  render() {
    return <div class={this.classes}>{this.$slots.default}</div>;
  }
}
