# FdNestedList

## *Who* has to know *What*
- `FdNestedList` has to know whether or not is it embedded inside an `FdNestedListItem`. If so, `FdNestedList` has to receive the class `level-2`.
- `FdNestedLink` has to know whether or not its `FdNestedListItem` embeds a list. If so, `FdNestedLink` has to receive the class `has-child`.

**IMPORTANT**

The nested `FdNestedList` (the one with the `level-2`-class) is on the same level as the link of the coresponding item.


**Thus**, `FdNestedListItem` has to know whether or not it contains a list. This means it is not enough for an item to just provide itself. A nested list with an injected item has to tell the item *"hey – here I am"*.