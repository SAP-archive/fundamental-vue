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
import Vue from 'vue';

declare module 'vue/types/vue' {
  // Uncomment the following line once the interface blow contains anything.
  // tslint:disable-next-line:no-empty-interface
  interface Vue {
    // This is where global plugin augmentations go. For example:
    // $myProp: string;
    // You access $myProp like this:
    // new Vue().$myProp
  }

  // Uncomment the following line once the interface blow contains anything.
  // tslint:disable-next-line:no-empty-interface
  interface VueConstructor {
    // This is where global properties should be declared. For example:
    // $myGlobal: string;
    // You access $myGlobal like this:
    // Vue.$myGlobal
  }
}
