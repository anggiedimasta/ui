import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import type { UserConfig } from 'vite';

const config: UserConfig = defineConfig({
  plugins: [vue()],
});

export default config;
