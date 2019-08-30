---
fdRelatedComponents:
  - fd-tree
---

# Object Tree

You can use `fd-object-tree` to display an object or a json string in a visual hierarchy. This component traverses your object's properties recursively and constructs an array of objects that can be handled by the `fd-tree` component.


## Simple Usage
The most simple way to use it is just to pass your object as the `object` prop value or your json string as the `json` prop value.

Using an object
<d-example name="default">
</d-example>

We can also get the same result if we pass the serialized version of the same object
<d-example name="json">
</d-example>

**Notes**: 
- If you pass values to both `object` and `json` props, the former will be checked first
- The component loops over the properties using the `Object.getOwnPropertyNames(obj)` method. Which means that the properties on the prototype chain will not be listed.
- By default, not all properties are serializable (e.g: functions), therefore you might notice some differences between the object and the json versions

## Props
Besides the props mentioned above, the component also exposes `ignore-properties` and `root-name` props. The former is an array of strings containing the names of the properties that should not examined, whereas the latter is just the label to be used for the top-most root node.

Below is an example using these props to hide the `excluded` property from the object.

<d-example name="props">
</d-example>

**Note**: be careful with the `ignore-properties` because it will be used on the nested properties as well. For example, if you have `:ignore-properties="['a']"` and `:object="{a: 1, b: {a: 2, c:3}}"`, then the `a` on both the root and the `b` property will be ignored. 