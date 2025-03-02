// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  plugins: [
    '~/plugins/foo/foo',
    '~/plugins/foo/baz/baz',
  ],


  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL,
      API_BASE_URL: process.env.API_BASE_URL,

    }
  },
  
  build: {
    transpile: ["laravel-vue-pagination"]
  },
  alias: {
    'laravel-vue-pagination': 'laravel-vue-pagination/dist/laravel-vue-pagination.es.js'
  },
  


  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt']


})


