import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import type { Linter } from 'eslint';
import prettierConfig from './prettier.config.js';

const config: Linter.FlatConfig[] = [
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      prettier,
      react,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // ✅ Prettier formatting
      'prettier/prettier': ['error', prettierConfig],

      // ✅ Custom preferences
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },
];

export default config;
