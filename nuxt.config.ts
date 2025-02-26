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


  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt']


})


