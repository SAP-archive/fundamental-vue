import { Component, Base } from '@/core';

@Component('TableBody')
export class TableBody extends Base {
  public render() { return <tbody>{this.$slots.default}</tbody>; }
}
