const nodeEnv = process.env.NODE_ENV;
const targetsNetlify = process.argv[4] === "--NETLIFY";
const mode =
  nodeEnv !== "production" ? "dev" : targetsNetlify ? "netlify" : "prod";
const appPresets = ["@vue/app"];
if (process.env.VUE_CLI_BUILD_TARGET === "app") {
  module.exports = {
    presets: ["@vue/app"]
  };
  return;
}

const uiPresets = [
  [
    "@vue/app",
    {
      useBuiltIns: false,
      polyfills: false,
      corejs: 2
    }
  ]
];

const presets = mode === "prod" ? uiPresets : appPresets;

module.exports = {
  presets,
  plugins: ["@babel/plugin-syntax-dynamic-import"]
};
