import { Component, Prop, Base } from '@/core';
import { shortUuid } from '@/lib';

interface Props {
  itemId?: string;
}

@Component('ItemId')
export class ItemId extends Base<Props> implements Required<Props> {
  @Prop(String, { default: shortUuid })
  public itemId!: string;
}
