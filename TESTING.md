# Testing

Fundamental Vue is tested using [Chai](https://www.chaijs.com/), [Mocha](https://mochajs.org/) and [Vue Test Utils](https://github.com/vuejs/vue-test-utils).

## Executing Tests

Tests are executed by running:

```shell
$ npm test
```

By running

```shell
npm run test:watch
```

you make [Mocha](https://mochajs.org/) continuously execute tests. This is great when you prefer test driven development.

## Writing a new Test

`npm test` will execute tests matching the pattern: `src/**/__tests__/*.test.{tsx,ts,js,vue}`. In order to create a test make sure that your test is in a directory called `__tests__` and has a matching extension.

A simple component test might look something like this:

```javascript
import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import { Button } from '../Button';

describe('Button', () => {
  it('renders default slot when passed', () => {
    const title = 'Button Title';
    const wrapper = shallowMount(Button, {
      slots: {
        default: title,
      },
    });
    expect(wrapper.text()).to.include(title);
  });
});
```


## Guidelines

Consider the following guidelines when writing new tests:

- Test the core (e.g.: stateless algorithms, utility functions, helper classes) first: Testing those kind of things usually has the highest payoff: Easy to write and heavily used.
- Each non-trivial component should have at least one test. Using [Vue Test Utils](https://github.com/vuejs/vue-test-utils) is a good idea.
- Component tests should be general and not test implementation details. Again: Using [Vue Test Utils](https://github.com/vuejs/vue-test-utils) helps to accomplish that goal.

## Current State & Going forward

There are not a lot of tests at the time of writing. Fundamental Vue started as a *hobby project* and thus  testing wasn't on the top of the list early on.

Pretty soon new code will require a certain test coverage. We will also add tests for existing components/code over the next couple of weeks. The *Boy Scout Rule*

> Leave your code better than you found it.

will be *enforced* at some point in the near future.

