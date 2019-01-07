<p style="margin-top: 0;" align="center">
      <a href="https://github.com/SAP/fundamental-vue" target="_blank" rel="noopener noreferrer">
            <img style="border: 0; margin: 0;" srcset="./../../../images/logo_big.png 1x, ./../../../images/logo_big@2x.png 2x" src="./../../../public/images/logo_big.png" alt="Fundamental Vue logo">
      </a>
</p>


> SAP Fundamental Vue is a UI framework based on [SAP Fiori Fundamentals](https://sap.github.io/fundamental/) and [Vue.js](htts://vuejs.org).

## Installation
Install Fundamental Vue via **NPM**:

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

Fundamental Vue does not include the ['Fiori Fundamentals' library](https://github.com/SAP/fundamental) which is required for styling.

## Install Fiori Fundamentals
The quickest way to get Fiori Fundamentals styling for your components is  to include the compiled and minified Fiori Fundamentals CSS library with the following CDN link in your public `index.html` file:
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

You can now use the [Playground](https://dist-lg4xtfik7.now.sh) to browse the components currently available with Fundamental Vue.

To use a Fundamental Vue component, paste the desired code snippet from the Playground and configure it as necessarry:

```
...
<FdAlert dismissible>
      Happy building! 🚀
</FdAlert>
...
```
