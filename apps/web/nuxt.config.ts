// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@anggiedimasta/ui/styles.css',
    '~/assets/css/main.css'
  ],
  modules: ['@nuxtjs/tailwindcss'],
  build: {
    transpile: ['@anggiedimasta/ui']
  },
  vite: {
    build: {
      rollupOptions: {
        external: ['@anggiedimasta/ui/styles.css']
      }
    }
  },
  app: {
    head: {
      title: '@anggiedimasta/ui - Vue 3 UI Component Library',
      meta: [
        { name: 'description', content: 'A modern Vue 3 UI component library built with TypeScript and Tailwind CSS' }
      ]
    }
  },
})