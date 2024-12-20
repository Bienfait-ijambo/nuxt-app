<script setup>

definePageMeta({
    layout:'default',
})
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

const postStore=usePostStore()
const { data } = await useAsyncData(()=>postStore.fetchData());

const layout='auth'
const user='admin'
const router=useRouter()
// onMounted(()=>{
//     if(user=='admin'){
//         router.push('/auth/login')
//     }
// })
</script>
<template>
  <div>
   <div class="mb-10">
    <h1>welcome to wizard engineer</h1>
   </div>

   <div>
      <h1 class="text-2xl text-indigo-500">Articles</h1>
      <Article :posts="data?.data"></Article>

   </div>

  </div>

  <!-- <NuxtLayout name="auth">
    <NuxtPage />
  </NuxtLayout> -->
  
</template>