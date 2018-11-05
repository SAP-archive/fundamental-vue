# fundamental-vue
Vue.JS components for [SAP Fiori Fundamentals](https://github.com/SAP/fundamental)

## Description
Fundamental-vue is a set of [Vue.js](https://vuejs.org/) components implementation of [SAP Fiori Fundamentals library](https://sap.github.io/fundamental/). SAP Fiori Fundamentals library is a Design System and HTML/CSS Component Library used to build modern Product User Experiences with the SAP look and feel. This will allow you to stay/use Vue.js for your application and get SAP look and feel.
Fundamental-vue is open for contribution as long as you follow certain [rules/guidelines](./CONTRIBUTING.md).


## [Playground](https://dist-oxqhsgierl.now.sh/#/start)

## Serve Documentation
```
$ npm run serve:docs
```

## Build Documentation
```
$ ./scripts/build.sh
$ npm run build -- src/docs/DocsMain.ts
```

## Build
```
$ ./scripts/build.sh
$ npm pack
```

## Install
```
$ npm i --save fundamentalvue
```

fundamentalvue does not include Fiorie Elements. You have to make sure to include the css/scss files yourself.

## Use

```
// ...
import FundamentalVue  from 'fundamentalvue';
Vue.use(FundamentalVue);
// ...
```


## How to obtain support

If you encounter an issue, you can [create a ticket](https://github.wdf.sap.corp/hybris-pd/fundamental-vue/issues)

## Contributing

If you want to contribute, please check the [CONTRIBUTING.md](./CONTRIBUTING.md) documentation for contribution guidelines.

## License

Copyright (c) 2018 SAP SE or an SAP affiliate company. All rights reserved.
This file is licensed under the Apache Software License, v. 2 except as noted otherwise in the [LICENSE file](https://github.com/SAP/fundamental-react/blob/master/LICENSE.txt)
