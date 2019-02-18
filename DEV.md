# Fundamental Vue Development Guide

If you want to contribute to Fundamental Vue this document is for you. This guide describes how to build, edit, test, document and debug Fundamental Vue locally. We will start from _zero_ and describe each step of the way. Feel free to skip any steps you feel are not relevant to you.

## Installing _Yarn_ (required)

Fundamental Vue only works with [_Yarn_](https://yarnpkg.com/en/). Trying to work on Fundamental Vue using anything else (e.g.: NPM) will fail. The reason is that Fundamental Vue consists of several projects (_documentation_ app, the _component framework_, …) and to make things easy there are several scripts in our _package.json_-file which use _Yarn_ to execute scripts defined in those sub-projects.

---

:warning: **WARNING:** Fundamental Vue requires [_Yarn_](https://yarnpkg.com/en/) and does not work with NPM.

---

You should follow the **[official Yarn installation instructions](https://yarnpkg.com/en/docs/install)** in order to install Yarn.

## Getting the Code

Clone the _Fundamental Vue_ repository:

```shell
$ git clone git@github.com:SAP/fundamental-vue.git
```

## Bootstrapping

Bootstrapping _Fundamental Vue_ is required in the following situations:

- After cloning the repository.
- Every time the dependencies of any _Fundamental Vue_ project changes.

Bootstrapping never hurts. So if in doubt, just bootstrap the project.

```shell
$ cd fundamental-vue
$ yarn bootstrap
```

Bootstrapping _Fundamental Vue_ simply installs all the required dependencies of each sub-project.

## Project Structure

_Fundamental Vue_ consists of several sub-projects. After bootstrapping _Fundamental Vue_ the root directory should look something like this:

```
.
├── README.md
├── DEV.md (this guide)
├── Fundamental-Vue.code-workspace
├── package.json
├── node_modules/
├── …
├── ui/
│   ├── node_modules/
│   ├── src/
│   ├── …
│   └── package.json
├── docs/
│   ├── node_modules/
│   ├── src/
│   ├── …
│   └── package.json
├── server/
│   ├── node_modules/
│   ├── index.js
│   └── package.json
└── …
```

You will notice the three sub-projects:

- `ui`: _Fundamental Vue_ component library
- `docs`: _Fundamental Vue_ documentation app
- `server`: Development server

You can _cd_ into every project and use it independently. Alternatively you can _stay_ in the root directory and manage everything from there.

## Editing the Source Code

You can edit the source code using (almost) any editor. However, we highly recommend using [Visual Studio Code](https://visualstudio.microsoft.com/). If you are using [Visual Studio Code](https://visualstudio.microsoft.com/) you can simply use it top open the workspace file `Fundamental-Vue.code-workspace`.

## Serving the Documentation & Components

Let's assume you made a change to the source code. The next thing you probably want is to see your changes. The best way to see your change is to serve the documentation:

```shell
$ yarn serve
```

This simply command is doing a lot of things in the background. If you want the know the details you may look at the corresponding `script` in the `package.json` file. On a high level `yarn serve` is doing three things:

1. It continously builds the `ui`-project (in development mode)
2. It continously serves the _documentation_-app.
3. It starts the development server.

As a side effect, the linter will also run in the background and log any issue to the console.

While `yarn serve` is executing you can browse the documentation by going to [http://localhost:8080](http://localhost:8080).

## Executing tests

There are two `Yarn`-scripts related to testing.

**Execute all tests:**

```shell
$ yarn test
```

**Execute all tests and watch for changes:**

```shell
$ yarn test:watch
```

## Production Build

If you want to create a production build of _Fundamental Vue_ and the documentation simply execute:

```shell
$ yarn build
```

After a successful build you should see the artefacts in the `dist`-folder.

## Creating an NPM Package

Once you have a production build in your `dist`-folder simply execute

```shell
$ npm pack
```

This will create a tarball that can be used by _Yarn_ or _NPM_.
