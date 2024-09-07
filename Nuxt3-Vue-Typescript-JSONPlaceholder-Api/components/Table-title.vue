<template>
  <div class="container flex justify-between items-end">
    <div class="table-title__container w-fit">
      <h1 class="text-5xl font-semibold mb-4">Таблица постов</h1>
      <p id="text">Таблица просмотра постов в соответствии с полями предусмотреными в формате отдаче <b>/posts/</b></p>
    </div>
      <button @click="modal = true" class="bg-gray-400 text-white border border-solid border-gray-400 rounded-lg px-4 py-2 hover:bg-gray-200 hover:text-gray-400">Новый пост</button>
</div>
</template>

<script setup lang="ts">
const store = usePostsStore()
const modal = storeToRefs(store).setModal
</script>

<style scoped lang="scss">
#text {
  color: #858585;
}
</style>