<script setup>
definePageMeta({
    layout:'auth',
})

const user=ref({
    name:"ben",
    email:"ben@example.com",
    password:"password"
})
async function loginUser() {
  const res = await $fetch('http://localhost:8000/api/login', {
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
            <h1 class="text-2xl">Login</h1>
            <input type="text" placeholder="E-mail"
            class="px-2 py-2 w-[100%] rounded-md mb-2 text-sm shadow-sm">
            <input type="text" placeholder="Password"
            class="px-2 py-2 w-[100%] mb-2  rounded-md text-sm shadow-sm">
            <NuxtLink to="/auth/register" class="hover:underline">register ?</NuxtLink>
            <button @click="loginUser" class="text-white bg-indigo-500  rounded-md px-2 py-2 w-[100%] mt-4">Login</button>
        </div>
        <div></div>

    </div>
</template>