// @ts-check
import toPascalCase from './../util/to-pascal-case'

export class Examples {
  constructor() {
    this.importExample = require.context('./', true, /\.vue$/, 'lazy')
    this.importExampleSrc = require.context('./?asSrc=true', true, /\.vue$/, 'lazy')
  }

  routes() {
    const keys = this.importExample.keys()
    return keys.map(key => {
      // key looks like
      // './action-bar/0-full.vue'
      // or
      // './layout/action-bar/0-full.vue'
      const path = this.pathForKey(key)
      const component = async () => this.importExample(key)
      return {
        path,
        component,
        meta: {
          layout: 'fullscreen'
        }
      }
    })
  }

  componentNameForKey(key) {
    // key looks like
    // './action-bar/0-full.vue'
    // or
    // './layout/action-bar/0-full.vue'
    return toPascalCase(
      `example-${key
        .substring(2)
        .replace('.vue', '')
        .split('/')
        .join('-')}`
    )
  }

  pathForKey(key) {
    // key looks like
    // './action-bar/0-full.vue'
    // or
    // './layout/action-bar/0-full.vue'
    return `/example/${key.substring(2).replace('.vue', '')}`
  }

  registerExampleComponents(vue) {
    const keys = this.importExample.keys()
    keys.forEach(key => {
      // key looks like
      // './action-bar/0-full.vue'
      // or
      // './layout/action-bar/0-full.vue'
      const name = this.componentNameForKey(key)
      const asyncExample = async () => this.importExample(key)
      vue.component(name, asyncExample)
    })
  }

  registerExampleSrcComponents(vue) {
    const keys = this.importExampleSrc.keys()
    keys.forEach(key => {
      // key looks like './action-bar/0-full.vue'
      const name = toPascalCase(
        `example-src-${key
          .substring(2)
          .replace('.vue', '')
          .split('/')
          .join('-')}`
      )
      const asyncExample = async () => this.importExampleSrc(key)
      vue.component(name, asyncExample)
    })
  }
  install(vue) {
    this.registerExampleComponents(vue)
    this.registerExampleSrcComponents(vue)
  }
}

export default {
  install: vue => {
    new Examples().install(vue)
  }
}
