# Plugin
*Fundamental Vue* can be installed as a whole by using the [standard plugin-mechanism](https://vuejs.org/v2/guide/plugins.html):

```js
import FundamentalVue from 'fundamental-vue'
import Vue from 'vue'

Vue.use(FundamentalVue, /* optional options */)
```

## Plugin Options
The *Vue plugin* exposed by *Fundamental Vue* can be configured by using the following options:

### `log`-Option
Allows you to configure the things that are logged by Fundamental Vue.

- **Type:** `Object`
- **Default:**

```js
{
  welcome: false,
  registerComponent: false
}
```

#### `log.welcome`
If `true`, *Fundamental Vue* will log a welcome message (including version information) at install time.

#### `log.registerComponent`
If `true`, *Fundamental Vue* will log the name of each registered component.

### `defaultPortalId`-Option
Allows you to set the `id` of the element that will host all portals created by Fundamental Vue.
