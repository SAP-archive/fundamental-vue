import { componentName } from '@/util';
import { Api } from '@/api';
import TsxComponent from '@/vue-tsx';
import {
  Component,
  Prop,
} from 'vue-property-decorator';

const positionMapping = {
  left: 'Left of icon',
  right: 'Right of icon (default)',
  center: 'Center of icon',
};

type Position = keyof (typeof positionMapping);
const Positions = Object.keys(positionMapping) as Position[];

interface Props {
  inline?: boolean;
  position?: Position;
}

@Component({ name: componentName('InlineHelp') })
@Api.Component('Inline Help')
@Api.defaultSlot('Helpful Text')
export class InlineHelp extends TsxComponent<Props> {
  @Prop({ type: String, required: false, default: 'right' })
  @Api.Prop('location of inline help relative to icon', prop => prop.type(String).acceptValues(...Positions))
  public position!: Position;

  @Prop({ type: Boolean, required: false, default: false })
  @Api.Prop('whether the inline help is displayed adjacent to the icon', prop => prop.type(Boolean))
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
      'fd-inline-help__content--bottom-center': this.position === 'center' && this.inline === false,
      'fd-inline-help__content--left': this.position === 'left' && this.inline === true,
      'fd-inline-help__content--right': this.position === 'right' && this.inline === true,
    };
  }
}
