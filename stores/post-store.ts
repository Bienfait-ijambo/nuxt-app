
import {ref} from "vue"
import {defineStore} from 'pinia'
export const usePostStore=defineStore('post-store',()=>{

    const edit=ref(false)

   
      
    return {
        edit,
    

    }

})