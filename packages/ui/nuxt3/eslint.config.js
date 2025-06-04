import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import nuxt from 'eslint-plugin-nuxt';
import vue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import base from '../../../eslint.config.js';

export default [
  ...base,
  ...vue.configs['flat/recommended'],
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {},
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.vue'],
        project: ['./tsconfig.json'],
        tsconfigRootDir: '.',
        sourceType: 'module',
      },
    },
    plugins: { vue, nuxt },
    rules: {
      ...nuxt.configs.recommended.rules,
      'vue/comment-directive': 'off',
      'vue/max-attributes-per-line': [
        'warn',
        {
          singleline: {
            max: 3,
          },
          multiline: {
            max: 1,
          },
        },
      ],
    },
  },
];
