import { defineNuxtPlugin } from 'nuxt/app';
import { useToast } from '../composables/useToast';
export default defineNuxtPlugin(() => {
    const { add } = useToast();
    return {
        provide: {
            toast: {
                destructive: (options) => {
                    add({ ...options, variant: 'destructive' });
                },
                info: (options) => {
                    add({ ...options, variant: 'info' });
                },
                success: (options) => {
                    add({ ...options, variant: 'success' });
                },
                warning: (options) => {
                    add({ ...options, variant: 'warning' });
                },
            },
        },
    };
});
//# sourceMappingURL=plugin.js.map