export default defineNuxtPlugin(() => {

    return {
        provide:{
            foo:(message:string) =>'Foo :'+message
        }
    }

  })