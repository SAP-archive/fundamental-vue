import { Component, Base } from '@/core';

@Component('PresentDateMixin')
export class PresentDateMixin extends Base<{}> {
  public presentYear = new Date(Date.now()).getFullYear();
  public presentMonth = new Date(Date.now()).getMonth();
  public presentDay = new Date(Date.now()).getDate();

  public isPresent(date: Date) {
    return (
      this.presentYear === date.getFullYear() &&
      this.presentMonth === date.getMonth() &&
      this.presentDay === date.getDate()
    );
  }
}
