import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import nuxt from 'eslint-plugin-nuxt';
import vue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';

export default [
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.vue'],
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
    },
    plugins: {
      vue,
      nuxt,
    },
    rules: {
      ...vue.configs.base.rules,
      ...vue.configs['flat/recommended'].rules,
      ...nuxt.configs.recommended.rules,
      'vue/comment-directive': 'off',
      'vue/multi-word-component-names': 'warn',
      'vue/no-v-html': 'error',
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'vue/component-options-name-casing': ['error', 'PascalCase'],
      'vue/custom-event-name-casing': ['error', 'camelCase'],
    },
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
    },
  },
  {
    ignores: [
      '.DS_Store',
      '.idea',
      '.output',
      '.storybook',
      '.vscode',
      '*.cache',
      '*.env',
      '*.log',
      '**/.nuxt/**',
      '**/.output/**',
      '**/build/**',
      '**/coverage/**',
      '**/cypress/**',
      '**/dist/**',
      '**/e2e/**',
      '**/node_modules/**',
      '**/playwright/**',
      '**/test/**',
      'coverage',
      'dist',
      'node_modules',
    ],
  },
];
