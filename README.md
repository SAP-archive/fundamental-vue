<p align="center">
      <a href="https://github.com/SAP/fundamental-vue" target="_blank" rel="noopener noreferrer">
            <img width="400" src="./public/images/logo_big.png" alt="Fundamental Vue logo">
      </a>
</p>

Fundamental-Vue is a light-weight Vue.JS component library for [SAP Fiori Fundamentals](https://github.com/SAP/fundamental).

**[Component Documentation](https://dist-lg4xtfik7.now.sh)**

## Current Version

```
0.0.6-beta
```

## Description

Fundamental Vue is a light-weight set of [Vue.JS](https://vuejs.org/) components implementation of [SAP Fiori Fundamentals library](https://sap.github.io/fundamental/). SAP Fiori Fundamentals library is a Design System and HTML/CSS Component Library used to build modern Product User Experiences with the SAP look and feel. This will allow you to stay/use Vue.js for your application and get SAP look and feel.
Fundamental Vue is open for contribution as long as you follow certain [rules/guidelines](./CONTRIBUTING.md).

The library is currently in a Beta version and it is under development. The progress can be seen [here](https://github.com/SAP/fundamental-vue/projects/1)

## Requirements

To download and use Fundamental Vue library, you first need to install the node package manager.
https://www.npmjs.com/get-npm

Some prior knowledge of Vue is required for using this library.

# Getting started

## Install

To download and use this library, you first need to install the node package manager - [npm](https://www.npmjs.com/get-npm).

1. Install Fundamental Vue

    NPM

    ```
    $ npm install --save fundamental-vue
    ```

    After installing, you will need to import `fundamental-vue` and make it available to your Vue application. These instructions assume the usage of Vue CLI to scaffold your project.

    In your project's `main.js`:

    ```
    // ...
    import FundamentalVue from 'fundamental-vue';
    Vue.use(FundamentalVue);
    // ...
    ```

    Fundamental Vue does not include the ['Fiori Fundamentals' library](https://github.com/SAP/fundamental) which is required for styling.

2. Install Fiori Fundamentals

    The quickest way to get Fiori Fundamentals styling for your components is to include the compiled and minified Fiori Fundamentals CSS library with the following CDN link in your public `index.html` file:

    ```
    <link rel="stylesheet" type="text/css" href="https://unpkg.com/fiori-fundamentals@1.3.3/dist/fiori-fundamentals.min.css">
    ```

    However, installing the Fiori Fundamentals library with npm (recommended) will give you the flexibility to use individual components and enable [advanced customisation options](https://github.com/SAP/fundamental/wiki/Advanced-Customization). In this case, you do not need the CDN link as this method uses the SASS/SCSS source.

    To install the Fiori Fundamentals SASS/SCSS source:

    ```
    $ npm install --save fiori-fundamentals
    ```

    The following assumes the usage of a module bundler such as [webpack](https://webpack.js.org/). To compile Fiori Fundamentals SASS/SCSS to CSS, two additional packages are required for your bundling process - [sass-loader](https://github.com/webpack-contrib/sass-loader) and [node-sass](https://github.com/sass/node-sass). To install these packages as development dependencies:

    ```
    $ npm install sass-loader node-sass --save-dev
    ```

    Loading the SCSS and running your project at this point will result in errors relating to the path configuration for icons and fonts. This is a [known issue](https://github.com/SAP/fundamental#known-issues).

    To rectify this, start by creating a new directory ('scss') in your project's `src`. Within this directory, create a main SCSS file ('main.scss') from which to manage your imports, configurations and customisations.

    Add the following to the main SCSS file:

    ```
    $fd-icons-path : "../node_modules/fiori-fundamentals/scss/icons/"; // should be declared before the scss import

    $fd-scss-font-path : "../node_modules/fiori-fundamentals/scss/fonts/";

    @import "../node_modules/fiori-fundamentals/scss/all.scss";
    ```

    Import the main SCSS file in your `App.js` style block to add Fiori Fundamentals styles to your project.

    ```
    <style lang='scss'>
    ...
    @import "./scss/main.scss";
    ...
    </style>
    ```

    You can now use the [Documentation](https://dist-lg4xtfik7.now.sh) to browse the components currently available with Fundamental Vue.

    To use a Fundamental Vue component, paste the desired code snippet from the Playground and configure it as necessarry:

    ```
    ...
    <FdAlert dismissible>
          Happy building! 🚀
    </FdAlert>
    ...
    ```

## Known Issues

There are no known major issues.

## How to obtain support

If you encounter an issue, you can [create a ticket](https://github.com/SAP/fundamental-vue/issues/new)

## Contributing

If you want to contribute, please check the [CONTRIBUTING.md](./CONTRIBUTING.md) documentation for contribution guidelines.

Check out the [NEW_COMPONENT.md](./NEW_COMPONENT/NEW_COMPONENT.md) guide on building a new component for the library and creating the necessary documentation for your new component.

## License

Copyright (c) 2018 SAP SE or an SAP affiliate company. All rights reserved.
This file is licensed under the Apache Software License, v. 2 except as noted otherwise in the [LICENSE file](https://github.com/SAP/fundamental-vue/blob/master/LICENSE.txt)
