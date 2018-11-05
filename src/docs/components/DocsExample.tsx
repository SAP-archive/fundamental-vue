import {
  Component,
  Prop,
} from 'vue-property-decorator';
import './Example.css';
import DynamicComponent from './DynamicComponent.vue';
import { Panel, Section, ExpandTransition } from '@/components';
import { CodeView } from '@/docs/components';
import TsxComponent from '@/vue-tsx';

interface Props {
  description?: string | null;
  sourcecode?: string;
  title?: string;
  component?: object;
}

@Component({
  name: 'DocsExample',
  components: {
    DynamicComponent,
    ExpandTransition,
  },
})
export class DocsExample extends TsxComponent<Props> {
  @Prop({ type: String, required: false, default: null })
  public description!: string | null;

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
    const description = this.description;
    return (
      <Section title={this.title}>
        <Panel
          condensed={true}
          condensedFooter={true}
          style={'margin-bottom: 20px;'}
        >
          {!!description &&
            <div
              style='background-color: rgb(245,245,245); padding: 16px 24px;'
              domPropsInnerHTML={description}
            />
          }
          {!!description && <div style='height: 1px; backgroundColor: #ebebeb;' />}
          <dynamic-component component={this.component} />
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
      </Section>
    );
  }

  private toggleCode(event: Event | undefined) {
    if (event) { event.preventDefault(); }
    this.codeShown = !this.codeShown;
  }
}
