module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      "babel-preset-expo",
      '@babel/preset-react'
      // ["babel-preset-expo", {targets: {node: 'current'}}],
      // ['@babel/preset-react', {targets: {node: 'current'}}] // add this
    ],  
    plugins: [
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-reanimated/plugin",
      require.resolve("expo-router/babel"),
    ],
  };
};
