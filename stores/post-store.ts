import { defineStore } from "pinia";


export  const usePostStore=defineStore('post-store',()=>{

    const posts=ref([
        {
            title:'title-1',
            post_content:'content-1',
        },
        {
            title:'title-1',
            post_content:'content-1',
        }
    ])

    async function fetchData() {
        return await $fetch(`http://localhost:8000/api/posts`);
      }
      async function singlePost(slug:string) {
        return await $fetch(`http://localhost:8000/api/posts/${slug}`);
      }

    return{posts,fetchData,singlePost}
})