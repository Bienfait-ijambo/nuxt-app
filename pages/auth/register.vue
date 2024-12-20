<script setup>
definePageMeta({
    layout:'auth',
})

const nuxtApp = useNuxtApp();
const loading = ref(false);


const user=ref({
    name:"ben",
    email:"ben@example.com",
    password:"password"
})
async function handleFormSubmit() {
  const res = await $fetch('http://localhost:8000/api/register', {
    method: 'POST',
    body: JSON.stringify(user.value)
  })
  console.log(res)
}
</script>
<template>
    <div class="flex  justify-between">
        <div></div>
        <div class=" w-[300px] mt-20">
            <h1 class="text-2xl">Register</h1>
            <div
      v-if="loading"
      class="fixed left-0 top-0 h-0.5 w-full z-50 bg-green-500"
    ></div>
            <input type="text" placeholder="E-mail"
            class="px-2 py-2 w-[100%] rounded-md mb-2 text-sm shadow-sm">
            <input type="text" placeholder="Password"
            class="px-2 py-2 w-[100%] mb-2  rounded-md text-sm shadow-sm">
            <NuxtLink to="/auth/login" class="hover:underline">Login ?</NuxtLink>
            <button @click="handleFormSubmit" class="text-white bg-indigo-500  rounded-md px-2 py-2 w-[100%] mt-4">Register</button>
        </div>
        <div></div>

    </div>
</template>