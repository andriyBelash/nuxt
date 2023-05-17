// https://nuxt.com/docs/api/configuration/nuxt-config



export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  css: ['@/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_variables.scss" as *;'
        }
      }
    }
  },
  modules: [
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],
  buildModules: ['@pinia/nuxt'],
  runtimeConfig: {
    public: {
      baseURL: 'https://jsonplaceholder.typicode.com/',
    },
  },

})
