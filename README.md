# fundamental-vue
Vue.JS components for [SAP Fiori Fundamentals](https://github.com/SAP/fundamental)

- [Playground](https://dist-5sywc49rb.now.sh)
- [GitHub repo of Angular implementation of SAP Fiori Fundamentals](https://github.com/SAP/fundamental-ngx)
- [GitHub repo of React implementation of SAP Fiori Fundamentals](https://github.com/SAP/fundamental-react)


## Description
Fundamental-vue is a set of [Vue.js](https://vuejs.org/) components implementation of [SAP Fiori Fundamentals library](https://sap.github.io/fundamental/).
SAP Fiori Fundamentals library is a Design System and HTML/CSS Component Library used to build modern Product User Experiences with the SAP look and feel. This will allow you to stay/use Vue.js for your application and get SAP look and feel.
Fundamental-vue is open for contribution as long as you follow certain [rules/guidelines](./CONTRIBUTING.md).

The library is currently in a Beta version and it is under development. The progress can be seen [here](https://github.com/SAP/fundamental-vue/projects/1)

## Requirements

To download and use Fundamental-react library, you first need to install the node package manager.
https://www.npmjs.com/get-npm

Some prior knowledge of Vue is required for using this library.

## Build the library
```
$ ./scripts/build
$ npm pack
```

## Install

```
$ npm i --save fundamental-vue
```

You have to make sure to include the Fiori Fundamentals css/scss files yourself.

## Use

```
// ...
import FundamentalVue  from 'fundamental-vue';
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
