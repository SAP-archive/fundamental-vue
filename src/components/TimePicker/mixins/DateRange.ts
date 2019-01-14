import { Component, Base } from '@/core';

@Component('DateRangeMixin')
export class DateRangeMixin extends Base<{}> {
  public getRange() {
    return ({
      hour24: {
        min: '00',
        max: '23',
      },
      hour12: {
        min: '00',
        max: '12',
      },
      minute: {
        min: '00',
        max: '59',
      },
      second: {
        min: '00',
        max: '59',
      },
      meridian: {
        min: 'am',
        max: 'pm',
      },
    });
  }
}
