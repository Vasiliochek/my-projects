<script setup lang="ts">
const store = usePostsStore()
const modal = storeToRefs(store).setModal

</script>

<template>
  <Modal v-show="modal" @close="modal = false" />
  <main class="container px-14 py-10 m-auto">
    <NuxtLoadingIndicator />
    <TableTitle />
    <NuxtPage />
  </main>
</template>
