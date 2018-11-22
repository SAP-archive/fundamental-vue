import {
  Component,
  Prop,
} from 'vue-property-decorator';
import './ComponentExample.css';
import DynamicComponent from '@/docs/components/DynamicComponent.vue';
import { Panel, ExpandTransition } from '@/components';
import { CodeView } from '@/docs/components';
import TsxComponent from '@/vue-tsx';

interface Props {
  tip?: string | null;
  docs?: string | null;
  sourcecode?: string;
  title?: string;
  component?: object;
}

@Component({
  name: 'ComponentExample',
  components: {
    DynamicComponent,
    ExpandTransition,
  },
})
export class ComponentExample extends TsxComponent<Props> {
  @Prop({ type: String, required: false, default: null })
  public tip!: string | null;

  @Prop({ type: String, default: null })
  public docs!: string | null;

  @Prop({ type: String, default: '', required: false })
  public sourcecode!: string;

  @Prop({ type: String, default: '', required: false })
  public title!: string;

  @Prop({ type: Object, validator: val => true })
  public component!: object;

  get currentCode(): string { return this.sourcecode; }
  private codeShown = false;
  public render() {
    const buttonTitle = this.codeShown ? 'Hide Code' : 'Show Code';
    const iconClass = this.codeShown ? 'fas fa-caret-up' : 'fas fa-caret-down';
    const renderCodeIfNeeded = () => {
      const backgroundColor = 'rgb(250, 250, 250) !important';
      const style = {
        'background-color': backgroundColor,
        'border-top': '1px solid #eeeeef',
        'padding': '10px',
      };
      return (
        <ExpandTransition>
          <div v-show={this.codeShown} style={style}>
            {/* Needs to be wrapped again for the transition to look nice. */}
            <div><CodeView key={this.title} backgroundColor={backgroundColor} sourcecode={this.currentCode} /></div>
          </div>
        </ExpandTransition>
      );

    };
    const tip = this.tip;
    return (
      <div style='padding: 30px 30px 30px 30px;'>
        <h1 style='font-size: 21px; color: #555555;'>{this.title}</h1>
        {this.docs && <div style='font-size: 1.2em; margin-bottom: 12px;' domPropsInnerHTML={this.docs} />}
        <Panel
          condensed={true}
          condensedFooter={true}
          style={'margin-bottom: 20px;'}
        >
          {!!tip &&
            <div
              style='border-left: 0.5rem solid #42b983; background-color: #f3f5f7; padding: 1.5rem; margin-top: 1em; border-bottom: 1px solid #ebebeb;'
            >
              <div style='font-weight: 600; font-size: 16px; line-height: 1.7;'>TIP</div>
              <div style='margin-top: 1em; margin-bottom: 1em; font-size: 16px;' domPropsInnerHTML={tip} />
            </div>
          }
          {!!tip && <div style='height: 1px; backgroundColor: #ebebeb;' />}
          <dynamic-component component={this.component} />
          {/* <h1>{this.component.__title}</h1> */}
          <div slot='footer' style='width:100%; display:block;'>
            <div
              style='cursor: pointer; text-align: center; background-color: rgb(250, 250, 250);'
              class='example__show_code'
              role='button'
              on-click={event => this.toggleCode(event)}
            >
              <a href='#'>
                <i class={iconClass} />
                <span style='margin-left: 4px; line-height: 44px; font-size: 13px;'>{buttonTitle}</span>
              </a>
            </div>
            {renderCodeIfNeeded()}
          </div>
        </Panel>
      </div>
    );
  }

  private toggleCode(event: Event | undefined) {
    if (event) { event.preventDefault(); }
    this.codeShown = !this.codeShown;
  }
}
