export default defineNuxtPlugin({
    name: 'hello',
    parallel: true,
    async setup (nuxtApp) {
      // the next plugin will be executed immediately
      nuxtApp.provide('hello', () =>'hello world' )
    }
  })
  