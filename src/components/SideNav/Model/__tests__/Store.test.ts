import { Store } from './../Store';
import { assert } from 'chai';

describe('Store', () => {

  // beforeEach(() => store = new Store());

  it('correctly handles item registration', () => {
    const store = new Store();
    const itemId = 'item1';
    store.registerItem(itemId);
    assert.deepStrictEqual(store.items, { [itemId]: { itemId } });
  });

  it('correctly handles item unregistration', () => {
    const itemId = 'item1';
    const store = new Store({
      selectedId: null,
      expandedIds: [],
      items: { [itemId]: { itemId } },
    });
    assert.deepStrictEqual(store.items, { [itemId]: { itemId } });
    store.unregisterItem(itemId);
    assert.deepStrictEqual(store.items, {});
  });

  it('correctly handles subitem registration', () => {
    const store = new Store();

    const itemId = 'item1';
    store.registerItem(itemId);

    const subItemId = 'subItem1';
    store.registerSubItem({ itemId: subItemId, parentId: itemId });

    assert.deepStrictEqual(store.items, {
      [itemId]: { itemId },
      [subItemId]: { itemId: subItemId, parentId: itemId },
    });
  });

  it('correctly computed subitems', () => {
    const store = new Store();

    const itemId1 = 'item_1';
    store.registerItem(itemId1);

    const subItemId11 = 'item_1__sub_1';
    store.registerSubItem({ itemId: subItemId11, parentId: itemId1 });
    const subItemId12 = 'item_1__sub_2';
    store.registerSubItem({ itemId: subItemId12, parentId: itemId1 });
    const subItemId13 = 'item_1__sub_3';
    store.registerSubItem({ itemId: subItemId13, parentId: itemId1 });

    const itemId2 = 'item_2';
    store.registerItem(itemId2);

    const subItemId21 = 'item_2__sub_1';
    store.registerSubItem({ itemId: subItemId21, parentId: itemId2 });
    const subItemId22 = 'item_2__sub_2';
    store.registerSubItem({ itemId: subItemId22, parentId: itemId2 });
    const subItemId23 = 'item_2__sub_3';
    store.registerSubItem({ itemId: subItemId23, parentId: itemId2 });

    assert.sameDeepMembers(
      store.subItems(itemId1),
      [
        { itemId: subItemId11, parentId: itemId1 },
        { itemId: subItemId12, parentId: itemId1 },
        { itemId: subItemId13, parentId: itemId1 },
      ],
    );

    assert.sameDeepMembers(
      store.subItems(itemId2),
      [
        { itemId: subItemId21, parentId: itemId2 },
        { itemId: subItemId22, parentId: itemId2 },
        { itemId: subItemId23, parentId: itemId2 },
      ],
    );
  });
});
