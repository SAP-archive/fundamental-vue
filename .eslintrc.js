module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true
  },
  rules: {
    "max-len": "off",
    "no-console": "error",
    "no-debugger": "error",
    "getter-return": ["error", { allowImplicit: true }],
    "sort-imports": ["error", { ignoreDeclarationSort: true }]
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  overrides: [
    {
      files: ["**/__tests__/*.test.js"],
      env: {
        jest: true
      }
    }

  ],
  extends: ["plugin:vue/essential", "@vue/prettier"]
};
