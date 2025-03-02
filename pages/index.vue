<script setup>
const LaravelVuePagination = await import('laravel-vue-pagination').then(m => m.default || m);
const { TailwindPagination } = LaravelVuePagination; // Extracting the component

const config = useRuntimeConfig();
const page = ref(1);
const { data, error, status, refresh } = await useFetch(
  config.public?.API_BASE_URL + "/posts",
  {
    headers: {
      Accept: "application/json",
    },
    watch: [page],
    query: {
      page: page,
    },
  }
);

const paginateData = async (newPageVal) => {
  page.value = newPageVal;
  await refresh();
};
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-start px-4 sm:px-8 lg:px-16">

    <!-- Article List -->
    <ArticleList 
      class="w-full mt-10 mb-10 "
      :posts="data?.data?.data"
    />

    <!-- Pagination -->
    <div class="w-full flex justify-center mt-6">
      <TailwindPagination
        class="mt-4 p-2 bg-white shadow-md rounded-lg w-full sm:w-auto"
        :data="data?.data"
        @pagination-change-page="paginateData"
      />
    </div>

  </div>
</template>
