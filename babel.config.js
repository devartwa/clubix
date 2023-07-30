module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@types': './src/@types',
          '@assets': './src/assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@screens': './src/screens',
          '@services': './src/services',
          '@storage': './src/storage',
          '@styles': './src/styles',
          '@utils': './src/utils',
        },
      },
    ],
    ['react-native-reanimated/plugin'],
  ],
};
