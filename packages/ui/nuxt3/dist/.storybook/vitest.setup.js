import { setProjectAnnotations } from '@storybook/vue3-vite';
import { beforeAll } from 'vitest';
import * as previewAnnotations from './preview';
const annotations = setProjectAnnotations([previewAnnotations]);
// Run Storybook's beforeAll hook
beforeAll(annotations.beforeAll);
//# sourceMappingURL=vitest.setup.js.map