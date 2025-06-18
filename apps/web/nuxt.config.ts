// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css'
  ],
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: '@anggiedimasta/ui - Vue 3 UI Component Library',
      meta: [
        { name: 'description', content: 'A modern Vue 3 UI component library built with TypeScript and Tailwind CSS' }
      ]
    }
  },
})