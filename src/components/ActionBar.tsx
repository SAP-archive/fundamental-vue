import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';
import { componentName } from '@/util';
import { API } from '@/api';

@Component({ name: componentName('action-bar') })
@API.Component('Action Bar')
export class ActionBar extends Vue {
  @Prop({ required: true, type: String })
  @API.Prop('title', prop => prop.type(String))
  public title!: string;

  @Prop({ required: false, default: null, type: String })
  @API.Prop('description', prop => prop.type(String))
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
