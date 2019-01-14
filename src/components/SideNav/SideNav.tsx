import { Event, Prop, Base, Component } from '@/core';
import { Watch, Provide } from 'vue-property-decorator';
import { Item, Config, Store, Modes, Mode, ModeType } from './Model';

interface Props {
  selectedId?: string | null;
  mode?: ModeType;
  items?: Item[];
}

@Component('SideNav')
@Event('update:selectedId', 'Emitted when selectedId changes.')
export class SideNav extends Base<Props> {
  @Prop('id of the selected item. Supports the sync-modifier.', { type: String, default: null })
  public selectedId!: string | null;

  @Prop(String, {
    default: Mode.manual,
    validator: Modes.includes,
    acceptableValues: Modes,
  })
  public mode!: ModeType;

  @Provide(Store.KEY)
  public store = new Store({
    selectedId: this.selectedId,
    expandedIds: [],
    items: {},
  });

  @Provide(Config.KEY)
  public config = new Config(this.mode);

  public render() {
    return <nav class='fd-side-nav'>{this.$slots.default}</nav>;
  }

  @Watch('localSelectedId', { immediate: true })
  public localSelectedIdChanged(newId: string | null) {
    this.store.selectedId = newId;
    this.$emit('update:selectedId', this.store.selectedId);
  }

  get localSelectedId() { return this.store.selectedId; }

  @Watch('selectedId', { immediate: true })
  public updateSelectedId(newId: string | null) {
    this.store.selectedId = newId;
  }
}
