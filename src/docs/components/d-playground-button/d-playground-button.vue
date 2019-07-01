<template>
  <form action="https://codesandbox.io/api/v1/sandboxes/define?json" method="POST" target="_blank">
    <input type="hidden" name="parameters" :value="parameters" />
    <d-toolbar-item type="submit" icon="play">Run</d-toolbar-item>
  </form>
</template>

<script>
/* eslint-env node */

import { getParameters } from "codesandbox/lib/api/define";
import DToolbarItem from "./../d-example/d-toolbar-item.vue";

const getTemplatePackageJson = () => require("./_package.json");
const templatePackageJson = getTemplatePackageJson();

const ownPackage = require("./../../../../package.json");
const FundamentalVueVersion = `^${ownPackage.version}`;
templatePackageJson.dependencies["fundamental-vue"] = FundamentalVueVersion;

const getFundamentalStylesVersion = () => {
  const rawVersion = ownPackage.peerDependencies["fundamental-styles"];
  if (rawVersion.startsWith("^")) {
    return rawVersion.substring(1);
  } else {
    return rawVersion;
  }
};
const FundamentalStylesVersion = getFundamentalStylesVersion();

export default {
  components: { DToolbarItem },
  props: {
    code: {
      type: String,
      required: true
    }
  },
  computed: {
    exampleVueCode() {
      return this.code;
    },
    parameters() {
      return getParameters(this.rawParameters);
    },
    rawParameters() {
      return {
        files: {
          "package.json": {
            content: templatePackageJson
          },
          "src/main.js": {
            content: this.mainJs
          },
          "src/example.vue": {
            content: this.code
          },
          "public/index.html": {
            content: this.indexHtml
          }
        }
      };
    },
    mainJs() {
      return `import Vue from "vue";
import Example from "./example.vue";
import FundamentalVue from "fundamental-vue";
Vue.config.productionTip = false;
Vue.use(FundamentalVue)
new Vue({
  render: h => h(Example)
}).$mount("#app");
`;
    },
    indexHtml() {
      return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="stylesheet" href="https://unpkg.com/fundamental-styles@${FundamentalStylesVersion}/dist/fundamental-styles.min.css">
    <title>codesandbox</title>
  </head>
  <body>
    <noscript>
      <strong>We're sorry but codesandbox doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>`;
    }
  }
};
</script>
