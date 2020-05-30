module.exports = {
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  extends: ['prettier'],
  plugins: ['prettier', 'markdown'],
  rules: {
    'prettier/prettier': 'error',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser', // Specifies the ESLint parser
      extends: [
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
      ],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
      },
    },
    {
      files: ['*.js', '*.jsx'],
    },
    {
      // to lint code in markdown
      files: ['*.md'],
      processor: 'markdown/markdown',
      extends: ['eslint:recommended'],
      rules: {
        // ...
      },
    },
    {
      // optionally, customize the configuration ESLint uses for ```js
      // fenced code blocks inside .md files.
      files: ['**/*.md/*.js'],
      // ...
      rules: {
        // ...
      },
    },
  ],
};
