# Implementing a new Component for Fundamental-vue

This is a very brief guide which describes what you have to do in order to implement a new component for Fundamental-vue. For the purpose of this guide, lets assume that you want to create a component called `Flower`.

## Creating the files for the actual Component
If the new component is so simple that it will fit in just a single file then you have to create just a single file:

```
$ touch src/components/Flower.tsx
```

If your component is more complex you will probably need more than one file. Maybe your component is a componsition made out of several other related components that you will implement. If that is the case create a folder instead that in turn contains all of your files. For example:

```
$ mkdir src/components/Flower
$ touch src/components/Flower/index.tsx
$ touch src/components/Flower/Flower.tsx
$ touch src/components/Flower/Blossom.tsx
$ touch src/components/Flower/Util.ts
```

Lets further assume that you are implementing a simple component.

## Implementing the Component


**src/components/Flower.tsx**

```js
import { componentName } from '@/util';

import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';

@Component({ name: componentName('Flower') })
export class Flower extends Vue {
  @Prop public color!: string;

  public render() {
    const style = {
      'background-color': color,
    }
    return <div style={style}>I am a Flower</div>
  }
}
```

Key points:

- `componentName('Flower')` is used to create the name for your component. By convention the string passed to `componentName` should be in CamelCase, starting with an uppercase letter and without any prefix. `componentName` will add the prefix for you.
- In order to improve interoperability default exports for components are avoided.
- `@Prop` iVars are suffixed with `!` in order to silence the compiler (false positive).

## Exporting the new Component

You have to export the new component:

**src/components/index.ts**

```diff
+ export * from './Flower'
+ import { Flower } from './Flower';
export const all = {
+ Flower
};
```

## Documenting the new Component
In order to make your component available to the public you have to document the component. A properly documented component consists of at least two things:

- Examples
- API Documentation

## Documenting the new Component: Examples
The image below shows a example for an existing component.

![Anatomy of an Example](./example.png)

In order to create a example for your new component create the necessary files:

```shell
$ mkdir src/docs/pages/Flower
$ touch src/docs/pages/Flower/default.vue
$ touch src/docs/pages/Flower/default.md
```

Examples are implemented as single file components (in our case `src/docs/pages/Flower/default.vue`) because this is what most Vue developers are using. The markdown file (which must have the same name as the corresponding example file) is optional. The content of the markdown file is displayed above the actual example (gray box in the screenshot above).

**src/docs/pages/Flower/default.vue**

```xhtml
<template>
  <FdFlower color="red" />
</template>
```

You can include a `script` and/or `style` section if needed. If you declare custom styles make sure to make your `style`-section scoped.

**src/docs/pages/Flower/default.md**

```md
**Good to know:**

Flowers can have a background color.
```

In order to make the documentation visible you have to modify the docs-configuration:

**src/docs/config/ui-components.ts**

```diff
// Add your component to the longest import statement in the world.
import {
  …
+  Flower
} from '@/components';

export const UiComponentsConfig: UiComponentConfig[] = [
+  {
+    id: 'Flower',
+    title: 'Flower',
+    examples: [
+      { id: 'default', title: 'Default Flower' },
+    ],
+    relatedComponents: [Flower],
+  },
  // …remaining entries
]
```

The `id` of the `UiComponentsConfig` must be the name of the folder in `src/docs/pages`. The `id` of the example must be the name of the `vue`-file (without the extension). The name of the markdown file must be equal to the name of the example.

Now your component should show up in the documentation.

## Documenting the new Component: API Documentation

Your new component may have props or emit custom events. You can document props and events directly in your custom component.

**src/components/Flower.tsx**

```js
import { componentName } from '@/util';
import { Api } from '@/api'; // <-- import Api-Doc Helper
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';

@Component({ name: componentName('Flower') })

// Document the Component itself

@Api.Component(/* human readable name */'Alert', component => {
  component.addEvent('click', 'Sent when the Flower is clicked');
})
export class Flower extends Vue {
  @Prop
  @ApiProp('flower color', prop => {
    prop
      .types(String)
      .acceptValues('red', 'green', 'blue')
  })
  public color!: string;

  public render() {
    const style = {
      'background-color': color,
    }
    return <div style={style}>I am a Flower</div>
  }
}
```

The additional annotations it is now documented that the component emits a `click`-event (to be implemented :)) and has a prop named `color` of type `String` which accepts `red`, `green` and `blue` as values.

The API documentation of a component looks like this:

![Example API Documentation](./api.png)

Every annotated and exported component is automatically documented.

## Enable static Component Attribute Checks

By using [JSX with Typescript](https://www.typescriptlang.org/docs/handbook/jsx.html) (let's refer to this combination as TSX from now on) we can take advantage of additional type safety. TSX differentiates between two element types:

1. **intrinsic elements**: These are elements that refer to something intrinsic to the environment. In our case the environment is a browser executing our Typescript/Javascript code. Prime examples of intrinsic elements are `div`, `span`, `button`, …. By convention, intrinsiv elements start with a lower case letter and accept any attribute. `<div i-am-a-non-existent-attribute="with an invalid value" />` does not cause a compiler warning. We could enable type checking even for intrinsic elements but for now this seemed like not so high on the list of things to do.
2. **value-based elements**: In our context, every element/component we implement falls into this category: Every element that is non-intrinsic is for our purpose, value-based. By convention value-based elements are be CamelCased. TSX has the ability to perform type checks on our value-based elements. Sadly this does not come for free. In order to enable static component attribute checks you have to tell the type system about every valid attribute your custom element/component supports.

We now come back to our example from earlier and enable the static attribute checks:

**src/components/Flower.tsx**

```js
import { componentName } from '@/util';
import { Api } from '@/api';
import {
  Component,
  Prop,
} from 'vue-property-decorator';
import TsxComponent from '@/vue-tsx';  // <-- import TsxComponent

// Declare our puplic props (again)
interface Props {
  color?: string;
}

@Component({ name: componentName('Flower') })

// Document the Component itself

@Api.Component(/* human readable name */'Alert', component => {
  component.addEvent('click', 'Sent when the Flower is clicked');
})
export class Flower extends TsxComponent<Props> { // <-- extend the TsxComponent
  @Prop
  @Api.Prop('flower color', prop => {
    prop
      .types(String)
      .acceptValues('red', 'green', 'blue')
  })
  public color!: string;

  public render() {
    const style = {
      'background-color': color,
    }
    return <div style={style}>I am a Flower</div>
  }
}
```

Declaring our public interface id done twice (by using @Prop and by declaring the Prop-interface). There are third party projects that work around this problem but this low-tech and redundant solution seemed acceptable.

# Known Issues

* `@/api`-module:
  - not really documented
  - ~~no ability to annotate slots~~ Use `@Api.slot(name: string, description: string)` and/or `@Api.defaultSlot(description: string)`.
* ~~Optional/Required prop-attributes are not displayed - yet.~~
* Parameters of events can be annotated but are not displayed - yet.
* Props and Events gained by mixins are not displayed.
