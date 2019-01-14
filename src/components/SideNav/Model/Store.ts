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
  public static KEY = Symbol();

  constructor(
    public readonly initialState = makeDefaultState()) {
    this.state = {...initialState};
  }

  private state: State;

  public get selectedId(): string | null {
    return this.state.selectedId;
  }

  public set selectedId(selectedId: string | null) {
    this.state = {...this.state, selectedId};
  }

  public get expandedIds(): string[] {
    return [...this.state.expandedIds];
  }

  public set expandedIds(expandedIds: string[]) {
    this.state = {...this.state, expandedIds};
  }

  public get expanded(): ((id: string) => boolean) {
    return id => this.expandedIds.includes(id);
  }

  public get selected(): ((id: string) => boolean) {
    return id => this.selectedId === id;
  }

  public get items(): Items {
    return {...this.state.items};
  }

  public subItems(itemId: string): SubItem[] {
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

  public hasSubItems(itemId: string): boolean {
    return this.subItems(itemId).length > 0;
  }

  // Actions & Mutations
  public registerItem(itemId: string) {
    this.state = {
      ...this.state,
      items: {...this.items, [itemId]: { itemId }},
    };
  }

  public unregisterItem(itemId: string) {
    const items = this.items;
    delete items[itemId];
    this.state = {
      ...this.state,
      items,
    };
  }

  public registerSubItem({itemId, parentId}: SubItem) {
    this.state = {
      ...this.state,
      items: {...this.items, [itemId]: { itemId, parentId }},
    };
  }

  public ununregisterSubItem({itemId}: SubItem) {
    this.unregisterItem(itemId);
  }

  public toggleExpanded(itemId: string) {
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
