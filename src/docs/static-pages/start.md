# Fundamental Vue

> SAP Fundamental Vue is a UI framework based on [SAP Fundamental Styles](https://sap.github.io/fundamental-styles/) and [Vue.js](https://vuejs.org).

## Installation
You can install Fundamental Vue via **NPM** or by simply including it by using the `<script>`- and `<link>`-tags.

### Installation via **\<script\>** and **\<link\>**

In order to use Fundamental Vue you have to include three things in your `index.html` file:

1. Fundamental CSS styles
2. Vue
3. Fundamental Vue

Paste the following snippet in your `<head>`-tag:

```html
<link rel="stylesheet" href="https://unpkg.com/fundamental-styles@latest/dist/fundamental-styles.min.css">
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://unpkg.com/fundamental-vue/dist/FundamentalVue.umd.js"></script>
```

Then you can use Fundamental Vue like this:

```xhtml
<body>
  <div id="app" />
  <script>
    Vue.use(FundamentalVue);
    new Vue({
      el: '#app',
      template: `
        <FdPopover v-fd-margin:large>
          <h1 v-fd-margin:large slot="body">
            🚀 Hello Fundamental Vue 🚀
          </h1>
        </FdPopover>`
    });
  </script>
</body>
```

You should then see a button saying *🚀 Hello Fundamental Vue 🚀*. Clicking on it will display a popover.

If you are targeting IE 11 you have to include the IE-compatible build of Fundamental Styles:

```html
<link rel="stylesheet" type="text/css" href="https://unpkg.com/fundamental-styles@latest/dist/fundamental-styles-ie11.min.css">
```

### Install Fundamental Vue via **NPM**:

Fundamental Vue can also be installed via NPM which requires a few more steps but is also a bit more flexible.

```bash
npm install --save fundamental-vue
```

## Usage

After installing, you will need to import `fundamental-vue` and make it available to your Vue application. These instructions assume the usage of Vue CLI to scaffold your project.

In your project's `main.js`:

```
// ...
import FundamentalVue from 'fundamental-vue';
Vue.use(FundamentalVue);
// ...
```

Fundamental Vue does not include the ['SAP Fundamental Styles' library](https://sap.github.io/fundamental-styles/) which is required for styling.

## Install Fundamental Styles
The quickest way to get Fundamental Styles for your components is to include the compiled and minified Fundamental Styles CSS library with the following CDN link in your public `index.html` file:

```
<link rel="stylesheet" type="text/css" href="https://unpkg.com/fundamental-styles@1.4.3/dist/fundamental-styles.min.css">
```

However, installing the Fundamental Styles library with npm (recommended) will give you the flexibility to use individual components and enable advanced customisation options. In this case, you do not need the CDN link as this method uses the SASS/SCSS source.

To install the Fundamental Styles SASS/SCSS source:

```
$ npm install --save fundamental-styles
```

The following assumes the usage of a module bundler such as [webpack](https://webpack.js.org/). To compile Fundamental Styles SASS/SCSS to CSS, two additional packages are required for your bundling process - [sass-loader](https://github.com/webpack-contrib/sass-loader) and [node-sass](https://github.com/sass/node-sass). To install these packages as development dependencies:

```
$ npm install sass-loader node-sass --save-dev
```

Loading the SCSS and running your project at this point will result in errors relating to the path configuration for icons and fonts. This is a [known issue](https://github.com/SAP/fundamental-styles#known-issues).

To rectify this, start by creating a new directory ('scss') in your project's `src`. Within this directory, create a main SCSS file ('main.scss') from which to manage your imports, configurations and customisations.

Add the following to the main SCSS file:

```
$fd-icons-path : "../node_modules/fundamental-styles/scss/icons/"; // should be declared before the scss import

$fd-scss-font-path : "../node_modules/fundamental-styles/scss/fonts/";

@import "../node_modules/fundamental-styles/scss/all.scss";
```

Import the main SCSS file in your `App.js` style block to add Fundamental Styles to your project.

```
<style lang='scss'>
…
@import "./scss/main.scss";
…
</style>
```

To learn more about currently available components please go to the official [component documentation](https://sap.github.io/fundamental-vue).

To use a Fundamental Vue component, paste the desired code snippet from the [component documentation](https://sap.github.io/fundamental-vue) and configure it as necessarry:

```
<FdAlert dismissible>
      Happy building! 🚀
</FdAlert>
```
