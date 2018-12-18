import {
    Component,
    Prop,
} from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import { Uid } from '@/mixins';
import { Api } from '@/api';
import { componentName } from '@/util';
import { Button } from '@/components/Button';
import { ClickAwayContainer } from '@/components/ClickAwayContainer';
import { Menu, MenuList, MenuItem } from '@/components/Menu';
import { Popover } from '@/components/Popover';
interface Props {
    uid?: string; // Uid mixin
    popoverVisible?: boolean;
    icon?: string | null;
    text?: string | null;
    styling?: ButtonStyling;
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
      ClickAwayContainer,
      Menu,
      MenuList,
      MenuItem,
      Popover,
    },
})
@Api.Component('Contextual Menu')
@Api.Event('input', 'Sent when the selected item changes')
export class ContextualMenu extends mixins(Uid) {
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

  public $tsxProps!: Readonly<{}> & Readonly<Props>;

  private currentPopoverVisible: boolean = this.popoverVisible;
//  private currentValue: string | null = this.value;

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
