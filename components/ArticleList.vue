<script setup>
defineProps(['posts']);
</script>

<template>
  <div class="flex flex-wrap gap-8 justify-center">
    <div
      v-for="post in posts"
      :key="post?.id"
      class="max-w-full sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
    >
      <!-- News Image -->
      <img
        class="w-full h-60 object-cover"
        :src="post?.image"
        alt="News image"
      />
  
      <!-- Card Content -->
      <div class="p-6">
        <!-- News Title -->
        <NuxtLink
          :to="'/post/'+post?.slug"
          class="text-2xl font-semibold text-gray-900 hover:text-blue-500 transition-colors duration-300 mb-2 block"
        >
          {{ post?.title }}
        </NuxtLink>
        
     
      </div>
    </div>
  </div>
</template>
