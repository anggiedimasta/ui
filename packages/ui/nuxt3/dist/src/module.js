import { addComponent, createResolver, defineNuxtModule } from '@nuxt/kit';
export default defineNuxtModule({
    meta: {
        name: '@anggiedimasta/ui-nuxt3',
        configKey: 'ui-nuxt3',
    },
    setup(_options, nuxt) {
        const resolver = createResolver(import.meta.url);
        // Register components at build time
        addComponent({
            name: 'AButton',
            filePath: resolver.resolve('./components/button/AButton.vue'),
        });
        addComponent({
            name: 'AToast',
            filePath: resolver.resolve('./components/toast/AToast.vue'),
        });
        addComponent({
            name: 'AToastProvider',
            filePath: resolver.resolve('./components/toast/AToastProvider.vue'),
            global: true,
        });
        // Add composables directory
        nuxt.hook('imports:dirs', (dirs) => {
            dirs.push(resolver.resolve('./composables'));
        });
    },
});
//# sourceMappingURL=module.js.map