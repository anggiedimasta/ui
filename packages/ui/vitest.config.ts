import path from 'path';
import { fileURLToPath } from 'url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { storybookVuePlugin } from '@storybook/vue3-vite/vite-plugin';
import { defineConfig, mergeConfig } from 'vitest/config';

import viteConfig from './vite.config';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default mergeConfig(
  viteConfig,
  defineConfig({
    plugins: [
      storybookTest({
        // The location of your Storybook config, main.js|ts
        configDir: path.join(dirname, '.storybook'),
        // This should match your package.json script to run Storybook
        // The --ci flag will skip prompts and not open a browser
        storybookScript: 'pnpm storybook --ci',
      }),
      storybookVuePlugin(),
    ],
    test: {
      // Enable browser mode
      browser: {
        enabled: true,
        // Make sure to install Playwright
        provider: 'playwright',
        headless: true,
        instances: [{ browser: 'chromium' }],
      },
      setupFiles: ['./.storybook/vitest.setup.ts'],
      coverage: {
        provider: 'v8',
        reporter: ['text', 'json', 'html'],
        include: [
          'src/**/*.{js,ts,vue}',
          '!src/**/*.stories.{js,ts}',
          '!src/**/*.test.{js,ts}',
          '!src/**/*.spec.{js,ts}',
        ],
        exclude: [
          'node_modules/',
          'dist/',
          'tests/',
          '**/*.config.{js,ts}',
          '.storybook/',
          'src/index.ts',
        ],
      },
    },
  }),
);
