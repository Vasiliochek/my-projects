<template>
  <div class="form-main">
    <form class="flex flex-col gap-3" @submit.prevent="onSave">
      <div class="form-item flex flex-col">
        <label>Заголовок поста</label>
        <input class="border border-solid border-gray-400 h-8 px-2" type="text" name="title" v-model="title" />
      </div>
      <div class="form-item flex flex-col">
        <label>Текст поста</label>
        <textarea class="border border-solid border-gray-400 h-24 resize-none py-2 px-2" maxlength="314" type="text" name="text" v-model="text"></textarea>
      </div>
      <div class="form-item flex justify-end h-10">
        <button сlass="border border-solid border-gray-400" type="submit">Запостить</button>
      </div>
    </form>
  </div>
</template>


<script setup lang="ts">
import type { Post } from '~/types/post';


const store = usePostsStore()
const quentity = storeToRefs(store).quantityPages
const modal = storeToRefs(store).setModal

const title = ref("");
const text = ref("");

const onSave = async () => {

  if (title.value && text.value) {
    const res: Post[] = await $fetch("https://jsonplaceholder.typicode.com/posts")
      if (res.filter(post => post.userId === quentity.value).length === 10) {
        $fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          body: JSON.stringify({
            userId: quentity.value + 1,
            title: title.value,
            body: text.value
          }),
          headers: {
          'Content-type': 'application/json; charset=UTF-8',
          },
        })
        modal.value = false
      } else if (res.filter(post => post.userId === quentity.value).length < 10) {
        $fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          body: JSON.stringify({
            userId: quentity.value,
            title: title.value,
            body: text.value
          }),
          headers: {
          'Content-type': 'application/json; charset=UTF-8',
          },
        })
        modal.value = false
      }
  } else {
    alert("Заполните все поля")
  }
};

</script>

<style scoped lang="scss">
button {
  @apply bg-gray-400 text-white border border-solid border-gray-400 rounded-lg px-4 py-2 hover:bg-gray-200 hover:text-gray-400
}
</style>