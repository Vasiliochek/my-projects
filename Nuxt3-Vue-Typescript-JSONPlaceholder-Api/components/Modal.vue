<template>
  <div class="flex justify-center items-center z-10 bg-gray-900/50 fixed top-0 bottom-0 left-0 right-0">
    <div class="flex flex-col bg-[#FFFFFF] rounded-3xl py-4 px-6 items-left  relative w-1/3 h-1/3" >
      <button type="button" class="flex items-center justify-center rounded-full bg-[#FFFFFF] absolute top-0 right-[-72px] w-10 h-10" @click="modal = false">
        <IconsCloseSvg />
      </button>
      <header class="modal-header">
        <h1 class="text-3xl font-semibold">Новый пост</h1>
      </header>
      <section class="modal-body w-full">
        <Form />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
const store = usePostsStore()
const modal = storeToRefs(store).setModal
</script>

<style scoped lang="scss">
</style>