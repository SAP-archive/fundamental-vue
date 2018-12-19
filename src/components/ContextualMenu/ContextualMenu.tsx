import {
    Component,
    Watch,
    Prop,
} from 'vue-property-decorator';
import { Api } from '@/api';
import { componentName } from '@/util';
import { Button } from '@/components/Button';
import { Menu, MenuList, MenuItem } from '@/components/Menu';
import { Popover } from '@/components/Popover';
import TsxComponent from '@/vue-tsx';

interface Props {
  popoverVisible?: boolean;
  icon?: string | null;
  text?: string | null;
  styling?: ButtonStyling;
  ariaLabel?: string | null;
}

// Styles
const stylingMapping = {
  emphasized: 'Emphasized',
  light: 'Light',
  regular: 'Regular (default)',
};
type ButtonStyling = keyof (typeof stylingMapping);
const ButtonStylings = Object.keys(stylingMapping) as ButtonStyling[];

@Component({
  name: componentName('ContextualMenu'),
    provide() {
      return {
        contextualMenu: this,
      };
    },
    components: {
      Button,
      Menu,
      MenuList,
      MenuItem,
      Popover,
    },
})
@Api.Component('ContextualMenu')
export class ContextualMenu extends TsxComponent<Props> {
  @Api.Prop('icon displayed in the button', prop => prop.type(String))
  @Prop({ default: null, required: false, type: String })
  public icon!: string | null;

  @Api.Prop('text displayed in the button', prop => prop.type(String))
  @Prop({ type: String, default: '', required: false })
  public text!: string;

  @Api.Prop('button styling', prop => prop.type(String).acceptValues(...ButtonStylings))
  @Prop({ type: String, default: 'regular', required: false })
  public styling!: ButtonStyling;

  @Api.Prop('whether popover is visible', prop => prop.type(Boolean))
  @Prop({ type: Boolean, default: false, required: false })
  public popoverVisible!: boolean;

  @Api.Prop('Aria label', prop => prop.type(String))
  @Prop({ type: String, default: '', required: false })
  public ariaLabel!: string;

  private currentPopoverVisible: boolean = this.popoverVisible;

  @Watch('currentPopoverVisible', { immediate: true})
  public didChangeVisible( currentPopoverVisible: boolean) {
    this.currentPopoverVisible = false;
    this.$emit('update:currentPopoverVisible', this.currentPopoverVisible);
  }
  public togglePopoverVisible() {
    this.currentPopoverVisible = !this.currentPopoverVisible;
    this.$emit('update:currentPopoverVisible', this.currentPopoverVisible);
  }
  public render() {
    const dropdown = this.$slots.default;
    return (
      <div class='fd-popover'>
        <Popover noArrow={false} popoverVisible={this.currentPopoverVisible}>
          <div class='fd-popover__control' slot='control'>
            <Button
                aria-label={this.ariaLabel}
                slot='after'
                on-click={this.togglePopoverVisible}
                icon={this.icon}
                styling={this.styling}
            >
                {this.text}
            </Button>
          </div>
          {dropdown}
        </Popover>
      </div>
    );
  }
}
