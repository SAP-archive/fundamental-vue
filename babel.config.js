module.exports = {
  "presets": [
    ["@vue/app", {
      //  "useBuiltIns": false
       }],
    [
      "@babel/preset-env",
      {
        // "useBuiltIns": false,
        targets: "> 1%, last 2 versions, not ie <= 8",

      }
    ]
  ],
};

// {

//   presets: [
//     ["@vue/app", { polyfills: [] }],
//     ["@vue/babel-preset-app", { useBuiltIns: false, polyfills: [] }]
//   ]
//   // presets: ["@vue/app"],
// };
