import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
const require = createRequire(import.meta.url);
function getAbsolutePath(value) {
    return dirname(require.resolve(join(value, 'package.json')));
}
const config = {
    stories: ['../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        getAbsolutePath('@storybook/addon-docs'),
        getAbsolutePath('@storybook/addon-a11y'),
        getAbsolutePath('@storybook/addon-vitest'),
    ],
    framework: {
        name: getAbsolutePath('@storybook/vue3-vite'),
        options: {},
    },
};
export default config;
//# sourceMappingURL=main.js.map