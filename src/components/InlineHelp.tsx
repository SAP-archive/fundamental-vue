import {
    componentName,
} from '@/util';

import { API } from '@/api';

import {
    Component,
    Prop,
    Vue,
} from 'vue-property-decorator';

const positionMapping = {
    left: 'Left of icon',
    right: 'Right of icon (default)',
  };

type Position = keyof (typeof positionMapping);
const Positions = Object.keys(positionMapping) as Position[];

@Component({ name: componentName('inline-help') })
@API.Component('Inline Help')
export class InlineHelp extends Vue {
    @Prop({ type: String, required: false, default: 'right' })
    @API.Prop('location of inline help relative to icon', prop => prop.type(String).acceptValues(...Positions))
    public position!: Position;

    @Prop({ type: Boolean, required: false, default: false })
    @API.Prop('whether the inline help is displayed adjacent to the icon', prop => prop.type(Boolean))
    public inline!: boolean;

    public render() {
      return (
      <span class='fd-inline-help'>
        <span class={this.classes}>
            {this.$slots.default}
        </span>
      </span>
      );
    }

    private get classes() {
        return {
          'fd-inline-help__content': true,
          'fd-inline-help__content--bottom-left': this.position === 'left' && this.inline === false,
          'fd-inline-help__content--bottom-right': this.position === 'right' && this.inline === false,
          'fd-inline-help__content--left': this.position === 'left' && this.inline === true,
          'fd-inline-help__content--right': this.position === 'right' && this.inline === true,

        };
      }
}
