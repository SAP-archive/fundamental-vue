module.exports = {
  root: true,

  env: {
    node: true
  },

  rules: {
    "no-console": "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },

  parserOptions: {
    parser: "@typescript-eslint/parser"
  },

  extends: ["plugin:vue/essential", "@vue/prettier", "@vue/typescript"]
};
