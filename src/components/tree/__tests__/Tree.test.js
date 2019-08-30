import { mount } from "@vue/test-utils";
import Tree from "../Tree.vue";

const simpleTreeData = [
  {
    name: "src",
    children: [
      {
        name: "components",
        children: [{ name: "Tree", children: [{ name: "Tree.vue" }, { name: "TreeItem.vue" }] }]
      },
      {
        name: "tests",
        children: [{ name: "SimpleTest.js" }, { name: "ComplexTest.js" }]
      }
    ]
  },
  { name: "scripts", children: [{ name: "publish-release.sh" }] },
  { name: ".gitignore" },
  { name: "package.json" }
];

const allPropertiesDefaultNames = [
  {
    name: "src",
    id: 1,
    children: [
      {
        name: "components",
        id: 2,
        children: [
          {
            name: "Tree",
            id: 3,
            children: [{ name: "Tree.vue", id: 4 }, { name: "TreeItem.vue", id: 5 }]
          }
        ]
      },
      {
        name: "tests",
        id: 6,
        children: [{ name: "SimpleTest.js", id: 7 }, { name: "ComplexTest.js", id: 8 }]
      }
    ]
  },
  { name: "scripts", id: 9, children: [{ name: "publish-release.sh", id: 10 }] },
  { name: ".gitignore", id: 11 },
  { name: "package.json", id: 12 }
];

const allPropertiesCustomNames = [
  {
    profile: { nickname: "Monkey D. Luffy", badgeId: "c3z1r" },
    subordinates: [
      { profile: { nickname: "Pirate Hunter", badgeId: "XCixH" } },
      { profile: { nickname: "Black leg ", badgeId: "6Qg0C" } },
      { profile: { nickname: "Demon Child", badgeId: "NZNCj" } },
      { profile: { nickname: "Oni Cyborb", badgeId: "7zk22" } },
      { profile: { nickname: "Soul King ", badgeId: "U5KUZ" } },
      { profile: { nickname: "Sogeking", badgeId: "ywUpD" } },
      { profile: { nickname: "Pet", badgeId: "p42mQ" } },
      { profile: { nickname: "Cat Burglar", badgeId: "JqcX3" } },
      { profile: { nickname: "Knight of the Sea", badgeId: "JqcX5" } }
    ]
  },
  {
    profile: { nickname: "Joker", badgeId: "c3z1r2" },
    subordinates: [
      { profile: { nickname: "Trebol", badgeId: "XCixH2" } },
      { profile: { nickname: "Vergo", badgeId: "6Qg0C2" }, deceased: true },
      { profile: { nickname: "Corazon", badgeId: "NZNCj2" }, deceased: true },
      {
        profile: { nickname: "Pica", badgeId: "7zk222" },
        subordinates: [
          { profile: { nickname: "Baby 5", badgeId: "XCixH25" } },
          { profile: { nickname: "Buffalo", badgeId: "XCixH23" } },
          { profile: { nickname: "Gladius", badgeId: "XCixH24" } }
        ]
      }
    ]
  }
];

describe("Tree", () => {
  const treeWithouSlots = mount(Tree, {
    propsData: {
      items: simpleTreeData
    }
  });

  it("renders correctly: only 'children' and 'name' properties are present on item", () => {
    expect(treeWithouSlots.element).toMatchSnapshot();
  });

  treeWithouSlots.setProps({ items: allPropertiesDefaultNames });

  it("renders correctly: all item properties with default names are present", () => {
    expect(treeWithouSlots.element).toMatchSnapshot();
  });

  treeWithouSlots.setProps({
    itemid: "profile.badgeId",
    itemValuePath: "profile.nickname",
    itemDisabledPath: "deceased",
    items: allPropertiesCustomNames,
    itemChildrenPath: "subordinates"
  });

  it("renders correctly: all item properties with custom names are present", () => {
    expect(treeWithouSlots.element).toMatchSnapshot();
  });

  const treeWithSlots = mount(Tree, {
    propsData: {
      items: allPropertiesDefaultNames
    },
    scopedSlots: {
      prepend: `<span>
            {{ props.item.children && props.item.children.length ? props.expanded ? 'open-folder' : 'folder' : 'document' }} </span>`,
      label: `<span style="margin-right: 4px">{{ props.item.name }} from scoped slot</span>`
    }
  });

  it("renders correctly: custom slots + all item properties with default names", () => {
    expect(treeWithSlots.element).toMatchSnapshot();
  });

  treeWithSlots.setProps({
    itemid: "profile.badgeId",
    itemValuePath: "profile.nickname",
    itemDisabledPath: "deceased",
    items: allPropertiesCustomNames,
    itemChildrenPath: "subordinates"
  });

  it("renders correctly: custom slots + all item properties with custom names", () => {
    expect(treeWithSlots.element).toMatchSnapshot();
  });
});
