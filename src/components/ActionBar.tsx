import { Slot, Component, DefaultSlot, Prop, Base } from '@/core';

interface Props {
  title: string;
  description?: string | null;
}

@Component('ActionBar')
@DefaultSlot('custom action buttons')
@Slot('back', 'custom back button')
export class ActionBar extends Base<Props> {
  @Prop('page title', { required: true, type: String })
  public title!: string;

  @Prop('action bar description', { default: null, type: String })
  public description!: string | null;

  public render() {
    const actions = this.$slots.default;
    const hasActions = !!actions;
    const back = this.$slots.back;
    const hasBack = !!back;
    const title = this.title;
    const description = this.description;

    return (
      <div class='fd-action-bar'>
        {hasBack &&
          <div class='fd-action-bar__back'>
            {back}
          </div>
        }
        <div class='fd-action-bar__header'>
          <h1 class='fd-action-bar__title'>{title}</h1>
          {!!description &&
            <p class='fdfd-action-bar__description'>{description}</p>
          }
        </div>
        {hasActions &&
          <div class='fd-action-bar__actions'>
            {actions}
          </div>
        }
      </div>
    );
  }
}
