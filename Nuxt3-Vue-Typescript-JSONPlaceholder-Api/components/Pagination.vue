<template>
  <div class="pagination-container container flex justify-center">
    <div class="pagination w-auto flex gap-3">
      <button 
      class="pagination__btn border border-solid border-gray-400 rounded-lg py-1 px-6 hover:bg-gray-200 hover:text-gray-400"
      :disabled="curentPage === 1"
      :class="{ 'opacity-20': curentPage === 1}"
      @click="setPage(curentPage - 1)"
      ><</button>
       <button 
        v-for="page in pages" :key="page"
        class="pagination__btn border border-solid border-gray-400 rounded-lg py-1 px-3 hover:bg-gray-200 hover:text-gray-400"
        :class="{ 'bg-gray-400 text-white': curentPage === page}"
        @click="setPage(page)"
        >
        {{ page }}
        </button>
      <button 
       @click="setPage(curentPage + 1)"
      class="pagination__btn border border-solid border-gray-400 rounded-lg py-1 px-6 hover:bg-gray-200 hover:text-gray-400="
      :disabled="curentPage === 10"
      :class="{ 'opacity-20': curentPage === 10}"
      >></button>
    </div>
  </div>
</template>

<script lang="ts" setup>

const store = usePostsStore()
const pages = storeToRefs(store).quantityPages
const curentPage = storeToRefs(store).paginationPage
const sort = storeToRefs(store).sort

const setPage = async (page: number) => {
  sort.value = false
  curentPage.value = page
}


</script>

<style scoped lang="scss">

</style>