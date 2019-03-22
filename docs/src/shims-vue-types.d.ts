// We have to import Vue here even though we are not using it in this file.
// Without importing Vue type augmentations which are possibly declared below
// do not work. This is why we ignore TS6133 (unused import warning).
//
// See also:
// https://vuejs.org/v2/guide/typescript.html#Augmenting-Types-for-Use-with-Plugins
//
// Quote from the link above:
// > 1. Make sure to import 'vue' before declaring augmented types
//
// @ts-ignore TS6133
import Vue from "vue";
// eslint-ignore
import DocumentationLoader from "./DocumentationLoader";

declare module "vue/types/vue" {
  // Uncomment the following line once the interface blow contains anything.
  // tslint:disable-next-line:no-empty-interface
  interface Vue {
    $docLoader: DocumentationLoader;

    // You access $myProp like this:
    // new Vue().$myProp
  }

  // Uncomment the following line once the interface blow contains anything.
  // tslint:disable-next-line:no-empty-interface
  interface VueConstructor {
    // $myGlobal:any;
    // This is where global properties should be declared. For example:
    // You access $myGlobal like this:
    // Vue.$myGlobal
  }
}
