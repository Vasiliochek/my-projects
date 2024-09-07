<template>
  <div class="сontainer">
    <div class="panding-container flex justify-center items-center p-80 " v-if="status === 'pending'">
      <IconsSpinerSvg class="animate-spin" />
    </div>
    <div class="table-container" v-if="status === 'success'">
      <table  class="mt-10 mb-7">
        <thead>
        <tr class="border border-1 rounded-t-lg border-gray-400 divide-x divide-solid divide-gray-400">
            <th class="px-4 py-3 flex flex-col items-center gap-1 text-gray-400" >
              <IconsUserSvg />
              <button 
                @click="setSort()"
                class="bg-gray-400 text-white border border-solid border-gray-400 rounded-lg px-4 hover:bg-gray-200 hover:text-gray-400 w-20">
                A-z
              </button>
            </th>
            <th class="px-5 py-3 text-gray-400 w-2/6">Заголовок</th>
            <th class="px-5 py-3 text-gray-400 w-3/4">Текст</th>
          </tr>
        </thead>
        <tbody>
          <TableRow v-for="post in posts" :key="post.id" :user="post.id" :title="post.title" :body="post.body"/>
        </tbody>
      </table>
      <Pagination />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Post } from '~/types/post';

const store = usePostsStore()
const currentPage = storeToRefs(store).paginationPage
const sort = storeToRefs(store).sort

const setSort = () => {
  sort.value = !sort.value
}

const posts = computed(() => {
  if (sort.value && dataPosts.value) {
    return [...dataPosts.value].sort((a: Post, b: Post) => b.userId > a.userId ? 1 : -1)
  } else {
    return dataPosts.value
  }
    
})

const { data: dataPosts, status, refresh } = useLazyFetch<Post[]>(`https://jsonplaceholder.typicode.com/posts`, {
  query: { _page: currentPage, _limit: 10 }, 
})



onBeforeMount(() => {
  refresh()
})

</script>

<style scoped lang="scss">
  .animate-spin{
    animation: spin 1s linear infinite;
  }
</style>