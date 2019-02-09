interface State {
  selectedId: string | null;
  expandedIds: string[];
  items: Items;
}

const makeDefaultState = (): State => ({
  selectedId: null,
  expandedIds: [],
  items: {},
});

type Item = { itemId: string; };
type SubItem = Item & { parentId: string; };
type Items = {[itemId: string]: Item | SubItem };

export class Store {
  constructor(
    readonly initialState = makeDefaultState()) {
    this.state = {...initialState};
  }

  private state: State;

  get selectedId(): string | null {
    return this.state.selectedId;
  }

  set selectedId(selectedId: string | null) {
    this.state = {...this.state, selectedId};
  }

  get expandedIds(): string[] {
    return [...this.state.expandedIds];
  }

  set expandedIds(expandedIds: string[]) {
    this.state = {...this.state, expandedIds};
  }

  get expanded(): ((id: string) => boolean) {
    return id => this.expandedIds.includes(id);
  }

  get selected(): ((id: string) => boolean) {
    return id => this.selectedId === id;
  }

  get items(): Items {
    return {...this.state.items};
  }

  subItems(itemId: string): SubItem[] {
    const items = Object.values(this.items);
    const result: SubItem[] = [];
    items.forEach(item => {
      if('parentId' in item) {
        const { parentId } = item;
        if(parentId === itemId) {
          result.push({ itemId: item.itemId, parentId });
        }
      }
    });
    return result;
  }

  hasSubItems(itemId: string): boolean {
    return this.subItems(itemId).length > 0;
  }

  // Actions & Mutations
  registerItem(itemId: string) {
    this.state = {
      ...this.state,
      items: {...this.items, [itemId]: { itemId }},
    };
  }

  unregisterItem(itemId: string) {
    const items = this.items;
    delete items[itemId];
    this.state = {
      ...this.state,
      items,
    };
  }

  registerSubItem({itemId, parentId}: SubItem) {
    this.state = {
      ...this.state,
      items: {...this.items, [itemId]: { itemId, parentId }},
    };
  }

  ununregisterSubItem({itemId}: SubItem) {
    this.unregisterItem(itemId);
  }

  toggleExpanded(itemId: string) {
    const expand = !this.expandedIds.includes(itemId);
    expand ? this.expand(itemId) : this.collapse(itemId);
  }

  private expand(id: string) {
    this.expandedIds = [...this.expandedIds, id];
  }

  private collapse(id: string) {
    this.expandedIds = [...this.expandedIds.filter(expandedId => expandedId !== id)];
  }
}
