import { Component, Prop, Base } from '@/core';
import { shortUuid } from '@/lib';

export interface UidProps {
  uid?: string;
}

@Component('UidMixin')
export class UidMixin extends Base<UidProps> {
  @Prop({
    type: String,
    required: false,
    default: shortUuid,
  })
  uid!: string;
}
