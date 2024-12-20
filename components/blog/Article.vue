<script setup>
defineProps(["posts"]);
</script>
<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-2 p-2">
    <div
      v-for="post in posts"
      :key="post.id"
      class="bg-white rounded-md shadow-md p-2"
    >
    <img :src="post?.image" class="w-20" alt="logo">
      <h1 class="text-2xl mb-2">{{ post?.title }}</h1>
     
      <div class="mb-2" v-html="post?.post_content "></div>
      <NuxtLink :to="'/blog/'+post?.slug+'x'">Read more</NuxtLink>
      <!-- <a class="text-indigo-500" href="http://">Read more</a> -->
    </div>
  </div>
</template>
