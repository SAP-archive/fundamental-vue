import { Component, Prop } from 'vue-property-decorator';
import { componentName } from '@/util';
import { Api } from '@/api';
import TsxComponent from '@/vue-tsx';
import { ShellBarGroup } from './ShellBarGroup';

@Component({ name: componentName('Shell') })
@Api.defaultSlot('Main Content')
export class ShellBar extends TsxComponent<{}> {
  @Api.Prop('title', prop => prop.type(String))
  @Prop({ required: true, type: String })
  public title!: string;

  public render() {
    const logo = this.$slots.logo;
    return (
      <div class='fd-shell fd-shell--fixed fd-shell--fundamentals'>
        <ShellBarGroup position='start'>
          {logo}
          <div class='fd-shellbar__product'>
            <span class='fd-shellbar__title'>{this.title}</span>
          </div>
        </ShellBarGroup>

        <ShellBarGroup position='end'>
          <div class='fd-shellbar__actions'>
            <div class='fd-shellbar__action fd-shellbar__action--show-always'>
              <div class='fd-user-menu' />
            </div>
          </div>
        </ShellBarGroup>
      </div>
    );
  }
}
