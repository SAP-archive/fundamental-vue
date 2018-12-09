import { Component, Prop } from 'vue-property-decorator';
import { componentName } from '@/util';
import { Api } from '@/api';
import TsxComponent from '@/vue-tsx';
import { Location } from 'vue-router';

interface Props {
  src: string;
  srcset?: string;
  to?: string | Location;
}

@Component({ name: componentName('ShellBarLogo') })
@Api.Component('Shell Bar Logo')
export class ShellBarLogo extends TsxComponent<Props> {
  @Api.Prop('image source', prop => prop.type(String))
  @Prop({type: String, required: true})
  public src!: string;

  @Api.Prop('image source set', prop => prop.type(String))
  @Prop({type: String, default: null})
  public srcset!: string | null;

  @Api.Prop('link destination', prop => prop.type(String, Object))
  @Prop({type: [String, Object], default: '/'})
  public to!: string | Location;

  public render() {
    return (
      <router-link tag='a' to={this.to} class='fd-shellbar__logo'>
        <img src={this.src} srcset={this.srcset}/>
      </router-link>
    );
  }
}
