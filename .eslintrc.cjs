module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended', 'plugin:storybook/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    camelcase: [
      'error',
      {
        properties: 'always',
      },
    ],
    'no-console': 'error',
    'no-return-await': 'error',
    'max-lines': [
      'warn',
      {
        max: 300,
        skipBlankLines: true,
      },
    ],
  },
};
