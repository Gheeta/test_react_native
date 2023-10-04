module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.tsx', '.ts', '.js', '.json'],
        relativeSourceLocation: true,
      },
      '@babel/plugin-proposal-private-property-in-object',
    ],
    'react-native-reanimated/plugin',
  ],
};
