# Fundamental Vue

[![npm version](https://badge.fury.io/js/fundamental-vue.svg)](//www.npmjs.com/package/fundamental-vue)
[![Minified Size](https://badgen.net/bundlephobia/min/fundamental-vue)](https://bundlephobia.com/result?p=fundamental-vue)
[![Minzipped Size](https://badgen.net/bundlephobia/minzip/fundamental-vue)](https://bundlephobia.com/result?p=fundamental-vue)
[![Build Status](https://travis-ci.org/SAP/fundamental-vue.svg?branch=develop)](https://travis-ci.org/SAP/fundamental-vue)
[![Coverage Status](https://coveralls.io/repos/github/SAP/fundamental-vue/badge.svg?branch=develop)](https://coveralls.io/github/SAP/fundamental-vue?branch=master)
[![Slack](https://img.shields.io/badge/slack-ui--fundamentals-blue.svg?logo=slack)](https://ui-fundamentals.slack.com)

## Description

The `fundamental-vue` library is a set of [Vue.js](https://vuejs.org/) components built using [Fundamental Library Styles](https://sap.github.io/fundamental-styles/).

__Fundamental Library for Vue is behind the latest Fundamental Library Styles and is open for contributors.__

## API Reference

See [Component Documentation](https://sap.github.io/fundamental-vue/) for examples and API details.

## Requirements

To download and use Fundamental Vue library, you first need to install the node package manager.
https://www.npmjs.com/get-npm

Some prior knowledge of Vue is required for using this library.

# Getting started

## Fundamental Vue in 5 Minutes or less

Paste the following snippet in your `<head>`-tag:

```xml
<link
    rel="stylesheet"
    href="https://unpkg.com/fiori-fundamentals@latest/dist/fiori-fundamentals.min.css"
/>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://unpkg.com/fundamental-vue@latest/dist/FundamentalVue.umd.js"></script>
```

Then you can use Fundamental Vue like this:

```xml
<div id="app">
  <fd-popover v-fd-margin:large placement="bottom-start" with-arrow>
    <h1 v-fd-margin:large>
      🚀 Hello Fundamental Vue 🚀
    </h1>
    <template #control="{toggle}">
      <fd-button @click="toggle">Show Popover</fd-button>
    </template>
  </fd-popover>
</div>

<script>new Vue({ el: '#app' })</script>
```

When using *Fundamental Vue* via a `<script>`-tag you don't have to install it manually by calling `Vue.use(FundamentalVue)`. This is done for you automatically. You can disable the automatic installation by setting `window.__FD_AUTO_INSTALL_DISABLED_KEY__` to true early on.

If you are targeting IE 11 you have to include the IE-compatible build of Fiori Fundamentals:

```xml
<link rel="stylesheet" type="text/css" href="https://unpkg.com/fiori-fundamentals@latest/dist/fiori-fundamentals-ie11.min.css">
```

How to install Fundamental Vue via **NPM** is described below.

## Install

To download and use this library, you first need to install the node package manager - [npm](https://www.npmjs.com/get-npm).

1. Install Fundamental Vue

    NPM

    ```bash
    $ npm install --save fundamental-vue
    ```

    After installing, you will need to import `fundamental-vue` and make it available to your Vue application. These instructions assume the usage of Vue CLI to scaffold your project.

    In your project's `main.js`:

    ```js
    import FundamentalVue from 'fundamental-vue';
    Vue.use(FundamentalVue);
    // …
    ```

    Fundamental Vue does not include the [Fundamental Library Styles](https://github.com/SAP/fundamental) which is required for styling.

2. Install Fundamental Library Styles

    The quickest way to get Fundamental Library Styles styling for your components is to include the compiled and minified Fundamental Library Styles with the following CDN link in your public `index.html` file:

    ```xml
    <link rel="stylesheet" type="text/css" href="https://unpkg.com/fiori-fundamentals@latest/dist/fundamental-styles.min.css">
    ```

    However, installing the Fundamental Library Styles with npm (recommended) will give you the flexibility to use individual components and enable [advanced customisation options](https://github.com/SAP/fundamental/wiki/Advanced-Customization). In this case, you do not need the CDN link as this method uses the SASS/SCSS source.

    To install the Fundamental Library Styles source:

    ```sh
    $ npm install --save fundamental-styles
    ```

    The following assumes the usage of a module bundler such as [webpack](https://webpack.js.org/). To compile Fiori Fundamentals SASS/SCSS to CSS, two additional packages are required for your bundling process - [sass-loader](https://github.com/webpack-contrib/sass-loader) and [node-sass](https://github.com/sass/node-sass). To install these packages as development dependencies:

    ```sh
    $ npm install sass-loader node-sass --save-dev
    ```

    Loading the SCSS and running your project at this point will result in errors relating to the path configuration for icons and fonts. This is a [known issue](https://github.com/SAP/fundamental-styles#known-issues).

    You can now use the [Documentation](https://sap.github.io/fundamental-vue/) to browse the components currently available with Fundamental Vue.

    To use a Fundamental Vue component, paste the desired code snippet from the Playground and configure it as necessary:

    ```xml
    <fd-alert dismissible>
        Happy building! 🚀
    </fd-alert>
    ```

## Versioning

The `fundamental-vue` library follows [Semantic Versioning](https://semver.org/). These components strictly adhere to the `[MAJOR].[MINOR].[PATCH]` numbering system (also known as `[BREAKING].[FEATURE].[FIX]`).

Merges to the `master` branch will be published as a prerelease. Prereleases will include an **rc** version (_e.g._ `[MAJOR].[MINOR].[PATCH]-rc.[RC]`).

## Known Issues

Please see [Issues](https://github.com/SAP/fundamental-vue/issues).

# Developer Guide
Interested in contributing to this Fundamental Vue? See the [Developer Guide](https://github.com/SAP/fundamental-vue/wiki/Dev-Guide).

# Testing Guide
See the [Testing Guide](https://github.com/SAP/fundamental-vue/wiki/Test-Guide).

## Support

If you encounter an issue, you can [create a ticket](https://github.com/SAP/fundamental-vue/issues/new)

## Contributing

If you want to contribute, please check the [Developer Guide](https://github.com/SAP/fundamental-vue/wiki/Fundamental-Vue-Development-Guide) documentation for contribution guidelines.

Check out [this guide](./NEW_COMPONENT/NEW_COMPONENT.md) on building a new component for the library and creating the necessary documentation for your new component.

## Similar Projects

-   [Angular implementation of Fundamental Library Styles](https://github.com/SAP/fundamental-ngx)
-   [React implementation of Fundamental Library Styles](https://github.com/SAP/fundamental-react)
