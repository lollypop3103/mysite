module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  plugins: ['vue', 'markdown', 'gridsome'],
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:gridsome/recommended',
    '@vue/prettier',
    '@vue/typescript',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 2018,
  },
};
