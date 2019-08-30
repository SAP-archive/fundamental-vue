---
fdRelatedComponents:
  - fd-tree
---

# Tree

You can use `fd-tree` to display data in a visual hierarchy. The data that is passed as an `items` array, is nested. Meaning that a node can have multiple child node. If that's the case, then it will be expandable. 


## Simple Tree

The most simple usage of the tree is passing it an array where each object has a `name` and `children` property.
<d-example name="default">
</d-example>

## Slots

Using the `prepend` and `label` slots, with the same data from the example above, we can customize our tree to look like an actual file explorer. The `prepend` slot allows you to control what should be rendered before a node's label. In the `label` slot you can really pass any element that you like depending on your use case.

<d-example name="file-explorer">
</d-example>


## Props

By default,the tree will look for a `name` property to use it as node label and a `children` property to extract a node's children. However if you already have objects with tree-like structure, you don't need to transform them into an array of objects following the default naming. You can use the props to specify the path to the `name` and `children` properties. You can even use nested property names, just like in the example below, in the format of `'nestedPropertyName.deepProperty'`. Below, is an example of showing an organization's structure using both custom slots and props.

<d-example name="organization">
</d-example>
