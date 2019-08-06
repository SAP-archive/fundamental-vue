<template>
  <fd-tree :items="items"></fd-tree>
</template>

<script>
const directories = [
  {
    name: "src",
    id: 1,
    disabled: true,
    children: [
      {
        name: "components",
        children: [
          {
            name: "Tree",
            disabled: true,
            children: [{ name: "Tree.vue", children: [] }, { name: "TreeItem.vue", children: [] }]
          }
        ]
      },
      {
        name: "tests",
        children: [
          { name: "SimpleTest.js", children: [] },
          { name: "ComplexTest.js", children: [] }
        ]
      }
    ]
  },
  {
    name: "scripts",
    id: 2,
    children: [
      {
        name: "publish-release.sh",
        children: []
      }
    ]
  },
  {
    name: ".gitignore",
    children: []
  },
  {
    name: "package.json",
    children: []
  }
];

export default {
  data() {
    return {
      items: directories
    };
  }
};
</script>
