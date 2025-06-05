import { addComponent, createResolver, defineNuxtModule, installModule } from '@nuxt/kit';

export default defineNuxtModule({
  meta: {
    name: '@anggiedimasta/ui-nuxt3',
    configKey: 'ui-nuxt3',
  },
  async setup(_options, nuxt) {
    const resolver = createResolver(import.meta.url);

    // It will add @nuxtjs/tailwindcss to the project
    await installModule('@nuxtjs/tailwindcss', {
      /**
       * Here, you specify where your config is.
       * By default, the module have a configPath relative
       * to the current path, ie the playground !
       * (or the app using your module)
       */
      cssPath: resolver.resolve('./tailwind.css'),
      configPath: resolver.resolve('../tailwind.config'),
    });

    // Register components at build time
    addComponent({
      name: 'AButton',
      filePath: resolver.resolve('./components/button/Button.vue'),
    });

    addComponent({
      name: 'AToast',
      filePath: resolver.resolve('./components/toast/Toast.vue'),
    });

    addComponent({
      name: 'AToastProvider',
      filePath: resolver.resolve('./components/toast/ToastProvider.vue'),
      global: true,
    });

    // Add composables directory
    nuxt.hook('imports:dirs', (dirs) => {
      dirs.push(resolver.resolve('./composables'));
    });
  },
});
