module.exports = function(api) {
  api.cache(true);
  
  return {
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react",
      // ["@emotion/babel-preset-css-prop", { "labelFormat": "[filename]" }]
    ],
    "plugins": ["@babel/plugin-proposal-optional-chaining"]
  }
};
 