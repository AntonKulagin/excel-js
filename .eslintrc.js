module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      configFile: './babel.config.json',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'google'],
  rules: {
    'linebreak-style': 'off',
    semi: ['error', 'never'],
    'quote-props': 0,
    'require-jsdoc': 'off',
    'object-curly-spacing': ['error', 'always'],
    'max-len': ['error', { code: 120 }],
    'eol-last': 'off',
    'no-debugger': 'off',
    'no-unused-vars': 'off',
    indent: ['error', 2, { MemberExpression: 1 }],
  },
  settings: {
    'import/resolver': 'webpack',
  },
}
