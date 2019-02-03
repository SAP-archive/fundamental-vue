// import { Component, Base, Prop } from '@/core';
// import { Input } from '@/components/Form';

// interface Props {
//   id?: string;
//   placeholder?: string;
//   value?: string | number | null;
//   ariaLabel?: string;
// }

// @Component('TimeInput')
// export class TimeInput extends Base<Props> {
//   @Prop(String) id!: string;
//   @Prop(String) placeholder!: string;
//   @Prop('Value in the Time input field', {
//     type: [String, Number],
//     default: '',
//   })
//   value!: string | number | null;
//   @Prop(String) ariaLabel!: string | null;

//   render() {
//     return (
//       <div class='fd-time__input'>
//         <Input id={this.id}  maxlength='2' type='text' aria-label={this.ariaLabel} value={this.value} placeholder={this.placeholder} on-input={(newValue: string) => this.$emit('input', newValue)} />
//       </div>
//     );
//   }
// }
