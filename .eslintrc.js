module.exports = {
  root: true,
  env: {
    node: true
  },
  rules: {
    "no-console": "error",
    "no-debugger": "error"
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
  ]
};
