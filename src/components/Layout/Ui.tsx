import { Slot, Component, DefaultSlot, Prop, Base } from '@/core';

interface Props {
  headerClass?: string;
}

@Component('Ui')
@DefaultSlot('Main Content')
@Slot('sidebar', 'Sidebar Content')
@Slot('header', 'Header Content')
@Slot('footer', 'Footer Content')
export class Ui extends Base<Props> {
  @Prop('header class', {type: String, default: null })
  public headerClass!: string | null;

  public render() {
    const sidebar = this.$slots.sidebar;
    const header = this.$slots.header;
    const footer = this.$slots.footer;
    const main = this.$slots.default;
    const headerClasses = ['fd-ui__header'];
    const headerClass = this.headerClass;
    if(headerClass != null) { headerClasses.push(headerClass); }
    return (
      <div class='fd-ui fd-ui--fundamental'>
        {!!header && <div class={headerClasses}>{header}</div>}
        <div class='fd-ui__app'>
          <div class='fd-app'>
          {!!sidebar && <div class='fd-app__sidebar'>{sidebar}</div>}
            <main class='fd-app__main' style='padding-top: 20px; background-color: white;'>{main}</main>
          </div>
        </div>
        {!!footer && <div class='fd-ui__footer'>{footer}</div>}
      </div>
    );
  }
}
