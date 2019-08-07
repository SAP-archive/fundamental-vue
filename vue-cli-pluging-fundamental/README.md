# Vue CLI plugin for Fundamental Vue

This is a [Vue CLI](https://cli.vuejs.org/) plugin for adding [Fundamental Vue](https://github.com/SAP/fundamental-vue) to your project.

## Using the Plugin

Using it is super easy:

```shell
$ vue create my-vue-app
$ cd my-vue-app
$ vue add fundamental
```

If you have an existing Vue CLI-based project you can skip the first two commands and just run:

```shell
$ vue add fundamental
```

## What you will get

This plugin will add the following dependencies to your `package.json`:

- **Dependencies:**
  - `fundamental-vue`: The actual Vue components.
  - `fundamental-styles`: SCSS styles to make the components look good.
- **DevDependencies:**
  - `node-sass`
  - `sass-loader`

The styles will also be imported correctly and the components will be installed globally.

## What else?

This plugin was heavily inspired by [vue-cli-plugin-element](https://github.com/ElementUI/vue-cli-plugin-element). You rock!
