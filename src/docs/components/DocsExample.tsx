import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';
import DynamicComponent from './DynamicComponent.vue';
import './Example.css';
import { ExpandTransition } from '@/components';
@Component({
  name: 'docs-example',
  components: {
    DynamicComponent,
    ExpandTransition,
  },
})
export class DocsExample extends Vue {
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
        <vf-expand-transition>
          <div v-show={this.codeShown} style={style}>
            {/* Needs to be wrapped again for the transition to look nice. */}
            <div><code-view key={this.title} backgroundColor={backgroundColor} sourcecode={this.currentCode} /></div>
          </div>
        </vf-expand-transition>
      );

    };
    const description = this.description;
    return (
      <vf-section title={this.title}>
        <vf-panel
          condensed={true}
          condensedFooter={true}
          style={'margin-bottom: 20px;'}
        >
          {!!description &&
            <div
              style='background-color: rgb(245,245,245); padding: 16px 24px;'
              domProps-innerHTML={description}
            />
          }
          {!!description && <div style='height: 1px; backgroundColor: #ebebeb;' />}
          <dynamic-component component={this.component} />
          <div slot='footer' style='width:100%; display:block;'>
            <div
              style='cursor: pointer; text-align: center;'
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
        </vf-panel>
      </vf-section>
    );
  }

  private toggleCode(event: Event | undefined) {
    if (event) { event.preventDefault(); }
    this.codeShown = !this.codeShown;
  }
}
