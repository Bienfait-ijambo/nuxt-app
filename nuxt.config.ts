// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  icon: {
    size: '20px', // default <Icon> size applied
    class: 'icon', // default <Icon> class applied
    mode: 'css', // default <Icon> mode applied
    aliases: {
      'nuxt': 'logos:nuxt-icon',
    }
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  // nitro: {
  //   experimental: {
  //     database: true
  //   },
  //   database: {
  //     default: {
  //       connector: 'sqlite',
  //       options: { name: 'db' }
  //     },
  //     users: {
  //       connector: 'postgresql',
  //       url: process.env.DATABASE_URL
  //     }
  //   }
  // },
  
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxt/icon']
  // 
})


// TO LEARN IN nuxtjs
// - handling errors
// - use cookies