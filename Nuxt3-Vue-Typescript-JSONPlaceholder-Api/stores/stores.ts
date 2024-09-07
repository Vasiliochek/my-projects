import type { Post } from '~/types/post.ts'

export const usePostsStore = defineStore('Posts', () => {

  const paginationPage = ref<number>(1)
  const quantityPages = ref<number>(0)

  const sort = ref(false)

  const setModal = ref<boolean>(false)
  

  const setQuantityPagesAndPosts = async () => {
    const res = await $fetch<Post[]>('https://jsonplaceholder.typicode.com/posts')
    quantityPages.value = Math.ceil(res.length / 10)
  }
  setQuantityPagesAndPosts()

  return {
    paginationPage,
    quantityPages,
    sort,
    setModal
  }
})