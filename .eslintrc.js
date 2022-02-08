module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'comma-dangle': 0,
    'no-shadow': 0,
    'import/prefer-default-export': 0,
<<<<<<< HEAD
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
=======
>>>>>>> 7fc48e8 (Feat: Sidebar 컴포넌트 추가)
  },
};
