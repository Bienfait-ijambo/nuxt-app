<script setup>


definePageMeta({
    layout:'default',
})

const postStore=usePostStore()
const { data,status } = await useAsyncData(()=>postStore.fetchData());
const counter = useState('counter')
</script>
<template>
    
  <div>
    <template v-if="showHeader">
      <h1>Custom Header for This Page - </h1>
    </template>

   

   <div>
      <h1 class="text-2xl pl-2 text-indigo-500 mb-10">Articles - {{counter}} </h1>
     
      <Article  :posts="data?.data"></Article>
      <!-- articles -->
       <!-- <div class="grid grid-cols-1 md:grid-cols-3 gap-2 p-2">
        <div class="bg-white rounded-md shadow-md p-2">
            <h1 class="text-2xl mb-2">Article title</h1>
            <p class="mb-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam dicta sapiente saepe obcaecati deserunt numquam minima cumque voluptas quam, porro iure cupiditate provident sit quos, facilis debitis. Adipisci, provident velit?
            </p>
            <a class="text-indigo-500" href="http://" >Read more</a>
        </div>
        <div class="bg-white rounded-md shadow-md p-2">
            <h1 class="text-2xl mb-2">Article title</h1>
            <p class="mb-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam dicta sapiente saepe obcaecati deserunt numquam minima cumque voluptas quam, porro iure cupiditate provident sit quos, facilis debitis. Adipisci, provident velit?
            </p>
            <a class="text-indigo-500" href="http://" >Read more</a>
        </div>
       </div> -->
      <!-- articles -->
   </div>

  </div>
  
</template>