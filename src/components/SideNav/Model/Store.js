const makeDefaultState = () => ({
  selectedId: null,
  expandedIds: [],
  items: {}
});

export class Store {
  constructor(initialState = makeDefaultState()) {
    this.state = { ...initialState };
  }

  get selectedId() {
    return this.state.selectedId;
  }

  set selectedId(selectedId) {
    this.state = { ...this.state, selectedId };
  }

  get expandedIds() {
    return [...this.state.expandedIds];
  }

  set expandedIds(expandedIds) {
    this.state = { ...this.state, expandedIds };
  }

  get expanded() {
    return id => this.expandedIds.indexOf(id) >= 0;
  }

  get selected() {
    return id => this.selectedId === id;
  }

  get items() {
    return { ...this.state.items };
  }

  subItems(itemId) {
    const result = [];
    for (const currentItemId in this.items) {
      const parentId = this.items[currentItemId];
      if (parentId === itemId) {
        result.push(currentItemId);
      }
    }
    return result;
  }

  hasSubItems(itemId) {
    return this.subItems(itemId).length > 0;
  }

  // Actions & Mutations
  registerItem(itemId) {
    this.state = {
      ...this.state,
      items: { ...this.items, [itemId]: null }
    };
  }

  unregisterItem(itemId) {
    const items = this.items;
    delete items[itemId];
    this.state = {
      ...this.state,
      items
    };
  }

  registerSubItem({ itemId, parentId }) {
    this.state = {
      ...this.state,
      items: { ...this.items, [itemId]: parentId }
    };
  }

  ununregisterSubItem(subItemId) {
    this.unregisterItem(subItemId);
  }

  toggleExpanded(itemId) {
    const expand = this.expandedIds.indexOf(itemId) < 0;
    expand ? this.expand(itemId) : this.collapse(itemId);
  }

  expand(id) {
    this.expandedIds = [...this.expandedIds, id];
  }

  collapse(id) {
    this.expandedIds = [
      ...this.expandedIds.filter(expandedId => expandedId !== id)
    ];
  }
}
