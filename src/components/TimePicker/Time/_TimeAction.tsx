// import { Component, Base, Prop } from '@/core';
// import { ButtonType, Button } from '@/components/Button';

// interface Props {
//   title?: string;
//   icon?: string;
//   type?: ButtonType;
//   disabled?: boolean;
//   ariaLabel?: string;
//   ariaControls?: string;
// }

// @Component('TimeAction')
// export class TimeAction extends Base<Props> {
//   @Prop(String) title!: string | null;
//   @Prop(String) icon!: string | null;
//   @Prop(String) type!: ButtonType | null;
//   @Prop({ type: Boolean, default: false }) disabled!: boolean;
//   @Prop(String) ariaLabel!: string | null;
//   @Prop(String) ariaControls!: string | null;

//   render() {
//     return (
//       <div class='fd-time__control'>
//         <Button state={this.disabled ? 'disabled' : 'normal'}
//           icon={this.icon}
//           compact={true}
//           styling='light'
//           type={this.type || undefined}
//           aria-label={this.ariaLabel}
//           aria-controls={this.ariaControls}
//           on-click={() => this.$emit('click')}
//         >{this.title}
//         </Button>
//       </div>
//     );
//   }
// }
