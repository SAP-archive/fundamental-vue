module.exports = {
  root: true,
  env: {
    node: true
  },
  rules: {
    "max-len": "off",
    "no-console": "error",
    "no-debugger": "error",
    "getter-return": ["error", { allowImplicit: true }]
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
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
