<script setup>
definePageMeta({
  layout: "admin",
});

const postInput = ref({
  title: "",
  post_content: "",
});

const userData = getUserData();

const config = useRuntimeConfig();

const loading = ref(false);

async function createPost() {
  try {
    loading.value = true;
    const res = await $fetch(config.public?.API_BASE_URL + "/posts", {
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
        Authorization: `Bearer ${userData?.token}`,
      },

      method: "POST",
      body: JSON.stringify(postInput.value),
    });
    loading.value = false;
   postInput.value ={}

    successMsg(res?.message);
  } catch (error) {
    loading.value = false;

    if (error?.response?.status === 422) {
      const errors = error.response?._data;

      for (const message of errors) {
        showError(message);
      }
    }
  }
}

</script>
<template>
  <div>
    <h1 class="text-2xl mb-2">Create-Post</h1>

    <div class="flex flex-col mb-2 w-[600px]">
      <div class="flex flex-col mb-3">
        <input
          v-model="postInput.title"
          placeholder="Title..."
          type="text"
          class="mb-2 border rounded-md py-1 px-2 shadow-md"
        />
        <textarea
          v-model="postInput.post_content"
          name=""
          id=""
          rows="5"
          class="mb-2 border rounded-md py-1 px-2 shadow-md"
        ></textarea>
      </div>

      <div class="flex justify-between">
        <NuxtLink
          to="/admin/list-of-posts"
          class="rounded-md text-gray-700 hover:text-white border-1 border-blue-600 px-2 py-2 hover:bg-indigo-700 text-sm font-semibold"
        >
          Back
        </NuxtLink>
        <button
          :disabled="loading"
          @click="createPost"
          class="rounded-md text-white px-2 py-2 bg-indigo-700 text-sm font-semibold"
        >
          {{ loading ? "processing...." : " Create a Post" }}
        </button>
      </div>
    </div>
  </div>
</template>
