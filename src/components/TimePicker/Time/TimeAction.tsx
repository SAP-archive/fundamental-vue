import { Component, Base, Prop } from '@/core';
import { ButtonType, Button } from '@/components/Button';

interface Props {
  title?: string;
  icon?: string;
  type?: ButtonType;
  disabled?: boolean;
  ariaLabel?: string;
  ariaControls?: string;
}

@Component('TimeAction')
export class TimeAction extends Base<Props> {
  @Prop(String) public title!: string | null;
  @Prop(String) public icon!: string | null;
  @Prop(String) public type!: ButtonType | null;
  @Prop({ type: Boolean, default: false }) public disabled!: boolean;
  @Prop(String) public ariaLabel!: string | null;
  @Prop(String) public ariaControls!: string | null;

  public render() {
    return (
      <div class='fd-time__control'>
        <Button state={this.disabled ? 'disabled' : 'normal'}
          icon={this.icon}
          compact={true}
          styling='light'
          type={this.type || undefined}
          aria-label={this.ariaLabel}
          aria-controls={this.ariaControls}
          on-click={() => this.$emit('click')}
        >{this.title}
        </Button>
      </div>
    );
  }
}
