interface State {
  selectedId: string | null;
  expandedIds: string[];
  items: Items;
}

const makeDefaultState = (): State => ({
  selectedId: null,
  expandedIds: [],
  items: {}
});

type ParentId = string;
type Item = null | ParentId;
type Items = { [itemId: string]: Item };

export class Store {
  constructor(readonly initialState = makeDefaultState()) {
    this.state = { ...initialState };
  }

  private state: State;

  get selectedId(): string | null {
    return this.state.selectedId;
  }

  set selectedId(selectedId: string | null) {
    this.state = { ...this.state, selectedId };
  }

  get expandedIds(): string[] {
    return [...this.state.expandedIds];
  }

  set expandedIds(expandedIds: string[]) {
    this.state = { ...this.state, expandedIds };
  }

  get expanded(): (id: string) => boolean {
    return id => this.expandedIds.indexOf(id) >= 0;
  }

  get selected(): (id: string) => boolean {
    return id => this.selectedId === id;
  }

  get items(): Items {
    return { ...this.state.items };
  }

  subItems(itemId: string): Item[] {
    const result: Item[] = [];
    for (const currentItemId in this.items) {
      const parentId = this.items[currentItemId];
      if (parentId === itemId) {
        result.push(currentItemId);
      }
    }
    return result;
  }

  hasSubItems(itemId: string): boolean {
    return this.subItems(itemId).length > 0;
  }

  // Actions & Mutations
  registerItem(itemId: string) {
    this.state = {
      ...this.state,
      items: { ...this.items, [itemId]: null }
    };
  }

  unregisterItem(itemId: string) {
    const items = this.items;
    delete items[itemId];
    this.state = {
      ...this.state,
      items
    };
  }

  registerSubItem({ itemId, parentId }: { itemId: string; parentId: string }) {
    this.state = {
      ...this.state,
      items: { ...this.items, [itemId]: parentId }
    };
  }

  ununregisterSubItem(subItemId: string) {
    this.unregisterItem(subItemId);
  }

  toggleExpanded(itemId: string) {
    const expand = this.expandedIds.indexOf(itemId) < 0;
    expand ? this.expand(itemId) : this.collapse(itemId);
  }

  private expand(id: string) {
    this.expandedIds = [...this.expandedIds, id];
  }

  private collapse(id: string) {
    this.expandedIds = [
      ...this.expandedIds.filter(expandedId => expandedId !== id)
    ];
  }
}
