import { Component, Prop, Base } from '@/core';

const makeId = () => {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 5; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

@Component('UidMixin')
export class UidMixin extends Base  {
  @Prop({
    type: String,
    required: false,
    default: () => makeId(),
  })
  public uid!: string;
}
