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

const avatars = [
  "https://vignette.wikia.nocookie.net/onepiece/images/5/58/Monkey_D._Luffy_Post_Timeskip_Portrait.png/revision/latest/scale-to-width-down/119?cb=20181024214118",
  "https://vignette.wikia.nocookie.net/onepiece/images/b/bc/Roronoa_Zoro_Post_Timeskip_Portrait.png/revision/latest/scale-to-width-down/119?cb=20190708150235",
  "https://vignette.wikia.nocookie.net/onepiece/images/e/e5/Sanji_Post_Timeskip_Portrait.png/revision/latest/scale-to-width-down/119?cb=20190609054007",
  "https://vignette.wikia.nocookie.net/onepiece/images/9/90/Nico_Robin_Post_Timeskip_Portrait.png/revision/latest/scale-to-width-down/119?cb=20181008030024",
  "https://vignette.wikia.nocookie.net/onepiece/images/8/83/Franky_Post_Timeskip_Portrait.png/revision/latest/scale-to-width-down/119?cb=20190525221942",
  "https://vignette.wikia.nocookie.net/onepiece/images/0/03/Brook_Post_Timeskip_Portrait.png/revision/latest/scale-to-width-down/119?cb=20190414151503",
  "https://vignette.wikia.nocookie.net/onepiece/images/3/37/Usopp_Post_Timeskip_Portrait.png/revision/latest/scale-to-width-down/119?cb=20180514152341",
  "https://vignette.wikia.nocookie.net/onepiece/images/e/e2/Tony_Tony_Chopper_Post_Timeskip_Portrait.png/revision/latest/scale-to-width-down/119?cb=20181121032207",
  "https://vignette.wikia.nocookie.net/onepiece/images/2/2f/Nami_Post_Timeskip_Portrait.png/revision/latest/scale-to-width-down/119?cb=20141206204746",
  "https://vignette.wikia.nocookie.net/onepiece/images/f/f7/Jinbe_Portrait.png/revision/latest/scale-to-width-down/119?cb=20190724150037",
  "https://vignette.wikia.nocookie.net/onepiece/images/b/b5/Donquixote_Doflamingo_Portrait.png/revision/latest/scale-to-width-down/119?cb=20190121073613",
  "https://vignette.wikia.nocookie.net/onepiece/images/a/a8/Trebol_Portrait.png/revision/latest/scale-to-width-down/119?cb=20190725082846",
  "https://vignette.wikia.nocookie.net/onepiece/images/1/1a/Vergo_Portrait.png/revision/latest/scale-to-width-down/119?cb=20190723190511",
  "https://vignette.wikia.nocookie.net/onepiece/images/6/69/Donquixote_Rosinante_Portrait.png/revision/latest/scale-to-width-down/119?cb=20190108061932",
  "https://vignette.wikia.nocookie.net/onepiece/images/1/16/Pica_Portrait.png/revision/latest/scale-to-width-down/119?cb=20181124204655",
  "https://vignette.wikia.nocookie.net/onepiece/images/6/62/Baby_5_Portrait.png/revision/latest/scale-to-width-down/119?cb=20190703095114",
  "https://vignette.wikia.nocookie.net/onepiece/images/3/37/Buffalo_Portrait.png/revision/latest/scale-to-width-down/119?cb=20150506203938",
  "https://vignette.wikia.nocookie.net/onepiece/images/c/c3/Gladius_Portrait.png/revision/latest/scale-to-width-down/119?cb=20190724124705"
];

const allPropertiesCustomNames = [
  {
    avatar: avatars[0],
    profile: { nickname: "Monkey D. Luffy", badgeId: "c3z1r" },
    subordinates: [
      { avatar: avatars[1], profile: { nickname: "Pirate Hunter", badgeId: "XCixH" } },
      { avatar: avatars[2], profile: { nickname: "Black leg ", badgeId: "6Qg0C" } },
      { avatar: avatars[3], profile: { nickname: "Demon Child", badgeId: "NZNCj" } },
      { avatar: avatars[4], profile: { nickname: "Oni Cyborb", badgeId: "7zk22" } },
      { avatar: avatars[5], profile: { nickname: "Soul King ", badgeId: "U5KUZ" } },
      { avatar: avatars[6], profile: { nickname: "Sogeking", badgeId: "ywUpD" } },
      { avatar: avatars[7], profile: { nickname: "Pet", badgeId: "p42mQ" } },
      { avatar: avatars[8], profile: { nickname: "Cat Burglar", badgeId: "JqcX3" } },
      { avatar: avatars[9], profile: { nickname: "Knight of the Sea", badgeId: "JqcX5" } }
    ]
  },
  {
    avatar: avatars[10],
    profile: { nickname: "Joker", badgeId: "c3z1r2" },
    subordinates: [
      { avatar: avatars[11], profile: { nickname: "Trebol", badgeId: "XCixH2" } },
      { avatar: avatars[12], profile: { nickname: "Vergo", badgeId: "6Qg0C2" }, deceased: true },
      { avatar: avatars[13], profile: { nickname: "Corazon", badgeId: "NZNCj2" }, deceased: true },
      {
        avatar: avatars[14],
        profile: { nickname: "Pica", badgeId: "7zk222" },
        subordinates: [
          { avatar: avatars[15], profile: { nickname: "Baby 5", badgeId: "XCixH25" } },
          { avatar: avatars[16], profile: { nickname: "Buffalo", badgeId: "XCixH23" } },
          { avatar: avatars[17], profile: { nickname: "Gladius", badgeId: "XCixH24" } }
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
