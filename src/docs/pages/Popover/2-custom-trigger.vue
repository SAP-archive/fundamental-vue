<title>Popover with custom Trigger</title>
<tip>If you have special needs simply use `slot-scope`. This gives you access to the `toggle`-function and the current `visibility`. The second button is using this in order to customize the trigger event and styling.</tip>
<docs>
**Implementation Details**

There are three different ways a trigger control can be rendered.

1. `$slots.control`: If there is a slot called `control` we simply render that. This control should emit `click`-events.
2. `$scopedSlots.control`: If there is a scoped slot `control` we assume that the popover consumer (**you**) has some kind of special needs. Thus, when rendering the scoped slot, we pass a little bit of context to the consumer.

**The context looks like this:**:

```javascript
{
   // Calling this will toggle the popover.
   toggle: () => (void);
   // whether the popover is currently visible.
   visible: boolean;
}
```

Because of the fact that we assume that the consumer has special needs, we do not show the popover automatically. The consumer has to call `toggle` for example by binding it to `@click`/`@click.native` of some kind of control or by using `v-model`.

3. If there is no (scoped) control-slot we simply render a standard button on behalf of the consumer.
</docs>
<template>
  <div>
    <FdPopover>
      <template v-slot:control>
        <FdButton styling="emphasized" type="positive"
          >Custom Popover Trigger Control (automatic popover
          visibility)</FdButton
        >
      </template>
      <template v-slot:default>
        <FdMenuItem>Option 1</FdMenuItem>
        <FdMenuItem>Option 2</FdMenuItem>
        <FdMenuItem>Option 3</FdMenuItem>
      </template>
    </FdPopover>

    <br />
    <br />

    <FdPopover>
      <template v-slot:control="popover">
        <FdButton
          :type="popover.visible ? 'negative' : 'medium'"
          @click="popover.toggle"
          >Custom Popover Trigger Control (manual popover visibility)</FdButton
        >
      </template>
      <template v-slot:default>
        <FdMenuItem>Option 1</FdMenuItem>
        <FdMenuItem>Option 2</FdMenuItem>
        <FdMenuItem>Option 3</FdMenuItem>
      </template>
    </FdPopover>
  </div>
</template>
