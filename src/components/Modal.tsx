import { Watch } from 'vue-property-decorator';
import { ClickAwayContainer } from '@/components/ClickAwayContainer';
import { Button } from './Button';
import { Slot, Component, Event, DefaultSlot, Prop, Base } from '@/core';

interface Props {
  active: boolean;
  title: string | null;
}

@Component('Modal')
@Event('close', 'Sent when modal was closed')
@Event('update:active', 'Sent when active changes', ['active', Boolean])
@DefaultSlot('Modal Body')
@Slot('footer', 'Custom Modal Footer')
@Slot('actions', 'Custom Modal Actions')
export class Modal extends Base<Props> {
  @Prop('whether modal is active', { type: Boolean, default: false })
  public active!: boolean;

  @Prop({ type: String, default: null })
  public title!: string | null;

  private isActive = this.active;

  @Watch('active', { immediate: true })
  public didChangeActive(value: boolean) {
    this.isActive = value;
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
        parent.removeChild(el);
      }
    }
  }

  public render() {
    const renderHeader = () => {
      // We have to do two things here:
      // 1. Disable object-literal-key-quotes: The key 'class' will cause a warning. If we remove the quotes
      //    then tsc complains and does not compile at all.
      // 2. Extract the button render logic in a function because otherwise we cannot disable the rule.
      //    It is not possible asaik. to disable rules within a tsx scope.
      // tslint:disable-next-line:object-literal-key-quotes
      const renderButton = () => <Button {...{ 'class': 'fd-modal__close' }} styling='light' on-click={() => this.close()} aria-label='close' />;
      return (
        <div class='fd-modal__header'>
          <h1 class='fd-modal__title'>{this.title}</h1>
          {renderButton()}
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
          <ClickAwayContainer on-clickOutside={this.clickOutside} class='fd-modal' active={this.isActive}>
            <div class='fd-modal__content' role='document'>
              {renderHeader()}
              {renderBody()}
              {renderFooter()}
            </div>
          </ClickAwayContainer>
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
