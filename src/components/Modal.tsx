import {
  Component,
  Vue,
  Prop,
  Watch,
} from 'vue-property-decorator';
import { API } from '@/api';
import { componentName } from '@/util';
import { clickawayDirective } from '@/mixins';

const HANDLER = '_vue_vf-clickaway_handler';
@Component({
  name: componentName('modal'),
  directives: {
    onClickaway: clickawayDirective,
  },
})
@API.Component('Modal', comp => {
  comp
    .addEvent('close', 'Sent when modal was closed')
    .addEvent('update:active', 'Sent when active changes', event => event.boolean(name));
})
export class Modal extends Vue {
  @Prop({ type: Boolean, required: false, default: false })
  @API.Prop('whether modal is active', prop => prop.type(Boolean))
  public active!: boolean;

  @Prop({ type: String, required: false, default: null })
  @API.Prop('title', prop => prop.type(String))
  public title!: string | null;

  private isActive = this.active;
  private listening = false;

  @Watch('active', { immediate: true })
  public didChangeActive(value) {
    this.isActive = value;
  }

  @Watch('isActive')
  public didChangeIsActive(active) {
    const { documentElement } = document;
    if (documentElement == null) {
      return;
    }
    const el = this.$el;
    if (active) {
      if (this.listening === false) {
        el[HANDLER] = (ev: MouseEvent) => {
          const path = ev.composedPath();
          const { target } = ev;
          if (target != null && target instanceof Node) {
            const indexOfEl = path.indexOf(el);
            const containsTarget = el.contains(target);
            if ((indexOfEl === 0 && containsTarget)) {
              documentElement.removeEventListener('click', el[HANDLER]);
              this.listening = false;
              return this.clickOutside();
            }
          }
        };
        documentElement.addEventListener('click', el[HANDLER], false);
        this.listening = true;
      }
    } else {
      if (this.listening) {
        const handler = el[HANDLER];
        if (handler != null) {
          documentElement.removeEventListener('click', el[HANDLER]);
          this.listening = false;
        }
      }
    }
  }

  private close() {
    this.$emit('close');
    this.$emit('update:active', false);
  }

  public mounted() {
    document.body.appendChild(this.$el);
  }

  public destroyed() {
    const el = this.$el;
    if (el != null) {
      const parent = el.parentNode;
      if (parent != null) {
        const handler = el[HANDLER];
        if (handler != null) {
          const { documentElement } = document;
          if (documentElement != null) {
            documentElement.removeEventListener('click', el[HANDLER]);
            this.listening = false;
          }
        }
        parent.removeChild(el);
      }
    }
  }

  public render() {
    const renderHeader = () => {
      return (
        <div class='fd-modal__header'>
          <h1 class='fd-modal__title'>{this.title}</h1>
          <vf-button type='secondary' on-click={() => this.close()} class='fd-modal__close' aria-label='close' />
        </div>
      );
    };
    const renderBody = () => (<div class='fd-modal__body'>{this.$slots.default}</div>);
    const renderFooter = () => {
      const footer = this.$slots.footer;
      const actions = this.$slots.actions;
      if (footer != null || actions != null) {
        return (
          <footer class='fd-modal__footer'>
            {footer}
            {!!actions && <div class='fd-modal__actions'>{actions}</div>}
          </footer>
        );
      }
      return null;
    };
    return (
      <transition name='fade' >
        <div
          v-show={this.isActive}
          class='fd-ui__overlay fd-overlay fd-overlay--modal'
          aria-hidden={!this.isActive}
        >
          <div class='fd-modal'>
            <div class='fd-modal__content' role='document'>
              {renderHeader()}
              {renderBody()}
              {renderFooter()}
            </div>
          </div>
        </div>
      </transition>
    );
  }
  private clickOutside() {
    if (this.isActive) {
      this.close();
    }
  }
}
