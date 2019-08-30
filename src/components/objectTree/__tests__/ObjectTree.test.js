import { mount } from "@vue/test-utils";
import ObjectTree from "../ObjectTree.vue";

const object = {
  status: {
    success: false,
    message: "some string data"
  },
  page: 1,
  pageSize: 4,
  functionProperty: function() {},
  nullProperty: null,
  excludes: "won't be rendered when excluded",
  totalRecords: 1000,
  records: [
    {
      name: "Record name",
      type: 5
    },
    2,
    "string"
  ]
};

const genereatedTreeDataFull = [
  {
    type: "object",
    value: "Object",
    children: [
      {
        type: "object",
        value: "Object",
        children: [
          {
            name: "success",
            value: false,
            type: "boolean"
          },
          {
            name: "message",
            value: '"some string data"',
            type: "string"
          }
        ],
        name: "status"
      },
      {
        name: "page",
        value: 1,
        type: "number"
      },
      {
        name: "pageSize",
        value: 4,
        type: "number"
      },
      {
        name: "functionProperty",
        value: "function()",
        type: "function"
      },
      {
        name: "nullProperty",
        value: "null",
        type: "null"
      },
      {
        name: "excludes",
        value: '"won\'t be rendered when excluded"',
        type: "string"
      },
      {
        name: "totalRecords",
        value: 1000,
        type: "number"
      },
      {
        type: "array",
        value: "Array(3)",
        children: [
          {
            type: "object",
            value: "Object",
            children: [
              {
                name: "name",
                value: '"Record name"',
                type: "string"
              },
              {
                name: "type",
                value: 5,
                type: "number"
              }
            ],
            name: 0
          },
          {
            name: 1,
            value: 2,
            type: "number"
          },
          {
            name: 2,
            value: '"string"',
            type: "string"
          }
        ],
        name: "records"
      }
    ],
    name: "Object"
  }
];

describe("ObjectTree", () => {
  const objectTree = mount(ObjectTree, {
    propsData: {
      object: object
    }
  });

  it("renders correctly: 'object' prop with most common property types", () => {
    expect(objectTree.element).toMatchSnapshot();
  });

  it("generates correct tree data: full", () => {
    expect(objectTree.vm.treeData).toEqual(genereatedTreeDataFull);
  });

  // to get a new object instead of a reference
  // const jsonTreeData = genereatedTreeDataFull.filter(el => true);
  const jsonTreeData = [...genereatedTreeDataFull];

  objectTree.setProps({
    object: null,
    json: JSON.stringify(object),
    rootName: "custom name",
    ignoreProperties: ["excludes"]
  });

  // update root name
  jsonTreeData[0].name = "custom name";

  // remove 'functionProperty' and 'excludes'
  jsonTreeData[0].children = jsonTreeData[0].children.filter(
    node => node.name !== "functionProperty" && node.name !== "excludes"
  );

  it("generates correct tree data: should be missing 'functionProperty' and 'excludes' from children array", () => {
    expect(objectTree.vm.treeData).toEqual(jsonTreeData);
  });

  it("renderes correctly: 'json' prop with most common property types + 'rootName' and 'ignoreProperties' props", () => {
    expect(objectTree.element).toMatchSnapshot();
  });

  it("generates correct excludes set", () => {
    expect(objectTree.vm.excludes).toEqual(new Set(["__ob__", "excludes"]));
  });
});
