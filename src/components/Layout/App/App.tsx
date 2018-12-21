import { Slot, Component, DefaultSlot, Prop, Base } from '@/core';

interface Props {
  headerClass?: string;
}

@Component('App')
@DefaultSlot('Main Content')
@Slot('header', 'Header Content')
@Slot('footer', 'Footer Content')
export class App extends Base<Props> {
  @Prop('header CSS class', { type: String, default: null })
  public headerClass!: string | null;

  public render() {
    const header = this.$slots.header;
    const footer = this.$slots.footer;
    const main = this.$slots.default;
    return (
      <div class='fd-shell__app'>
        {header}
          <div class='fd-app'>{main}</div>
        {footer}
      </div>
    );
  }
}
