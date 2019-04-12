const nodeEnv = process.env.NODE_ENV;
const targetsNetlify = process.argv[4] === "--NETLIFY";
const mode =
  nodeEnv !== "production" ? "dev" : targetsNetlify ? "netlify" : "prod";
const appPresets = ["@vue/app"];
const prodPresets = [
  [
    "@babel/env",
    {
      useBuiltIns: false,
      modules: false,
      targets: ["> 1%", "last 2 versions", "not ie <= 8"]
    }
  ]
];
const presets = mode === "prod" ? prodPresets : appPresets;
module.exports = {
  presets
};
