<template>
  <div class="bg-slate-200 h-screen">
    <div class="pt-10 ml-20 mr-20">
      <div class="flex justify-between bg-white shadow-md rounded-md p-2">
        <div class="pl-5">
          <img class="w-10" src="/public/logo.png" alt="" />
        </div>
        <ul class="flex gap-2">
          <li
            class="bg-indigo-500 text-white rounded-md px-2 py-2 cursor-pointer"
          >
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li
            class="hover:bg-indigo-500 hover:text-white text-gray-700 rounded-md px-2 py-2 cursor-pointer"
          >
            <NuxtLink to="/blog/articles">Articles</NuxtLink>
          </li>

          <li
            class="hover:bg-indigo-500 hover:text-white text-gray-700 rounded-md px-2 py-2 cursor-pointer"
          >
           <a href="/blog/test">Test</a>
          </li>

          <li
            class="hover:bg-indigo-500 hover:text-white text-gray-700 rounded-md px-2 py-2 cursor-pointer"
          >
            <a href="/auth/register">Register</a>
          </li>
          <button class="pt-1 px-2 hover:bg-slate-200 rounded-full">
            <Icon name="circum:dark" style="color: black" />
          </button>
          <!-- iconoir:sun-light -->
        </ul>
      </div>

      <!-- body -->
      <div class="mt-10">
        <NuxtLoadingIndicator color="#348feb" :height="10" />
        <!-- <NuxtPage /> -->
        <slot />
      </div>
      <!-- body -->
    </div>
  </div>
</template>
