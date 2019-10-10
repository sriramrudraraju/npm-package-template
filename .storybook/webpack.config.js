module.exports = ({ config }) => {
  /**
   * sourceType config might change in future,
   * issue: https://github.com/storybookjs/storybook/issues/3346
   */
  config.module.rules[0].use[0].options.sourceType = "unambiguous";
  
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]],
    },
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
