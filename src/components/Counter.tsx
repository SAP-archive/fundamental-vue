import { Base, Prop, DefaultSlot, Component } from '@/core';

const typeMapping = {
  info: 'info',
  notification: 'notification',
};

type counterTypes = keyof (typeof typeMapping);
const counterTypeValues = Object.keys(typeMapping) as counterTypes[];

export interface Props {
  type?: counterTypes;
  ariaLabel?: string;
  value?: number;
}

@Component('Counter')
@DefaultSlot('Text displayed inside the counter.')
export class Counter extends Base<Props> {
  @Prop('built-in counter type', {
    type: String,
    default: 'info',
    acceptableValues: counterTypeValues,
    validator: counterTypeValues.includes,
  })
  public type!: counterTypes;

  @Prop('Aria Label', { type: String })
  public ariaLabel!: string;

  @Prop('Counter Value', { type: Number, default: 'Counter Value' })
  public value!: number;

  private get classes() {
    return {
      'fd-counter--notification': this.type === 'notification',
    };
  }

  public render() {
    const counterValue = !isNaN(Number(this.value)) ? Number(this.value) <= 999 ? this.value : '999+' : 1;
    return (
      <span staticClass='fd-counter' class={this.classes} aria-label={this.ariaLabel}>{counterValue}</span>
    );
  }
}
