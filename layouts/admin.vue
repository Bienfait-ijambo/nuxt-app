<template>
  <div>
    <ul>
      <li>
        <NuxtLink to="/admin/dashboard"> Dashboard </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/blog/login"> Create post </NuxtLink>
      </li>
    </ul>

    <!-- <h1>index page</h1> -->
    <div>
      <!-- slot -->
      <slot />
    </div>
    <div style="background-color: aqua">this is footer</div>
  </div>
</template>
