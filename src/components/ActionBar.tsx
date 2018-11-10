import {
  Component,
  Prop,
} from 'vue-property-decorator';
import { componentName } from '@/util';
import { Api } from '@/api';
import TsxComponent from '@/vue-tsx';

interface Props {
  title: string;
  description?: string | null;
}

@Component({ name: componentName('ActionBar') })
@Api.Component('Action Bar')
@Api.slot('back', 'custom back button')
@Api.defaultSlot('custom action buttons')
export class ActionBar extends TsxComponent<Props> {
  @Api.Prop('title', prop => prop.type(String))
  @Prop({ required: true, type: String })
  public title!: string;

  @Api.Prop('description', prop => prop.type(String))
  @Prop({ required: false, default: null, type: String })
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
