// Tell typescript to not complain when importing '*.json' | '*.md' | '*.vue'
// files.

declare module '*.json' {}
declare module '*.md' {}
declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}
