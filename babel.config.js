const presets = [
  [
    '@babel/preset-env',
    {
      targets: {
        node: '6.9',
      },
    },
  ],
  '@babel/typescript',
];
const plugins = ['@babel/proposal-class-properties'];

const env = process.env.BABEL_ENV || process.env.NODE_ENV;

if (env && env === 'production') {
  plugins.push(['transform-remove-console', { exclude: ['error', 'warn'] }]);
}

module.exports = {
  presets,
  plugins,
};
