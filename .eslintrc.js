module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    'prettier/prettier': 'error'
  }
}
