<script setup>
definePageMeta({
    layout:'default',
})
const route=useRoute()
const slug=route.params?.slug 
const postStore=usePostStore()
// const data=await postStore.singlePost(slug)
const { data,status } = await useAsyncData(()=>postStore.singlePost(slug));



onMounted(()=>{
    console.log(data.value.length)
   
    if (data.value.length===0) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    // fatal:true
  })
}
})
</script>
<template>
   <div>
    
 
    <div>
       <h1 class="text-2xl pl-2 text-indigo-500 mb-10">Articles- {{ slug }}</h1>
       {{ data.length }}
       <!-- articles -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 p-2">
         <!-- <div class="bg-white rounded-md shadow-md p-2">
             <h1 class="text-2xl mb-2">Article title</h1>
             <p class="mb-2">
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam dicta sapiente saepe obcaecati deserunt numquam minima cumque voluptas quam, porro iure cupiditate provident sit quos, facilis debitis. Adipisci, provident velit?
             </p>
             <a class="text-indigo-500" href="http://" >Read more</a>
         </div>
          -->
        </div>
       <!-- articles -->
 
    </div>
 
   </div>
   
 </template>