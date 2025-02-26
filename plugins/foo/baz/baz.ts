export default defineNuxtPlugin(() => {

    return {
        provide:{
            baz:(message:string) =>'Baz :'+message
        }
    }

  })