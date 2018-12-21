import { Component } from 'vue-property-decorator';
import TsxComponent from '@/vue-tsx';
import { componentName } from '@/util';

@Component({ name: componentName('PresentDate') })
export class PresentDate extends TsxComponent<{}> {
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
