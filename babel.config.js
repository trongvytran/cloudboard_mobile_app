module.exports = function (api) {
  api.cache(true)
  return {
    plugins: ['nativewind/babel','react-native-reanimated/plugin'],
    presets: ['babel-preset-expo','module:metro-react-native-babel-preset']
  }
}
