module.exports = {
  env: {
    node: true,
    es6: true,
  },
  rules: {
    'avoid-jest-spy-on/avoid-jest-spyOn': 'warn',
  },
  plugins: ['avoid-jest-spy-on'],
};
