const mode = process.env.NODE_ENV;
const isNotProduction = mode !== "production";
const devPresets = ["@vue/app"];
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
const presets = isNotProduction ? devPresets : prodPresets;
module.exports = {
  presets
};
