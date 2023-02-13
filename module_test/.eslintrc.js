module.exports = {
  env: {
    node: true,
    es6: true,
  },
  rules: {
    'jest-no-spyOn/avoid-jest-spyOn': 'error',
  },
  plugins: ['jest-no-spyOn'],
};
