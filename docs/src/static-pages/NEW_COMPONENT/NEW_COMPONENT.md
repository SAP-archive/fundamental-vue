# New Component Guide

> This is a very brief guide which describes what you have to do in order to implement a new component for Fundamental Vue.

## Creating the files for the actual Component

For the purpose of this guide, lets assume that you want to create a component called `Flower`. Create a folder that contains all of your files. For example:

```
$ mkdir ui/src/components/Flower
$ touch ui/src/components/Flower/index.ts
$ touch ui/src/components/Flower/Flower.vue
$ touch ui/src/components/Flower/Blossom.vue
$ touch ui/src/components/Flower/Util.ts
```

## Implementing the Component

**ui/src/components/Flower/Flower.vue**

```
<template>
  <div :style="style">I am a flower</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "FdFlower",
  props: {
    color: String
  },
  computed: {
    styles() {
      return {
        backgroundColor: this.color
      };
    }
  }
});
</script>
```

## Exporting the new Component

You have to export the new component:

**ui/src/components/Flower/index.ts**

```typescript
import Flower from "./Flower.vue";
import { pluginify } from "@/util";
export default pluginify(Flower);
export { Flower };
```

## Documenting the new Component

In order to make your component available to the public you have to document the component. A properly documented component consists of at least two things:

- Examples
- API Documentation

## Documenting the new Component: Examples

In order to create a example for your new component create the necessary files:

```shell
$ mkdir docs/src/pages/Flower
$ touch docs/src/pages/Flower/0-default.vue
$ touch docs/src/pages/Flower/index.ts
```

Examples are implemented as single file components (in our case `docs/src/pages/Flower/0-default.vue`) because this is what most Vue developers are using. You can put anything you want in the vue-file: a `<template>`-block, a `<script>`-block and a `<style>`-block. Fundamental Vue examples may contain additional documentation specific blocks. More about that later. For now lets simply implement the most basic example possible:

### Simple Example

**docs/src/pages/Flower/0-default.vue**

```xhtml
<template>
  <FdFlower color="red" />
</template>
```

You can include a `script` and/or `style` section if needed. If you declare custom styles make sure to make your `style`-section scoped.

### Improved Example

As already mentioned in the paragraph above, you can improve your example by using addional blocks. Namely:

- `<title>Example Title</title>`: Specify a title for your example. The title is displayed in a big font above your example.
- `<docs>Potentially long example description</docs>`: Describe the example in detail. This is displayed directly below the title. **Supports Markdown**
- `<tip>Short but useful tip related to the example/component.</tip>` If there is something important, especially useful or good to know fact use the `<tip>`-block. This is displayed in a highlighted box below the `<docs>`-block. **Supports Markdown**

**docs/src/pages/Flower/0-default.vue**

```xhtml
<title>Red Flower (Rose)</title>
<docs>Roses are **red**, __Violets__ are ~blue~, Sugar is sweet, And so are you.</docs>
<tip>Plant roses under trees for **best** results.</tip>
<template>
  <FdFlower color="red" />
</template>
```

## Localization

A good component should either be localized or localizable.

- A **localizable component** may display non-localized text/icons but the displayed text should be configurable by the application developer.
- A **localized component** is fully localized out of the box.

Since there is no Fundamental Vue-wide localisation and internationalization concept (localized icons, right-to-left-support, …) you should at least create an issue for the component you implemented.
