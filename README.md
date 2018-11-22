# fundamental-vue
Vue.JS components for [SAP Fiori Fundamentals](https://github.com/SAP/fundamental)


## Description
Fundamental-vue is a set of [Vue.js](https://vuejs.org/) components implementation of [SAP Fiori Fundamentals library](https://sap.github.io/fundamental/). SAP Fiori Fundamentals library is a Design System and HTML/CSS Component Library used to build modern Product User Experiences with the SAP look and feel. This will allow you to stay/use Vue.js for your application and get SAP look and feel.
Fundamental-vue is open for contribution as long as you follow certain [rules/guidelines](./CONTRIBUTING.md).



## [Playground](https://dist-4d2gqwr8y.now.sh)


## Serve Documentation
```
$ npm run serve:docs
```

## Build Documentation
```
$ ./scripts/build
$ npm run build -- src/docs/DocsMain.ts
```

## Build
```
$ ./scripts/build
$ npm pack
```

## Deploy Documentation
The `deploy-docs`-script currently deploys the documentation app to [now.sh](https://now.sh). It assumes that you have a [now.sh](https://now.sh)-account and that you are logged in.

```
$ ./scripts/deploy-docs
```

## Install

**This does not work yet**

```
$ npm i --save fundamentalvue
```

fundamentalvue does not include Fiorie Elements. You have to make sure to include the css/scss files yourself.

## Use

**This does not work yet**

```
// ...
import FundamentalVue  from 'fundamentalvue';
Vue.use(FundamentalVue);
// ...
```

## Known Issues

Click [here](https://github.com/SAP/fundamental-vue/issues) to view the current issues.

## How to obtain support

If you encounter an issue, you can [create a ticket](https://github.com/SAP/fundamental-vue/issues/new)


## Contributing

If you want to contribute, please check the [CONTRIBUTING.md](./CONTRIBUTING.md) documentation for contribution guidelines.

## License

Copyright (c) 2018 SAP SE or an SAP affiliate company. All rights reserved.
This file is licensed under the Apache Software License, v. 2 except as noted otherwise in the [LICENSE file](https://github.com/SAP/fundamental-vue/blob/master/LICENSE.txt)
