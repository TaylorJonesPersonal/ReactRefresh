const { off } = require('process');

module.exports = {
    extends: ['standard-with-typescript', 'prettier'],
    parserOptions: {
      project: './tsconfig.json',
    },
    rules: {
      "@typescript-eslint/restrict-template-expressions": "off",
    }
  };