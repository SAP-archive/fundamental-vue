module.exports = {
  root: true,
  env: {
    node: true
  },
  rules: {
    "no-console": "error",
    "no-debugger": "error"
  },
  parserOptions: {
    parser: "@typescript-eslint/parser"
  },
  extends: ["plugin:vue/essential", "@vue/prettier", "@vue/typescript"]
};
